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
  const q = message.toLowerCase().trim();

  // Fast-path instant accurate responses for standard topics
  if (q.includes('cotiz') || q.includes('calcular') || q.includes('presupuesto') || q.includes('probar cotizador')) {
    return res.status(200).json({
      reply: "¡Excelente elección! Nuestro **Cotizador Interactivo** te permite seleccionar los módulos exactos de tu proyecto para calcular el presupuesto y tiempo de entrega al instante.\n\n• Precios transparentes y sin sorpresas\n• Desglose por módulos (Web, Tienda, Software)\n• Simulación inmediata en tiempo real"
    });
  }

  if (q.includes('optica') || q.includes('médic') || q.includes('clinica')) {
    return res.status(200).json({
      reply: "Nuestro sistema **Ópticas Visual Store®** es una plataforma cloud para salud y optometría:\n\n• Historias clínicas y refracción (OD/OI)\n• Facturación electrónica adaptada al SRI\n• Control de inventario y caja diaria\n• Agenda inteligente de pacientes"
    });
  }

  if (q.includes('demostore') || q.includes('ropa') || q.includes('streetwear')) {
    return res.status(200).json({
      reply: "La plataforma **DemoStore Streetwear®** es un e-commerce de alto rendimiento:\n\n• Catálogo interactivo con selector de tallas\n• Descuentos dinámicos por compras al por mayor\n• Checkout directo a WhatsApp para cerrar ventas"
    });
  }

  if (q.includes('sastreria') || q.includes('lorenz') || q.includes('traje')) {
    return res.status(200).json({
      reply: "**Lorenz Franz — Alta Sastrería** es una experiencia web editorial para alta costura:\n\n• Catálogo de trajes y esmoquins a medida\n• Biblioteca digital de paños Super 130s\n• Preloader cinético y carrusel elástico"
    });
  }

  const SYSTEM_PROMPT = `Eres el Asistente Virtual Oficial de "IzErick Dev Studio", fundado por Erick Bermello (Desarrollador de Software y Cloud Engineer en Ecuador).

Tu misión es atender a clientes potenciales con respuestas completas, concisas y elegantes (máximo 50 a 80 palabras con viñetas limpias).

Información del negocio:
- Cotizador Interactivo: /cotizar (permite calcular presupuestos en tiempo real).
- Servicios: Páginas Web ($250-$400 en 3-7 días), Tiendas Online ($450-$750 en 1-2 semanas), Sistemas Médicos ($600-$1,200 en 2-3 semanas).
- Forma de pago: 50% anticipo y 50% contra entrega.

Reglas:
1. Responde de forma completa sin dejar frases cortadas.
2. Usa viñetas limpias (•) para listar puntos clave.
3. Invita al cliente a usar el Cotizador (/cotizar) o conversar por WhatsApp con Erick.`;

  const modelsToTry = ['gemini-flash-latest', 'gemini-3.1-flash-lite', 'gemini-3.6-flash'];

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
          contents: [
            {
              role: 'user',
              parts: [{ text: message }]
            }
          ],
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

  // Graceful smart fallback
  return res.status(200).json({
    reply: "En **IzErick Dev Studio** desarrollamos soluciones digitales a medida:\n\n• Páginas Web: desde $250 (3 a 7 días)\n• Tiendas Online: desde $450 (1 a 2 semanas)\n• Sistemas Cloud: desde $600 (2 a 3 semanas)\n\n💡 Puedes calcular tu presupuesto exacto en nuestro **Cotizador Interactivo** en /cotizar."
  });
}
