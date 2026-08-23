# 🛡️ Reglas de Negocio & Restricciones Técnicas

Reglas operativas y directrices técnicas específicas para el portafolio de **Izerick Dev Studio**.

---

## 🔒 1. Manejo de Credenciales y APIs

* **Variables de Entorno Requeridas en Vercel:**
  - `TELEGRAM_BOT_TOKEN`: Token de autenticación del bot de Telegram.
  - `TELEGRAM_CHAT_ID`: ID del chat receptor de notificaciones de leads.
  - `NOTION_TOKEN`: Token de integración de la API interna de Notion.
  - `NOTION_DATABASE_ID`: ID de la base de datos de leads en Notion.
* **Restricción de Frontend:** Ninguna clave secreta debe ser accesible desde el cliente del navegador ni prefijada con `VITE_`.

---

## 🚀 2. Rendimiento & Core Web Vitals (CWV)

* **LCP (Largest Contentful Paint):** Carga prioritaria de tipografías mediante preconnect a Google Fonts.
* **Canvas de Secuencia de Scroll:** La precarga de imágenes de la secuencia en `BackgroundScrollCanvas` debe realizarse de manera diferida para no penalizar el tiempo inicial de interactividad.
* **Optimización de Assets:** Todas las imágenes en `public/` y `dist/` deben estar comprimidas y con dimensiones adaptadas.

---

## ⚖️ 3. Reglas de Despliegue y Git

* Rama principal: `main`.
* Todo push a `main` activa despliegue automático en Vercel.
* Antes de hacer merge o commit, validar que `npm run build` ejecute sin errores de TypeScript ni errores de empaquetado de Vite.
