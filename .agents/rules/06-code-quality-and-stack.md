# 💻 06. Code Quality, TypeScript & Stack Standards

Guía de arquitectura de código y convenciones técnicas para el portafolio y aplicaciones de **Izerick Dev Studio**.

---

## 🛠️ 1. Stack & Herramientas

* **Runtime & Bundler:** Vite 6 + React 19 + TypeScript (~5.7).
* **Estilos:** Tailwind CSS 3.4 con utilidades de combinación segura (`clsx`, `tailwind-merge`).
* **Enrutamiento:** `react-router-dom` v7 con rutas limpias (`/`, `/perfil`, `/proyectos`, `/servicios`, `/cotizar`, `/contacto`, `/landing-page`).
* **Animaciones:** `framer-motion` v12.

---

## 📐 2. Principios de Código

1. **Tipado Estricto:**
   - Evitar tipos implícitos `any`.
   - Centralizar tipos e interfaces en archivos dedicados o en la cabecera de componentes modulares.
2. **Componentes Pequeños y Reutilizables:**
   - Separar lógica de presentación (`components/`) de las vistas de página (`pages/`).
   - Mantener datos estáticos de proyectos y servicios en `src/data/portfolioData.ts` para facilitar actualizaciones de contenido.
3. **Optimización de Renderizado:**
   - Utilizar carga diferida de imágenes y secuencias (`ScrollImageSequence`, `BackgroundScrollCanvas`).
   - Evitar re-renders masivos memorizando callbacks pesados si es necesario.
4. **Verificación de Compilación:**
   - Todo cambio debe compilar limpiamente ejecutando `npm run build` (`tsc -b && vite build`) sin errores de tipos.
