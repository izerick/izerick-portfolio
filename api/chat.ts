export default async function handler(req: any, res: any) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { message } = req.body;
  if (!message) {
    return res.status(400).json({ error: 'Message is required' });
  }

  const GEMINI_API_KEY = process.env.GEMINI_API_KEY;
  
  // Normalize query: lowercase, remove accents and emojis
  const cleanQ = message
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .trim();

  // 1. FAST-PATH DYNAMIC CONTEXTUAL RESPONSES

  // Saludos
  if (/^(hola|buenas|buen dia|buenas tardes|buenas noches|que tal|como estas|hey|saludos|oe)/i.test(cleanQ) && cleanQ.length < 35) {
    return res.status(200).json({
      reply: "¡Hola! 👋 Qué gusto saludarte. Soy el **Asistente Virtual de Erick** con Inteligencia Artificial.\n\n¿En qué te puedo asesorar hoy?\n• Precios de **Páginas Web y Tiendas Online**\n• Desarrollo de **Sistemas Cloud a Medida**\n• O calcular tu presupuesto en el **Cotizador Interactivo**"
    });
  }

  // Cotizador y Presupuestos
  if (cleanQ.includes('cotiz') || cleanQ.includes('calcular') || cleanQ.includes('presupuesto') || cleanQ.includes('probar cotizador') || cleanQ.includes('simular')) {
    return res.status(200).json({
      reply: "¡Excelente elección! En nuestro **Cotizador Interactivo** en `/cotizar` puedes armar tu propuesta a medida y ver el valor exacto en tiempo real.\n\n• **Landing Page / Web:** Desde $35/mes (o $160 anual)\n• **Tienda Online E-commerce:** $360 USD\n• **Sistemas & Software:** Desde $450 USD\n\n¿Deseas que te derive al cotizador o conversar por WhatsApp con Erick?"
    });
  }

  // Precios generales
  if (cleanQ.includes('precio') || cleanQ.includes('costo') || cleanQ.includes('cuanto cuesta') || cleanQ.includes('cuanto vale') || cleanQ.includes('tarifa') || cleanQ.includes('cobran') || cleanQ.includes('cobras')) {
    return res.status(200).json({
      reply: "Aquí tienes nuestras tarifas oficiales de desarrollo:\n\n• **Landing Page Profesional:** $35 USD/mes o $160 anual (Incluye dominio .com, hosting 24/7 y SSL)\n• **Tienda Online E-Commerce:** $360 USD (Catálogo móvil, WhatsApp Checkout y panel de productos)\n• **Software & Sistemas a Medida:** Rango de $450 a $1,200 USD (Base de datos cloud y automatización)\n\n💡 Forma de pago: 50% de anticipo para iniciar y 50% contra entrega."
    });
  }

  // Ópticas y Salud
  if (cleanQ.includes('optica') || cleanQ.includes('medic') || cleanQ.includes('clinica') || cleanQ.includes('oftalm') || cleanQ.includes('lente') || cleanQ.includes('refraccion')) {
    return res.status(200).json({
      reply: "Nuestro software **Ópticas Visual Store®** es una plataforma médica en la nube para consultorios oftalmológicos:\n\n• Fichas clínicas con refracción computarizada (OD/OI)\n• Facturación desglosada de lunas y armazones con balance de caja\n• Catálogo de monturas y gestión de inventario\n• Acceso seguro multidispositivo desde cualquier lugar\n\nPuedes ver la demo activa en `optica.izerick.dev`."
    });
  }

  // Tienda de Ropa / E-Commerce
  if (cleanQ.includes('ropa') || cleanQ.includes('streetwear') || cleanQ.includes('tienda') || cleanQ.includes('ecommerce') || cleanQ.includes('demostore') || cleanQ.includes('catalogo')) {
    return res.status(200).json({
      reply: "Nuestras **Tiendas Online E-Commerce ($360 USD)** están diseñadas para convertir visitas en ventas:\n\n• Selector táctil de tallas y colores (S/M/L/XL)\n• Descuentos automáticos por compras al por mayor\n• Checkout directo a WhatsApp en 2 clics (cero carritos abandonados)\n• Panel autoadministrable para actualizar fotos y precios"
    });
  }

  // Sastrería Lorenz Franz
  if (cleanQ.includes('sastreria') || cleanQ.includes('lorenz') || cleanQ.includes('traje') || cleanQ.includes('esmoquin') || cleanQ.includes('moda')) {
    return res.status(200).json({
      reply: "**Lorenz Franz — Alta Sastrería** es una plataforma web editorial para moda de alta gama:\n\n• Catálogo de trajes y cortes italianos/ingleses a medida\n• Muestrario digital de paños importados Super 130s\n• Diseño cinemático ultra fluido y elegante"
    });
  }

  // Bot de IA / WhatsApp
  if (cleanQ.includes('bot') || cleanQ.includes('ia') || cleanQ.includes('inteligencia artificial') || cleanQ.includes('asistente') || cleanQ.includes('chatbot')) {
    return res.status(200).json({
      reply: "Implementamos **Asistentes Virtuales con IA 24/7** conectados a tu WhatsApp o Sitio Web:\n\n• Responden dudas de clientes y recomiendan productos automáticamente\n• Guardan datos de prospectos en tiempo real\n• Derivan a un asesor humano cuando el cliente está listo para pagar\n• Cero respuestas lentas ni clientes perdidos en la noche"
    });
  }

  // Métodos de pago y tiempos
  if (cleanQ.includes('pago') || cleanQ.includes('anticipo') || cleanQ.includes('tiempo') || cleanQ.includes('cuanto demora') || cleanQ.includes('entrega') || cleanQ.includes('garantia')) {
    return res.status(200).json({
      reply: "Nuestros términos de trabajo son 100% transparentes:\n\n• **Tiempos de entrega:** Páginas Web (3 a 5 días), Tiendas (1 a 2 semanas), Software (2 a 3 semanas)\n• **Forma de pago:** 50% de anticipo para arrancar y 50% al entregar el proyecto verificado\n• **Garantía:** Soporte técnico post-entrega y código optimizado sin errores"
    });
  }

  // 2. QUERY GEMINI AI IF API KEY IS PRESENT
  if (GEMINI_API_KEY) {
    const SYSTEM_PROMPT = `Eres el Asistente Virtual Oficial de "IzErick Dev Studio", fundado por Erick Bermello (Desarrollador de Software y Cloud Engineer en Ecuador).

Tu misión es atender a clientes potenciales con respuestas completas, concisas, profesionales y amables (máximo 60 a 90 palabras con viñetas limpias).

Precios oficiales:
- Landing Page Profesional: $35 USD/mes o $160 anual (Incluye dominio .com, hosting 24/7 y SSL).
- Tienda Online E-commerce: $360 USD.
- Sistemas Cloud y Software a Medida: Desde $450 USD (Rango $450 - $1,200 USD).
- Cotizador Interactivo: /cotizar.
- Forma de pago: 50% anticipo y 50% contra entrega.

Reglas:
1. Responde de forma completa sin dejar frases cortadas.
2. Usa viñetas limpias (•) para listar puntos clave.
3. Invita al cliente a usar el Cotizador (/cotizar) o conversar por WhatsApp con Erick.
4. Si te preguntan qué IA eres o qué tecnología usas, responde simplemente que eres el Asistente Virtual Oficial de IzErick Dev Studio desarrollado a medida (NUNCA menciones nombres de modelos como Gemini, GPT, DeepSeek, Google ni versiones).`;

    const modelsToTry = ['gemini-2.0-flash', 'gemini-1.5-flash', 'gemini-1.5-pro'];

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
  }

  // 3. SMART CONTEXTUAL FALLBACK
  return res.status(200).json({
    reply: "En **IzErick Dev Studio** desarrollamos soluciones digitales a medida:\n\n• **Landing Pages:** Desde $35/mes o $160 anual (Entrega en 3 a 5 días)\n• **Tiendas Online:** $360 USD (Checkout a WhatsApp y catálogo móvil)\n• **Sistemas a Medida:** Desde $450 USD (Base de datos cloud y gestión)\n\n💡 Puedes calcular tu propuesta exacta en nuestro **Cotizador Interactivo** en `/cotizar` o escribirme por WhatsApp para asesorarte."
  });
}

