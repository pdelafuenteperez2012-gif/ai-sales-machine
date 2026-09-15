const Anthropic = require('@anthropic-ai/sdk').default;

const client = new Anthropic({
  apiKey: process.env.CLAUDE_API_KEY
});

async function generateColdEmails(product, audience, competitor, count = 10) {
  const prompt = `Eres un experto en copywriting y ventas. Genera ${count} cold emails personalizados y efectivos.

PRODUCTO/SERVICIO: ${product}
AUDIENCIA OBJETIVO: ${audience}
COMPETENCIA: ${competitor}

Requisitos para cada email:
- Línea de asunto: Corta, curiosa, sin usar emojis
- Cuerpo: 3-5 párrafos, personal, con llamada a acción clara
- Tono: Profesional pero amigable
- NO es spam: Valor real, no genérico

Devuelve la respuesta en JSON válido.`;

  try {
    const message = await client.messages.create({
      model: 'claude-3-5-sonnet-20241022',
      max_tokens: 4000,
      messages: [
        {
          role: 'user',
          content: prompt
        }
      ]
    });

    const responseText = message.content[0].text;
    console.log('Raw response:', responseText);

    // Parse JSON from response
    const jsonMatch = responseText.match(/\{[\s\S]*\}/);
    if (!jsonMatch) {
      return { emails: [] };
    }

    return JSON.parse(jsonMatch[0]);
  } catch (error) {
    console.error('Error generating emails:', error);
    throw error;
  }
}

async function generateAdCopy(product, audience, platform) {
  const platformGuides = {
    facebook: 'Maximo 125 caracteres, enfocado en beneficio',
    google: 'Maximo 90 caracteres, directo y claro',
    tiktok: 'Casual, trending, maximo 150 caracteres'
  };

  const prompt = `Eres un experto en publicidad digital. Genera 5 variantes de ad copy.

PRODUCTO: ${product}
AUDIENCIA: ${audience}
PLATAFORMA: ${platform}
GUIA: ${platformGuides[platform] || 'General'}

Devuelve JSON valido con el formato solicitado.`;

  try {
    const message = await client.messages.create({
      model: 'claude-3-5-sonnet-20241022',
      max_tokens: 2000,
      messages: [
        {
          role: 'user',
          content: prompt
        }
      ]
    });

    const responseText = message.content[0].text;
    const jsonMatch = responseText.match(/\{[\s\S]*\}/);

    if (!jsonMatch) {
      return { copies: [] };
    }

    return JSON.parse(jsonMatch[0]);
  } catch (error) {
    console.error('Error generating ad copy:', error);
    throw error;
  }
}

module.exports = {
  generateColdEmails,
  generateAdCopy
};
