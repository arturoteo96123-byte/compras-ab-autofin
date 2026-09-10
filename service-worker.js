// Cambiar BUILD sólo al modificar el sistema offline; actualizar index.html no lo requiere.
const BUILD = 'offline-20260910-1';
const BASE = new URL('./', self.location.href);
const PREFIX = 'compras-ab-autofin:' + BASE.pathname + ':';
const CACHE = PREFIX + BUILD;
const INDEX = new URL('index.html', BASE).href;
const ASSETS = ['manifest.webmanifest', 'icon.svg'].map(p => new URL(p, BASE).href);

async function download(url, html = false, timeout = 8000) {
  const abort = new AbortController();
  const timer = setTimeout(() => abort.abort(), timeout);
  try {
    const response = await fetch(url, {cache:'no-store', signal:abort.signal});
    if (!response.ok || response.redirected) throw Error('Respuesta no válida');
    // Leer el cuerpo entero antes de reemplazar la última copia buena.
    const bytes = await response.arrayBuffer();
    if (html) {
      const text = new TextDecoder().decode(bytes);
      if (!response.headers.get('content-type')?.includes('text/html') ||
          !text.includes('const D=') || !text.includes('</html>')) throw Error('Página incompleta');
    }
    return new Response(bytes, {status:200, headers:response.headers});
  } finally { clearTimeout(timer); }
}
self.addEventListener('install', event => {
  event.waitUntil((async () => {
    const cache = await caches.open(CACHE);
    await cache.put(INDEX, await download(INDEX, true, 60000));
    // Un icono o manifest temporalmente ausente no bloquea la app offline.
    await Promise.all(ASSETS.map(async url => {
      try {await cache.put(url, await download(url));} catch (_) {}
    }));
    await self.skipWaiting();
  })());
});
self.addEventListener('activate', event => {
  event.waitUntil((async () => {
    // Sólo borrar cachés propias y después de comprobar la nueva copia.
    if (await (await caches.open(CACHE)).match(INDEX)) {
      for (const key of await caches.keys()) {
        if (key.startsWith(PREFIX) && key !== CACHE) await caches.delete(key);
      }
    }
    await self.clients.claim();
  })());
});
async function page() {
  const cache = await caches.open(CACHE);
  try {
    const response = await download(INDEX, true);
    try {await cache.put(INDEX, response.clone());} catch (_) { /* No ocultar la respuesta online. */ }
    return response;
  } catch (_) {
    const cached = await cache.match(INDEX);
    if (cached) {
      const text = (await cached.text()).replace('</head>', '<meta name="offline-copy" content="true"></head>');
      return new Response(text, {headers:{'Content-Type':'text/html; charset=utf-8'}});
    }
    return new Response('<!doctype html><meta charset="utf-8"><h1>Primera carga pendiente</h1><p>Conéctate a internet y vuelve a abrir la app para guardarla.</p>', {status:503,headers:{'Content-Type':'text/html; charset=utf-8'}});
  }
}
self.addEventListener('fetch', event => {
  const url = new URL(event.request.url);
  if (event.request.method !== 'GET' || url.origin !== BASE.origin) return;
  if (event.request.mode === 'navigate' && (url.pathname === BASE.pathname || url.pathname === new URL(INDEX).pathname)) {
    event.respondWith(page()); return;
  }
  if (ASSETS.includes(url.href)) event.respondWith((async () => {
    const cache = await caches.open(CACHE);
    try {
      const response = await download(url.href);
      try {await cache.put(url.href,response.clone());} catch (_) {}
      return response;
    } catch (_) {return (await cache.match(url.href)) || Response.error();}
  })());
});
self.addEventListener('message', event => {
  if (event.data?.type === 'OFFLINE_STATUS') event.waitUntil((async () => {
    const ready = !!await (await caches.open(CACHE)).match(INDEX);
    event.ports[0]?.postMessage({ready});
  })());
});
