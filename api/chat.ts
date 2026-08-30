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

  const SYSTEM_PROMPT = `Eres el Asistente Virtual Oficial de "IzErick Dev Studio", fundado por Erick Bermello (Desarrollador de Software y Cloud Engineer en Ecuador).

Tu misión es atender a clientes potenciales en el sitio web de forma amable, profesional y concisa (mensajes de 2 a 3 párrafos cortos y completos).

Información del negocio:
- Fundador: Erick Bermello (Portafolio: https://izerick.dev).
- Proyectos reales:
  1. Ópticas Visual Store® (https://optica.izerick.dev): Sistema médico cloud con historias clínicas digitales, refracción computarizada (OD/OI), facturación desglosada con SRI y agenda de citas.
  2. Lorenz Franz — Alta Sastrería (https://sastre.izerick.dev): Web editorial de alta costura con trajes a medida y paños importados.
  3. DemoStore Streetwear® (https://demoropa.izerick.dev): Tienda online rápida con tallas, precios mayoristas y pedidos a WhatsApp.
- Servicios y Precios de referencia:
  - Páginas Web Corporativas: $250 - $400 USD (entrega en 3 a 7 días).
  - Tiendas Online (E-commerce): $450 - $750 USD (entrega en 1 a 2 semanas).
  - Sistemas Médicos y Software Cloud: $600 - $1,200 USD (entrega en 2 a 3 semanas).
  - Bots y Automatizaciones con IA: $300 - $600 USD.
- Forma de pago: 50% anticipo al iniciar y 50% al finalizar la entrega.

Reglas estrictas:
1. Responde SIEMPRE en español de forma natural y completa. NUNCA dejes oraciones a medias ni uses viñetas en inglés.
2. Mantén las respuestas en 2 o 3 párrafos ágiles y directos al punto.
3. Si preguntan por tiempos de entrega, aclara que una web toma de 3 a 7 días y un sistema médico/a medida de 2 a 3 semanas.
4. Invita siempre a dejar su nombre o continuar en WhatsApp con Erick para ver una demo personalizada.`;

  try {
    const endpoint = `https://generativelanguage.googleapis.com/v1beta/models/gemini-3.6-flash:generateContent?key=${GEMINI_API_KEY}`;
    const response = await fetch(endpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        system_instruction: {
          parts: [{ text: SYSTEM_PROMPT }]
        },
        contents: [
          {
            role: 'user',
            parts: [{ text: message }]
          }
        ],
        generationConfig: {
          temperature: 0.7,
          maxOutputTokens: 2048
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

  const q = message.toLowerCase();
  if (q.includes('tiempo') || q.includes('demora') || q.includes('plazo') || q.includes('cuanto tiempo') || q.includes('cuánto tiempo')) {
    return res.status(200).json({
      reply: "¡Hola! Los tiempos de entrega son: de 3 a 7 días laborables para páginas web corporativas, y de 2 a 3 semanas para tiendas online o sistemas médicos completos. ¿En qué fecha te gustaría tener tu sistema listo?"
    });
  }

  return res.status(200).json({
    reply: "¡Hola! En IzErick Dev Studio desarrollamos soluciones a medida. Los sistemas médicos parten desde $600 e incluyen historias clínicas digitales, facturación SRI y agenda de citas. ¿Deseas conversar directamente con Erick por WhatsApp para ver una demo?"
  });
}
