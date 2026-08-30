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

Tu misión en el chat web es responder de forma CONCISA, ELEGANTE y ESTRUCTURADA (máximo 40 a 60 palabras).

Información clave:
- Herramienta Destacada: **Cotizador Interactivo en Tiempo Real** (/cotizar): Permite al cliente seleccionar las funciones exactas de su proyecto y calcular el presupuesto y tiempo de entrega al instante.
- Servicios de referencia:
  • Páginas Web: Desde $250 (3 a 7 días)
  • Tiendas Online: Desde $450 (1 a 2 semanas)
  • Sistemas a Medida: Desde $600 (2 a 3 semanas)
- Proyectos: DemoStore Streetwear® (tienda ropa), Ópticas Visual Store® (sistema médico), Lorenz Franz (sastrería).

Reglas:
1. Responde brevemente con viñetas limpias (•).
2. Si preguntan por precios, cotizaciones o presupuestos, menciónales los rangos base e invítales a usar nuestro **Cotizador Interactivo** en /cotizar para simular su proyecto.
3. Invita siempre a continuar en WhatsApp con Erick.`;

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
          maxOutputTokens: 350
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
  if (q.includes('precio') || q.includes('costo') || q.includes('cotiz')) {
    return res.status(200).json({
      reply: "Desarrollamos soluciones a medida en la nube:\n\n• Páginas Web: desde $250\n• Tiendas Online: desde $450\n• Sistemas a Medida: desde $600\n\n💡 Puedes simular tu presupuesto exacto en nuestro **Cotizador Interactivo** en /cotizar o chatear con Erick por WhatsApp."
    });
  }

  return res.status(200).json({
    reply: "En IzErick Dev Studio creamos soluciones digitales a medida.\n\n• Páginas Web (3 a 7 días)\n• Tiendas Online (1 a 2 semanas)\n• Sistemas Médicos y Cloud (2 a 3 semanas)\n\n¿Deseas calcular tu proyecto en nuestro Cotizador Interactivo o hablar con Erick?"
  });
}
