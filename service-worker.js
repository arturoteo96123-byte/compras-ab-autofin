// Versión técnica; las compras siguen al corte declarado por index.html.
const BUILD = 'offline-20261013-septiembre-1';
const BASE = new URL('./', self.location.href);
const PREFIX = 'compras-ab-autofin:' + BASE.pathname + ':';
const CACHE = PREFIX + BUILD;
const INDEX = new URL('index.html', BASE).href;
const ASSETS = ['manifest.webmanifest','icon.svg','icon-192.png','icon-512.png','apple-touch-icon.png'].map(p => new URL(p,BASE).href);
async function download(url, html=false, timeout=60000) {
  const abort = new AbortController();
  const timer = setTimeout(()=>abort.abort(),timeout);
  try {
    const response = await fetch(url,{cache:'no-store',signal:abort.signal});
    if (!response.ok || response.redirected) throw Error('Respuesta no válida');
    const bytes = await response.arrayBuffer();
    if (html) {
      const text = new TextDecoder().decode(bytes);
      const start = text.indexOf('const D=') + 8;
      const end = text.indexOf(';const money=',start);
      if (!response.headers.get('content-type')?.includes('text/html') || start < 8 || end < start || !text.includes('</html>')) throw Error('Página incompleta');
      const data = JSON.parse(text.slice(start,end));
      if (!Array.isArray(data.products) || !Array.isArray(data.months) || !data.products.length) throw Error('Datos ausentes');
    }
    return new Response(bytes,{status:200,headers:response.headers});
  } finally { clearTimeout(timer); }
}
self.addEventListener('install',event=>event.waitUntil((async()=>{
  const cache=await caches.open(CACHE);
  await cache.put(INDEX,await download(INDEX,true));
  await Promise.all(ASSETS.map(async url=>{try{await cache.put(url,await download(url));}catch(_) {}}));
  await self.skipWaiting();
})()));
self.addEventListener('activate',event=>event.waitUntil((async()=>{
  if (await (await caches.open(CACHE)).match(INDEX)) {
    for (const key of await caches.keys()) if(key.startsWith(PREFIX)&&key!==CACHE) await caches.delete(key);
  }
  await self.clients.claim();
})()));
async function refresh() {
  const response=await download(INDEX,true);
  try {await (await caches.open(CACHE)).put(INDEX,response.clone());} catch(_) {}
  return response;
}
async function saved() {
  const cached=await (await caches.open(CACHE)).match(INDEX);
  if (!cached) return null;
  return new Response((await cached.text()).replace('</head>','<meta name="offline-copy" content="true"></head>'),{headers:{'Content-Type':'text/html; charset=utf-8'}});
}
self.addEventListener('fetch',event=>{
  const url=new URL(event.request.url);
  if(event.request.method!=='GET'||url.origin!==BASE.origin)return;
  if(event.request.mode==='navigate'&&(url.pathname===BASE.pathname||url.pathname===new URL(INDEX).pathname)) {
    // La descarga continúa hasta 60 s; con copia guardada la interfaz espera como máximo 4 s.
    const network=refresh(); event.waitUntil(network.catch(()=>{}));
    event.respondWith((async()=>{
      const cached=await saved();
      if(cached) {
        let timer;
        try {return await Promise.race([network.catch(()=>cached),new Promise(resolve=>{timer=setTimeout(()=>resolve(cached),4000);})]);}
        finally {clearTimeout(timer);}
      }
      try {return await network;}catch(_) {
        return new Response('<!doctype html><meta charset="utf-8"><h1>Primera carga pendiente</h1><p>Conéctate a internet y vuelve a abrir la app para guardarla.</p>',{status:503,headers:{'Content-Type':'text/html; charset=utf-8'}});
      }
    })()); return;
  }
  const asset=ASSETS.find(p=>new URL(p).pathname===url.pathname);
  if(asset) event.respondWith((async()=>{
    const cache=await caches.open(CACHE),cached=await cache.match(asset);
    if(cached)return cached;
    try{const response=await download(asset);await cache.put(asset,response.clone());return response;}catch(_){return Response.error();}
  })());
});
self.addEventListener('message',event=>{
  if(event.data?.type==='OFFLINE_STATUS')event.waitUntil((async()=>{
    const cached=await (await caches.open(CACHE)).match(INDEX);
    const text=cached?await cached.text():'';
    const version=text.match(/<meta name="app-release" content="([^"]+)"/);
    event.ports[0]?.postMessage({ready:!!cached,release:version?.[1]||null});
  })());
});
