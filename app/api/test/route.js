import OpenAI from "openai";

export async function GET() {
  try {
    const client = new OpenAI({
      apiKey: process.env.ZIHIN_LIVE_API_KEY,
    });

    const response = await client.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        { role: "user", content: "API çalışıyor mu?" }
      ],
    });

    return new Response(JSON.stringify({
      ok: true,
      result: response.choices[0].message.content,
    }), {
      headers: { "Content-Type": "application/json" }
    });

  } catch (error) {
    return new Response(JSON.stringify({
      ok: false,
      error: error.message
    }), {
      status: 500,
      headers: { "Content-Type": "application/json" }
    });
  }
}
