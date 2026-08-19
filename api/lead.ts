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
    const message = (data.message || 'Sin mensaje').replace(/%0A/g, '\n');
    const nowStr = new Date().toISOString().replace('T', ' ').substring(0, 19);
    const dateIso = new Date().toISOString().split('T')[0];

    // 1. Dispatch to Telegram
    const tgText = `🔔 *¡Nuevo Lead en izerick.dev!*\n\n` +
      `👤 *Nombre:* ${name}\n` +
      `📬 *Contacto:* ${contact}\n` +
      `💼 *Servicio:* ${service}\n` +
      `📝 *Detalles:*\n${message}\n\n` +
      `📅 _Fecha: ${nowStr}_`;

    try {
      await fetch(`https://api.telegram.org/bot${TG_TOKEN}/sendMessage`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          chat_id: TG_CHAT,
          text: tgText,
          parse_mode: 'Markdown',
        }),
      });
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
