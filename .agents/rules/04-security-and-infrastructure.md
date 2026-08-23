# 🔐 04. Security & Infrastructure Hardening

Protocolos de seguridad para endpoints serverless, protección de infraestructura y aislamiento de credenciales.

---

## 🛡️ 1. Seguridad en Endpoints Serverless (`/api/*`)

* **Validación de Métodos:** Rechazar cualquier método que no sea `POST` (con soporte para preflight `OPTIONS` en CORS).
* **Sanitización de Inputs:** Escapar todo carácter especial en strings (`<`, `>`, `&`, `"`, `'`) antes de enviarlo a integraciones externas como Telegram Bot API o Notion CRM.
* **Tiempos de Espera & Fallbacks:** Manejar fallos de servicios de terceros (ej. si Telegram o Notion no responden) de forma aislada para no romper la respuesta del cliente (`try/catch` independientes).
* **Protección contra Inyecciones:** Nunca evaluar texto libre directamente como código ni inyectar HTML sin escapar.

---

## 🔒 2. Gestión de Secretos y Variables de Entorno

* Las variables de entorno de producción (`TELEGRAM_BOT_TOKEN`, `NOTION_TOKEN`, `DATABASE_URL`) deben configurarse exclusivamente en el panel de **Vercel** o en el entorno del servidor.
* En local, utilizar `.env.local` y asegurarse de que esté en `.gitignore`.
* Ninguna API Key con privilegios de escritura debe tener el prefijo `VITE_` en el cliente.

---

## 🌐 3. Configuración de Red & VPS

* **Cloudflare Proxy:** Tráfico DNS enmascarado a través de Cloudflare para ocultar la IP real de los servidores origen.
* **Firewall UFW:** Puertos cerrados por defecto; solo permitir tráfico entrante en 80 (HTTP) y 443 (HTTPS).
* **Acceso SSH Seguro:** Deshabilitar autenticación por contraseña y acceso root directo (`PermitRootLogin no`), utilizando exclusivamente autenticación por par de claves SSH (Ed25519/RSA).
* **Prevención de Intrusos:** Fail2ban configurado para bloquear intentos de fuerza bruta en SSH y endpoints sensibles.
