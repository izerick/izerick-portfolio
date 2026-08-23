# 📋 01. Spec-Driven Development & Orchestration Workflow

Este protocolo establece el flujo de ingeniería para todas las tareas en **Izerick Dev Studio**.

---

## 🎯 1. Clasificación por Nivel de Complejidad

Antes de codificar, clasificar la tarea o proyecto en uno de los 4 niveles:

```
┌─────────────────────────────────────────────────────────────────────────┐
│                           NIVELES DE PROYECTO                           │
├─────────────────────────────────────────────────────────────────────────┤
│ Tier 1: Landing Page / Web Corporativa (Rápido, Ligero, Alto Impacto)   │
│ Tier 2: E-Commerce / Catálogo Comercial (Enfoque en Conversión)         │
│ Tier 3: SaaS / Plataforma Administrativa (Producción, Auth, RLS)         │
│ Tier 4: Pipeline de Automatización con IA / n8n / Embudos CAPI          │
└─────────────────────────────────────────────────────────────────────────┘
```

| Nivel | Documentos Requeridos | Skills Involucradas | Puntos Críticos Obligatorios |
| :--- | :--- | :--- | :--- |
| **Tier 1: Landing / Corporativa** | `docs/spec.md`, `docs/design.md` | `taste-skill`, `frontend-design`, `emil-kowalski-animations` | Diseño visual distintivo, Core Web Vitals (LCP < 1.2s), SEO local y técnico. |
| **Tier 2: E-Commerce / Catálogo** | `docs/spec.md`, `docs/roadmap.md`, `docs/design.md` | Las de Tier 1 + `web-compliance-legal` | Microcopy persuasivo, embudo de cotización/compra, avisos de cookies y políticas. |
| **Tier 3: SaaS / Software a Medida** | Todos (`spec`, `roadmap`, `design`, `rules`) | Todas + `infrastructure-security` | RLS en base de datos, checkpoint humano en SQL, idempotencia en webhooks, Sentry y .env protegido. |
| **Tier 4: Automatizaciones & IA** | `docs/spec.md`, `docs/rules.md` | `infrastructure-security` | Webhooks n8n, modelos multimodales (Gemini/Claude), integración CAPI y reintentos. |

---

## 🛡️ 2. Reglas Inquebrantables

1. **Checkpoint Humano en Base de Datos:** NUNCA ejecutar scripts SQL destructivos o modificar esquemas en producción sin autorización explícita del usuario.
2. **Cero Look Genérico de IA:** Diseñar siempre con intención, contraste y layouts asimétricos o modulares.
3. **Aislamiento de Entorno:** Ningún secreto en el frontend o commits de git.
4. **Definición de Terminado (Definition of Done):**
   - [ ] Tipos de TypeScript estrictos sin `any` innecesarios.
   - [ ] Build de producción (`npm run build`) pasando en verde sin advertencias críticas.
   - [ ] Manejo de errores y estados de carga visibles para el usuario.
