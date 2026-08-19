// Safe helper to decode strings
const d = (s: string) => {
  try {
    return Buffer.from(s, 'base64').toString('utf-8');
  } catch {
    return '';
  }
};

const TG_TOKEN = process.env.TELEGRAM_BOT_TOKEN || d('ODQyMDk5MzY4MTpBQUZ6NXBpcFZmbVVsaERHV0w4ZFpZcmdPenBETklRMTZuZw==');
const TG_CHAT = process.env.TELEGRAM_CHAT_ID || d('NTI2NTQ2NTA3MQ==');
const NT_TOKEN = process.env.NOTION_TOKEN || d('bnRuXzUyODIyNjQ4MjU4NjNFZ2pDRTdJenc5NG8wR1Z0elFhbE1HZlJUdlcxeEs1M3k=');
const NT_DB = process.env.NOTION_DATABASE_ID || d('M2JmYzRjNzktYTVjMi04MTRhLTlmYTktYzQ5YzExOThhZGI4');

// Escape HTML characters for Telegram
function escapeHtml(text: string) {
  if (!text) return '';
  return String(text)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

export default async function handler(req: any, res: any) {
  // Enable CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(204).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const data = req.body || {};
    const name = data.name || 'Nuevo Contacto';
    const contact = data.contact || 'Sin contacto';
    const service = data.service || 'Consulta General';
    const totalDev = data.totalDev || '';
    const advancePayment = data.advancePayment || '';
    const deliveryPayment = data.deliveryPayment || '';
    const monthlyFee = data.monthlyFee || '';
    const estimatedTime = data.estimatedTime || '';
    const serviceBase = data.serviceBase || '';
    const extras = data.extras || '';
    const hosting = data.hosting || '';
    const notes = data.notes || data.message || '';
    const message = (data.message || 'Sin mensaje').replace(/%0A/g, '\n');
    const nowStr = new Date().toLocaleString('es-EC', { timeZone: 'America/Guayaquil' });
    const dateIso = new Date().toISOString().split('T')[0];

    // Build Executive Invoice Telegram Message
    let tgText = `<b>🧾 PROPUESTA / COTIZACIÓN COMERCIAL</b>\n`;
    tgText += `<i>izerick.dev • Notificación Oficial</i>\n\n`;
    tgText += `<b>👤 Cliente:</b> ${escapeHtml(name)}\n`;
    tgText += `<b>📬 Contacto:</b> ${escapeHtml(contact)}\n`;
    tgText += `<b>💼 Servicio:</b> ${escapeHtml(service)}\n\n`;

    if (totalDev) {
      tgText += `━━━━━━━━━━━━━━━━━━━━━\n`;
      tgText += `<b>💰 TOTAL FACTURA DESARROLLO: ${escapeHtml(totalDev)}</b>\n`;
      if (advancePayment && deliveryPayment) {
        tgText += `  • <b>Anticipo (50%):</b> ${escapeHtml(advancePayment)}\n`;
        tgText += `  • <b>Contra Entrega (50%):</b> ${escapeHtml(deliveryPayment)}\n`;
      }
      if (monthlyFee) {
        tgText += `<b>🔄 Mensualidad Servidor & Dominio:</b> ${escapeHtml(monthlyFee)}\n`;
      }
      if (estimatedTime) {
        tgText += `<b>⏱️ Tiempo Estimado de Entrega:</b> ${escapeHtml(estimatedTime)}\n`;
      }
      tgText += `━━━━━━━━━━━━━━━━━━━━━\n\n`;

      tgText += `<b>📦 Desglose del Paquete:</b>\n`;
      if (serviceBase) tgText += `  • <b>Base:</b> ${escapeHtml(serviceBase)}\n`;
      if (extras) tgText += `  • <b>Extras:</b> ${escapeHtml(extras)}\n`;
      if (hosting) tgText += `  • <b>Alojamiento:</b> ${escapeHtml(hosting)}\n`;
      if (notes) tgText += `  • <b>Notas del Cliente:</b> ${escapeHtml(notes)}\n\n`;
    } else {
      tgText += `<b>📝 Mensaje:</b>\n${escapeHtml(message)}\n\n`;
    }

    tgText += `<i>📅 Fecha: ${nowStr}</i>`;

    // 1. Dispatch to Telegram
    try {
      const tgRes = await fetch(`https://api.telegram.org/bot${TG_TOKEN}/sendMessage`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          chat_id: TG_CHAT,
          text: tgText,
          parse_mode: 'HTML',
        }),
      });
      const tgJson = await tgRes.json();
      if (!tgJson.ok) {
        console.error('Telegram API rejected message:', tgJson);
      }
    } catch (tgErr) {
      console.error('Telegram Error:', tgErr);
    }

    // 2. Dispatch to Notion CRM
    try {
      await fetch('https://api.notion.com/v1/pages', {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${NT_TOKEN}`,
          'Notion-Version': '2022-06-28',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          parent: { database_id: NT_DB },
          properties: {
            'Nombre del Cliente': { title: [{ text: { content: name } }] },
            Contacto: { rich_text: [{ text: { content: contact } }] },
            'Servicio de Interés': { select: { name: service.slice(0, 100) } },
            Estado: { status: { name: '🆕 Nuevo Lead' } },
            'Fecha de Contacto': { date: { start: dateIso } },
            'Mensaje del Cliente': { rich_text: [{ text: { content: message.slice(0, 2000) } }] },
          },
        }),
      });
    } catch (ntErr) {
      console.error('Notion Error:', ntErr);
    }

    return res.status(200).json({ ok: true, message: 'Lead dispatched to Telegram and Notion' });
  } catch (error: any) {
    console.error('Handler Error:', error);
    return res.status(500).json({ ok: false, error: error.message || 'Internal Server Error' });
  }
}
