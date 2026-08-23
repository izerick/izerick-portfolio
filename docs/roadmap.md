# 🗺️ Roadmap de Producto & Evolución

Seguimiento del estado actual del portafolio y futuras mejoras planificadas para **Izerick Dev Studio**.

---

## 🟢 Fase 1: Arquitectura Base & Rutas Principales (Completado)
- [x] Configuración de Vite, React 19, TypeScript y Tailwind CSS.
- [x] Sistema de enrutamiento multi-página con `react-router-dom` (`/`, `/perfil`, `/proyectos`, `/servicios`, `/cotizar`, `/contacto`, `/landing-page`).
- [x] Canvas de fondo interactivo basado en scroll (`BackgroundScrollCanvas`).
- [x] Cotizador interactivo con cálculo dinámico de anticipo, entrega y hosting.
- [x] Endpoint serverless `/api/lead.ts` con despacho dual a Telegram y Notion CRM.
- [x] Integración de analítica respetuosa con la privacidad mediante Umami Analytics (`analytics.izerick.dev`).
- [x] SEO estructurado con metadatos OpenGraph, Twitter Cards y Schema JSON-LD.

---

## 🟡 Fase 2: Reglas de Ingeniería & Documentación (Completado)
- [x] Creación de `AGENTS.md` y `GEMINI.md` para orquestación de agentes en el workspace.
- [x] Reglas modulares en `.agents/rules/` (`spec-workflow`, `taste-and-design`, `motion`, `security`, `legal`, `code-quality`).
- [x] Estructura documental oficial en `docs/` (`spec.md`, `rules.md`, `design.md`, `roadmap.md`).

---

## 🔵 Fase 3: Próximas Mejoras Sugeridas (Propuestas a Evaluar)
- [ ] Incorporación de sección de testimonios o casos de estudio con métricas cuantitativas de clientes reales.
- [ ] Selector interactivo de moneda (USD por defecto) o desglose en PDF descargable de cotización.
- [ ] Vista previa interactiva embebida (Live iFrame Sandbox) de los proyectos en la página de `/proyectos`.
- [ ] Modo de alto rendimiento / toggle para desactivar la animación de canvas en dispositivos de muy baja potencia.
