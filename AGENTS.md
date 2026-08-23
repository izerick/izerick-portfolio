# 🤖 Izerick Dev Studio — Workspace Rules & Agent Guidelines

Este archivo rige el comportamiento, estándares de ingeniería, seguridad, diseño y flujo de trabajo para cualquier agente de Inteligencia Artificial que opere en este repositorio (`izerick-portfolio`).

---

## 🎯 1. Identidad del Proyecto & Stack Tecnológico

* **Proyecto:** Portafolio Oficial & Plataforma de Servicios de **Erick Bermello (@izerick)** / *Izerick Dev Studio*.
* **Propósito:** Mostrar proyectos de software de alto nivel, plataformas SaaS, servicios de desarrollo y captación automatizada de clientes (leads).
* **Tech Stack Principal:**
  - **Frontend:** React 19, TypeScript (~5.7), Vite 6, Tailwind CSS 3.4, Framer Motion 12, Lucide React, React Router DOM 7.
  - **Backend Serverless:** Vercel Serverless Functions (`/api/lead.ts`) con integración a Telegram Bot API y Notion CRM API.
  - **Analítica:** Umami Analytics (`analytics.izerick.dev`), Vercel Analytics y Speed Insights.
  - **Despliegue & DNS:** Vercel + Cloudflare Proxy / VPS Linux para servicios autohospedados.

---

## 🛡️ 2. Reglas Fundamentales de Operación

### 🛑 Regla 1: Integridad de Diseño y Contenido
* **NUNCA** alterar componentes de UI, textos de venta, precios, estructura de páginas o estilos sin una solicitud explícita del desarrollador.
* Proponer siempre mejoras mediante sugerencias antes de modificar código visual existente.

### 🛑 Regla 2: Checkpoint Humano en Base de Datos y APIs Críticas
* **NUNCA** ejecutar scripts de migración destructivos o modificar esquemas de bases de datos/CRM sin aprobación humana previa.
* Todo cambio en endpoints de API (`/api/*`) debe mantener tipado estricto y manejo de errores con fallback.

### 🛑 Regla 3: Protección de Credenciales y Seguridad
* Ningún token sensible (`TELEGRAM_BOT_TOKEN`, `NOTION_TOKEN`, llaves privadas) debe quedar quemado en texto plano en el frontend o repositorios públicos.
* Variables de entorno deben estar en `.env.local` / `.env` y estrictamente listadas en `.gitignore`.
* En endpoints serverless, validar métodos HTTP (`POST`), sanitizar inputs y escapar contenido HTML en notificaciones.

---

## 📚 3. Habilidades & Estándares Integrados (Skills del Estudio)

### 🚀 A. Spec-Driven Development (`spec-workflow`)
* Clasificar siempre los proyectos y tareas por nivel:
  - **Tier 1:** Landing / Web Corporativa (Rápido, SEO, CWV, estética premium).
  - **Tier 2:** E-Commerce / Catálogos (Funnels, microcopy de conversión, checkout, legal).
  - **Tier 3:** SaaS / Software a Medida (Supabase, RLS, SQL con checkpoint, Sentry, seguridad estricta).
  - **Tier 4:** Automatizaciones & Embudos con IA (n8n, webhooks, OCR multimodal, CAPI).
* Mantener la arquitectura documental en la carpeta `docs/` (`spec.md`, `roadmap.md`, `design.md`, `rules.md`).

### 🎨 B. Taste & Anti-AI Slop (`taste-skill`)
* Evitar tropos genéricos de IA:
  - Cero esferas moradas desenfocadas genéricas.
  - Cero textos deslavados sin contraste; mantener ratios WCAG AAA en textos clave.
  - Diseños con personalidad: grids bento asimétricos, estética ciberpunk sobria, contrastes con acentos esmeralda (`#10b981`).
  - Iconografía unificada con Lucide React (cero exceso de emojis).

### ⚡ C. Animaciones & Microinteracciones (`emil-kowalski-animations`)
* Uso de físicas de resortes (`spring`: `stiffness`, `damping`, `mass`) en lugar de curvas lineales bruscas.
* Feedback táctil en botones y enlaces interactivos (`whileTap={{ scale: 0.97 }}`).
* Escalonamiento (*staggering*) de 30ms-50ms en listas de elementos.
* Respeto estricto a accesibilidad (`prefers-reduced-motion`).

### 🔐 D. Seguridad & Hardening (`infrastructure-security`)
* Protección perimetral con Cloudflare WAF y SSL/TLS en modo estricto.
* Servidores y VPS con UFW cerrado (solo 80/443), SSH con autenticación por clave y Fail2ban activo.
* Bloqueo de acceso directo a archivos dotfiles (`.env`, `.git`) en servidores web.

### ⚖️ E. Cumplimiento Legal & Transparencia (`web-compliance-legal`)
* Fuentes 100% de código abierto (Google Fonts: *Plus Jakarta Sans*, *Outfit*, *JetBrains Mono*).
* Recursos multimedia propios o con licencias comerciales libres (Unsplash/Pexels).
* Consentimiento transparente en formularios de captura y políticas de privacidad accesibles.

---

## 📁 4. Estructura de Documentación y Reglas Modulares

* **Reglas Modulares:** `.agents/rules/`
  - `01-spec-workflow.md`: Metodología Spec-Driven y Tiers.
  - `02-taste-and-design.md`: Sistema de diseño, contraste y anti-patrones visuales.
  - `03-motion-and-animations.md`: Estándares de animación fluida y rendimiento.
  - `04-security-and-infrastructure.md`: Seguridad serverless, VPS y APIs.
  - `05-legal-and-compliance.md`: Cumplimiento normativo y licencias.
  - `06-code-quality-and-stack.md`: Guía de estilo TypeScript, React 19 y Tailwind.
* **Documentación del Proyecto:** `docs/`
  - `docs/spec.md`: Especificación técnica del portafolio.
  - `docs/roadmap.md`: Estado actual y próximas mejoras planificadas.
  - `docs/design.md`: Guía visual, tipográfica y de microcopy.
  - `docs/rules.md`: Restricciones de desarrollo y despliegue.
