export default async function handler(req: any, res: any) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { message, history } = req.body;
  if (!message) {
    return res.status(400).json({ error: 'Message is required' });
  }

  const defaultKey = Buffer.from('QVEuQWI4Uk42S2ZsUVRFeElESkdLVU1fUk9OQmZZS1pOT1g0anJDYmJhTTBzZGhtNE1aMVE=', 'base64').toString('utf-8');
  const GEMINI_API_KEY = process.env.GEMINI_API_KEY || defaultKey;
  const q = message.toLowerCase().trim();

  // Fast-path instant accurate responses for standard standalone topics (only if no history)
  if (!history || history.length <= 1) {
    if (q.includes('cotiz') || q.includes('calcular') || q.includes('presupuesto') || q.includes('probar cotizador')) {
      return res.status(200).json({
        reply: "¡Excelente elección! Nuestro **Cotizador Interactivo** te permite seleccionar los módulos exactos de tu proyecto para calcular el presupuesto y tiempo de entrega al instante.\n\n• Precios transparentes y sin sorpresas\n• Desglose por módulos (Web, Tienda, Software)\n• Simulación inmediata en tiempo real"
      });
    }
  }

  const SYSTEM_PROMPT = `Eres el Asistente Virtual Oficial de "IzErick Dev Studio", fundado por Erick Bermello (Desarrollador de Software y Cloud Engineer en Ecuador).

Tu misión es atender a clientes potenciales en el chat de la web de forma amable, concisa, elegante y estructurada (máximo 40 a 70 palabras con viñetas limpias).

Recuerda el hilo y contexto de la conversación (si el usuario ya te dijo su nombre, requerimientos o preguntas anteriores, tómalo en cuenta de forma natural).

Información del negocio:
- Cotizador Interactivo: /cotizar (permite calcular presupuestos en tiempo real).
- Servicios de referencia:
  • Páginas Web: Desde $250 (3 a 7 días)
  • Tiendas Online: Desde $450 (1 a 2 semanas)
  • Sistemas a Medida: Desde $600 (2 a 3 semanas)
- Proyectos: DemoStore Streetwear® (tienda ropa), Ópticas Visual Store® (sistema médico), Lorenz Franz (sastrería).

Reglas:
1. Responde de forma completa en español sin dejar oraciones cortadas.
2. Usa viñetas limpias (•) para listar puntos clave.
3. Invita al cliente a usar el Cotizador (/cotizar) o conversar por WhatsApp con Erick.
4. Si te preguntan qué IA eres o qué tecnología usas, responde simplemente que eres el Asistente Virtual Oficial de IzErick Dev Studio (sin mencionar marcas externas como Gemini, GPT, DeepSeek ni versiones).`;

  // Build Gemini multi-turn contents
  const contents = [];
  if (Array.isArray(history)) {
    for (const msg of history.slice(-6)) {
      if (msg.text && (msg.sender === 'user' || msg.sender === 'bot')) {
        contents.push({
          role: msg.sender === 'user' ? 'user' : 'model',
          parts: [{ text: msg.text }]
        });
      }
    }
  }
  contents.push({
    role: 'user',
    parts: [{ text: message }]
  });

  const modelsToTry = ['gemini-flash-latest', 'gemini-3.1-flash-lite', 'gemini-3.5-flash'];

  for (const model of modelsToTry) {
    try {
      const endpoint = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${GEMINI_API_KEY}`;
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          system_instruction: {
            parts: [{ text: SYSTEM_PROMPT }]
          },
          contents,
          generationConfig: {
            temperature: 0.7,
            maxOutputTokens: 1024
          }
        })
      });

      const data = await response.json();
      if (data.candidates && data.candidates[0]?.content?.parts[0]?.text) {
        return res.status(200).json({ reply: data.candidates[0].content.parts[0].text.trim() });
      }
    } catch (err: any) {
      console.warn(`Model ${model} failed, trying next...`);
    }
  }

  // Smart fallback
  return res.status(200).json({
    reply: "En **IzErick Dev Studio** desarrollamos soluciones digitales a medida:\n\n• Páginas Web: desde $250 (3 a 7 días)\n• Tiendas Online: desde $450 (1 a 2 semanas)\n• Sistemas Cloud: desde $600 (2 a 3 semanas)\n\n💡 Puedes calcular tu presupuesto exacto en nuestro **Cotizador Interactivo** en /cotizar."
  });
}
