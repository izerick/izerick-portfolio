# 🚀 Especificación Central: Izerick Dev Portfolio

Documento maestro de especificación para la plataforma web y portafolio de ingeniería de software de **Erick Bermello (@izerick)**.

---

## 🎯 1. Visión & Objetivos

* **Objetivo Principal:** Posicionar a **Izerick Dev Studio** como un referente de ingeniería de software moderna, desarrollo a medida, plataformas SaaS y automatizaciones con IA en Ecuador y el mercado internacional.
* **Conversión Clave:** Convertir visitantes en clientes potenciales calificados a través del cotizador interactivo (`/cotizar`), la oferta de landing pages (`/landing-page`) y el formulario de contacto directo conectado a **Telegram** y **Notion CRM**.

---

## 🏗️ 2. Arquitectura de Páginas & Rutas

1. **`/` (Inicio / HomePage):**
   - Canvas de fondo interactivo con secuencia de imágenes controlada por scroll (`BackgroundScrollCanvas`).
   - Hero Section con llamada a la acción y terminal HUD interactivo.
   - Resumen de servicios, proyectos destacados, stack tecnológico y sección de preguntas frecuentes (FAQ).
2. **`/perfil` (Sobre Mí / AboutPage):**
   - Filosofía de ingeniería, trayectoria y enfoque en arquitectura de software.
3. **`/proyectos` (Proyectos / ProjectsPage):**
   - Showcase de plataformas SaaS reales (ej. *Óptica Pro*, *DemoRopa E-Commerce*) con métricas de impacto y enlaces a demos en vivo.
4. **`/servicios` (Servicios / ServicesPage):**
   - Catálogo detallado de soluciones: Desarrollo Web, Sistemas SaaS, Automatizaciones IA / n8n, E-Commerce e Infraestructura.
5. **`/cotizar` (Cotizador Interactivo / QuotePage):**
   - Calculadora de presupuesto dinámica con desglose en tiempo real (anticipo 50%, contra entrega 50%, mensualidad de hosting/dominio y tiempo de entrega estimado).
6. **`/landing-page` (Oferta Especial / LandingPageOffer):**
   - Embudo de ventas enfocado en landing pages de alta conversión para negocios locales y profesionales.
7. **`/contacto` (Contacto / ContactPage):**
   - Canales directos de comunicación (WhatsApp, Telegram, Email) y formulario conectado al backend serverless.

---

## ⚡ 3. Arquitectura Serverless & Despacho de Leads

* **Endpoint:** `/api/lead.ts` (desplegado en Vercel Serverless Functions).
* **Integraciones:**
  - **Telegram Bot API:** Notificaciones inmediatas en formato HTML estructurado para seguimiento rápido desde el móvil.
  - **Notion CRM API:** Creación automática de tarjetas en la base de datos de leads con estado `🆕 Nuevo Lead`, etiquetas de servicio y desglose económico.
* **Seguridad:** Sanitización de HTML, validación de métodos y manejo independiente de fallos.
