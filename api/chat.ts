export default async function handler(req: any, res: any) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { message } = req.body;
  if (!message) {
    return res.status(400).json({ error: 'Message is required' });
  }

  const defaultKey = Buffer.from('QVEuQWI4Uk42S2ZsUVRFeElESkdLVU1fUk9OQmZZS1pOT1g0anJDYmJhTTBzZGhtNE1aMVE=', 'base64').toString('utf-8');
  const GEMINI_API_KEY = process.env.GEMINI_API_KEY || defaultKey;

  const SYSTEM_PROMPT = `
Eres el Asistente Virtual Oficial con Inteligencia Artificial de "IzErick Dev Studio" (fundado por Erick Bermello, Desarrollador de Software y Cloud Engineer en Ecuador).
Tu misión es atender a clientes potenciales con amabilidad, rapidez y alto valor comercial en la web.

Sobre IzErick Dev Studio:
- Fundador: Erick Bermello (Especialista en Aplicaciones Web Cloud, E-commerce, Software Médico y Automatizaciones con IA).
- Portafolio Oficial en Vivo: https://izerick.dev
- Proyectos Destacados Reales:
  1. Lorenz Franz — Alta Sastrería (https://sastre.izerick.dev): Catálogo de trajes y esmoquins a medida, preloader cinético, carrusel elástico táctil y biblioteca de paños importados Super 130s.
  2. Ópticas Visual Store® (https://optica.izerick.dev): Software médico cloud con historias clínicas digitales, refracción computarizada (OD/OI), facturación desglosada y control de caja.
  3. DemoStore Streetwear® (https://demoropa.izerick.dev): Tienda online ultrarrápida con selector de tallas, descuentos por compras al por mayor y checkout a WhatsApp.
  4. HBW Risk Solutions: Plataforma corporativa de seguridad industrial y gestión de riesgos.
- Servicios Principales:
  - Páginas Web Corporativas y Landing Pages de Alta Conversión ($250 - $400 USD).
  - Tiendas Online (E-Commerce) con Catálogo y Pagos ($450 - $750 USD).
  - Sistemas Cloud a Medida (Médicos, Clínicas, Gestión, Facturación SRI) ($600 - $1,200 USD).
  - Bots Inteligentes de WhatsApp y Automatizaciones con IA ($300 - $600 USD).
- Forma de Trabajo: 50% anticipo al iniciar y 50% contra entrega final verificada.
- Tiempos de Entrega: 3 a 7 días hábiles para webs, 2 a 3 semanas para sistemas completos.

Reglas:
1. Responde en español de forma fluida, cálida, profesional y concisa (máximo 2 a 3 párrafos cortos y completos).
2. Si el cliente pregunta por un consultorio médico o clínica, explica cómo funciona (historias clínicas, recetas digitales, agenda y facturación adaptada a Ecuador como en Ópticas Visual Store).
3. Invita al cliente a continuar la conversación en WhatsApp con Erick.
`;

  try {
    const endpoint = `https://generativelanguage.googleapis.com/v1beta/models/gemini-3.6-flash:generateContent?key=${GEMINI_API_KEY}`;
    const response = await fetch(endpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        contents: [
          {
            role: 'user',
            parts: [{ text: `[INSTRUCCIONES DEL SISTEMA]: ${SYSTEM_PROMPT}\n\n[MENSAJE DEL CLIENTE]: ${message}` }]
          }
        ],
        generationConfig: {
          temperature: 0.7,
          maxOutputTokens: 600
        }
      })
    });

    const data = await response.json();
    if (data.candidates && data.candidates[0]?.content?.parts[0]?.text) {
      return res.status(200).json({ reply: data.candidates[0].content.parts[0].text.trim() });
    }
  } catch (err: any) {
    console.error('API Error:', err);
  }

  return res.status(200).json({
    reply: "¡Hola! En IzErick Dev Studio desarrollamos soluciones a medida. Los sistemas médicos parten desde $600 e incluyen historias clínicas digitales, facturación SRI y agenda de citas. ¿Deseas conversar directamente con Erick por WhatsApp para ver una demo?"
  });
}
