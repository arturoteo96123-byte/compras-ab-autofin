# Publicar Compras A&B Intelligence — septiembre de 2026

Grupo Autofin · Princess y Palacio. Preparado el 13 de octubre de 2026. Corte de compras: 30 de septiembre de 2026.

La app está lista como paquete estático para publicación manual. GitHub no se modificó. Incluye la actualización de septiembre, el catálogo, proveedores identificados, comparativos y KPIs; el corte de agosto permanece accesible en el selector Periodo de consulta. Los datos y el histórico funcionan sin conexión después de guardar una primera carga completa en el dispositivo.

## Qué hacer ahora

1. Descarga COMPRAS_AB_AUTOFIN_SEPTIEMBRE_2026.zip desde este chat.
2. En Descargas, haz clic derecho en el ZIP → Extraer todo. Abre la carpeta extraída.
3. En GitHub, si sigues en la pantalla Name your file, pulsa Cancel changes. Regresa a la pestaña Code del repositorio arturoteo96123-byte/compras-ab-autofin.
4. Revisa primero Settings → Pages para confirmar la rama y carpeta publicadas. Guarda una copia previa con Code → Download ZIP. Si la app ya se publica desde main y /(root), mantén esa configuración.
5. En Code, abre esa misma rama y carpeta. Pulsa Add file → Upload files. Arrastra los archivos extraídos; no el ZIP ni una carpeta que agregue otro nivel. Los archivos indispensables son index.html, service-worker.js, manifest.webmanifest, icon.svg, icon-192.png, icon-512.png y apple-touch-icon.png. Incluye .nojekyll. Todos deben quedar juntos en la carpeta que publica Pages.
6. Comprueba que se sustituyen index.html, service-worker.js y manifest.webmanifest y que aparecen los PNG nuevos. Las instrucciones y documentos de conciliación también se pueden conservar junto a la app. No necesitas subir el Excel original.
7. Escribe un mensaje como Actualizar compras a septiembre 2026 y corregir uso offline. Pulsa Commit changes. Si el repositorio exige revisión, usa su rama y pull request habituales.
8. En Settings → Pages, si aún no existe configuración de publicación desde rama, selecciona Deploy from a branch, la rama correcta y /(root), o /docs si ahí colocaste los archivos. Pulsa Save. Si el repositorio ya usa GitHub Actions, conserva su proceso y su carpeta de salida.
9. Espera a que el despliegue termine correctamente en Actions. Abre el enlace que muestra Settings → Pages. La dirección esperada según el repositorio es https://arturoteo96123-byte.github.io/compras-ab-autofin/; confírmala en Pages. No se verificó aquí que esa dirección esté publicada.
10. Abre el enlace HTTPS en Chrome o Safari del celular, con internet. Pulsa Actualizar si aparece el corte antiguo. Espera Lista para usar sin conexión. Debe verse 30/09/2026 y el selector con septiembre y agosto.
11. Prueba con Wi-Fi, luego con Wi-Fi desactivado y datos móviles, y finalmente en modo avión. Abre catálogo, una ficha y el histórico de agosto. Si agregas la app a la pantalla de inicio, prueba también ese acceso.

La app contiene datos de compras y no implementa autenticación. Revisa que el acceso a la publicación sea el previsto por la empresa antes de confirmar los cambios. No se publicará automáticamente desde este chat.

## Qué se actualizó

- Excel acumulado enero–septiembre, leído una sola vez; no se agregó su acumulado al de agosto.
- 8,267 filas de artículo de 22 hojas; 6,978 códigos distintos y 6,981 combinaciones artículo/unidad. Son 344 códigos nuevos respecto al corte anterior.
- Catálogo con búsqueda, categorías, hotel y botón Mostrar más; ya no queda limitado a las primeras 350 tarjetas. Para septiembre, el filtro de hotel cambia los importes y cantidades de la tarjeta y ficha al hotel elegido.
- Nueve meses de histórico en las fichas. Se mantienen las etiquetas de categoría previas: 12 etiquetas para 11 almacenes, por las dos denominaciones del almacén 102. No se elimina una etiqueta histórica silenciosamente.
- 480 etiquetas válidas de último proveedor y un grupo de seis filas sin proveedor identificable. Se pueden buscar todas; las listas de proveedores del histórico se conservan en cada ficha y en el corte de agosto.
- 2,856 comparativos de precio medio con búsqueda y Mostrar más. Se calculan desde importe/cantidad para la misma unidad y el primer/último mes con importe y cantidad positivos. No se calculan para unidades desconocidas. Los 150 comparativos antiguos se mantienen en agosto.
- Pregúntale considera todas las coincidencias y separa cantidades por unidad; no suma cantidades de productos sin unidad identificada.
- El corte de agosto mantiene íntegro el objeto de datos recibido: 6,634 códigos, 6,638 combinaciones, 459 nombres de proveedor y los rankings originales. El selector permite consultarlo sin mezclarlo con septiembre.

## Cifras y conciliaciones

El KPI principal usa la suma de importes mensuales del detalle, incluido el neto de movimientos negativos. No se distribuyeron diferencias ni se agregaron ajustes para cuadrar.

| Control | Importe MXN |
| --- | ---: |
| Detalle mensual enero–septiembre; KPI de la app | $252,518,561.75 |
| Suma de totales por fila, con la fila desalineada documentada | $252,518,561.48 |
| Totales generales de las 22 hojas; RESUMEN_COMPRAS!L17 | $252,518,561.44 |
| Suma de controles mensuales por hoja | $252,518,561.43 |
| RESUMEN_COMPRAS!D65, resumen mensual declarado | $252,518,561.34 |
| Septiembre, suma del detalle AD | $19,480,520.39 |
| Septiembre, RESUMEN_COMPRAS!D61 | $19,480,520.35 |

Diferencias: detalle contra L17 +$0.31; detalle contra totales por fila +$0.27; L17 contra D65 +$0.10; septiembre detalle contra D61 +$0.04. Las referencias D6:D16 y H6:H16 del resumen coinciden con los valores de las celdas de total general que referencian. La suma mensual del detalle, los productos, los hoteles y las asociaciones de último proveedor de la app concilian entre sí a centavos.

Las cantidades y los importes de enero–agosto coinciden por código de artículo y mes con el ZIP original. La suma mensual de ese periodo se mantiene en $233,038,041.36. El corte antiguo conserva además sus totales de producto $233,038,041.20 y resumen declarado $233,038,041.10. Su fecha no se reescribe.

Algunos códigos cambian la unidad informada respecto al ZIP; se conserva el corte previo para inspeccionar el cambio. No se suman unidades distintas dentro de una ficha. El fichero CONCILIACION_POR_HOJA.csv contiene los controles por hoja y VALIDACION_Y_TRAZABILIDAD.json registra pruebas y huellas de los archivos.

### Excepciones conservadas y reparaciones respaldadas

- PRINCESS_201_BEBIDAS, fila 49, artículo 25316 Gatorade: A49 contiene 1, E49 y V49 contienen 500ML, mientras los totales aparecen en R49 y AI49, no en Q49/AH49. La app conserva la unidad PZA y enero sin movimientos del ZIP, y usa los valores de agosto L49/AC49, septiembre M49/AD49 y totales R49/AI49. Importe $3,381.20, cantidad 216; no se inventaron compras de septiembre. El Excel original no se modificó.
- Se conservaron cuatro unidades únicas del histórico que el Excel actual no informa: artículos 1232 GAL, 1357 KGR, 1376 KGR y 60137 PZA. Cada ficha explica que la unidad es heredada. Los datos actuales conocidos se mantienen; el cambio queda registrado.
- 147 filas traen 0 en la columna unidad; se considera unidad desconocida. Con las filas vacías y las herencias documentadas quedan 150 filas sin unidad identificada. No se infiere su unidad desde la descripción.
- Cinco celdas de último proveedor contienen #N/A: PRINCESS_201_BEBIDAS!AW85 y PRINCESS_503_MANTENIMIENTO!AW6, AW7, AW264 y AW1410. Gatorade carece de proveedor. Sus seis filas se mantienen en el grupo no identificable, por un neto de -$226,089.38. El signo negativo se conserva; no se elimina como anomalía.
- El libro contiene 21 errores #N/A; cinco están en filas de detalle usadas para proveedor y los restantes se encuentran fuera del detalle de artículo utilizado. No se usan errores como nombres de proveedor.
- Seis filas presentan más de un centavo entre suma mensual y total de fila: PRINCESS_101_ALIMENTOS fila 607; PALACIO_101_ALIMENTOS filas 356 y 493; PRINCESS_201_BEBIDAS filas 24, 48 y 75. Hay también diferencias individuales de un centavo. Sus valores originales permanecen en la trazabilidad.

La revisión confirma la consistencia descrita, con salvedades de origen. No demuestra que cada movimiento corresponda a una factura correcta ni explica por sí sola por qué existen diferencias de centavos. La fórmula TODAY del libro no define el corte: se utiliza el periodo enero–septiembre 2026 declarado en el resumen y sus columnas mensuales.

## Cómo interpretar proveedores y precios

AW se titula ULTIMO PROVEEDOR. Vincular todo el gasto de un artículo a esa etiqueta sirve para explorar asociaciones, pero no identifica compras facturadas por proveedor. La app muestra Importe de artículos asociados y mantiene esta salvedad junto al ranking, tabla y fichas. No se reasignan importes a proveedores del histórico.

Las variaciones comparan precios medios ponderados por cantidades de la misma unidad. Mezcla de productos, bonificaciones, ajustes o errores de origen pueden influir. Una base extremadamente pequeña puede producir variaciones muy grandes; no se interpreta automáticamente como inflación o ahorro.

## Conexión, caché, manifest y rutas

Se conserva la corrección técnica previa y se entrega una nueva versión de caché para septiembre. No hay librerías externas, CDN ni consultas a servicios: datos, estilos y lógica están incorporados en index.html. La copia offline incluye septiembre y agosto.

- Rutas relativas para service worker, manifest e iconos; alcance vinculado a la carpeta del repositorio.
- Manifest con id, start_url y scope relativos; PNG de 192 y 512 px, SVG y apple-touch-icon de 180 px.
- Descarga de HTML completa y validada antes de sustituir la última copia buena: HTTP correcto, tipo HTML, JSON parseable con productos/meses y cierre del documento.
- Si ya hay una copia guardada, ante una conexión lenta la interfaz espera unos cuatro segundos y la abre. La descarga online sigue hasta 60 segundos y actualiza la caché al completarse. Vuelve a abrir o pulsa Actualizar para visualizar esa nueva descarga.
- Un HTML parcial o una página de error no reemplaza el catálogo guardado. Las cachés propias antiguas se eliminan después de instalar la copia nueva; no se borran las de otras apps.
- La barra de estado confirma la identificación de esta versión. El sistema offline necesita HTTPS o localhost; abrir un archivo con doble clic no equivale a publicar la app.

El primer guardado requiere descargar el HTML completo, de aproximadamente 10.3 MB sin comprimir; incluye el histórico. Mantén abierta la página con conexión suficiente hasta confirmar el aviso. Cada navegador y dispositivo guarda su copia de manera independiente. La persistencia depende del almacenamiento que conserve el navegador.

### Si algo falla después de publicar

1. Comprueba que el despliegue de Pages terminó y que index.html y service-worker.js están juntos en la carpeta publicada.
2. Abre la misma dirección HTTPS de Pages en ambas redes. Usa la barra final de la carpeta: /compras-ab-autofin/. No uses github.com del repositorio ni raw.githubusercontent.com.
3. Si ves agosto, espera la instalación de la nueva versión y pulsa Actualizar. No borres cachés ni desinstales rutinariamente.
4. Si ves Preparando el uso sin conexión, mantén abierta la página con internet. Si la descarga no termina, reintenta con buena conexión.
5. Si solo falla con datos móviles, comprueba que otras páginas HTTPS funcionan y si hay restricciones de red, DNS, VPN o portal de acceso. No se demostró un fallo específico de operador y el código no puede reparar una red sin acceso al servidor.
6. Si el navegador elimina los datos de almacenamiento o usas un modo que no los conserva, vuelve a cargar online para guardar la app.

## Pruebas realizadas y límites

Edge/Chromium local, viewport móvil 390 × 844; revisión visual del dashboard móvil de septiembre. No hubo errores JavaScript en los flujos funcionales revisados.

- Primera carga de septiembre y confirmación Lista para usar sin conexión.
- 90 → 180 tarjetas con Mostrar más; búsqueda, categorías, hotel y ficha.
- Gas LP filtrado a Princess: nueve meses y $10,812,291.81, comprobado contra las filas fuente de ese hotel.
- 481 filas de asociaciones de proveedor (480 etiquetas y el grupo desconocido); búsqueda del grupo sin proveedor.
- 150 → 300 comparativos; búsqueda naranja con 15 comparativos.
- Consulta cerveza: 26 coincidencias, $5,547,408.49, cantidades LAT/PZA/BOT separadas.
- Selector agosto: objeto de datos preservado íntegramente; ficha de ocho meses. Selector septiembre: nueve meses y nota de Gatorade.
- Desconexión simulada: apertura de index.html con parámetros, consulta de agosto y regreso a la carpeta del proyecto.
- Conexión lenta simulada de 6.5 segundos: copia guardada en aproximadamente 4.6 segundos.
- HTML truncado e inválido: la copia de septiembre permanece disponible; recuperación online posterior correcta.
- Actualización técnica desde agosto: nueva caché activada y anterior propia retirada; caché de otra app conservada. Una comprobación adicional de reapertura posterior se interrumpió por tiempo de espera del entorno.

Pendiente de comprobar en destino: despliegue real en GitHub Pages; Wi-Fi y datos móviles en teléfono real; Safari/iOS e instalación desde pantalla de inicio. El comportamiento en raíz fue probado en la entrega técnica previa; el paquete de septiembre se probó principalmente bajo /compras-ab-autofin/. Una prueba adicional de raíz/reapertura se interrumpió. No se presenta una prueba simulada como validación de un operador real.

## Próxima actualización

Conserva la ruta del repositorio y la estructura de archivos. Distingue siempre acumulado anual de movimientos del nuevo mes. Repite la comparación por artículo/mes contra el corte anterior, documenta cambios de unidad y proveedor, y calcula el nuevo gasto desde el detalle antes de actualizar los KPIs. Cambia app-release y la versión de caché al entregar una nueva versión con histórico incorporado. No rellenes meses futuros con cero como si fueran datos observados.

## Referencias oficiales

- [Crear un sitio GitHub Pages](https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site).
- [Configurar la fuente de publicación](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site).
- [Service workers: registro y ciclo de vida](https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API/Using_Service_Workers).
- [Caché para aplicaciones web progresivas](https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps/Guides/Caching).
