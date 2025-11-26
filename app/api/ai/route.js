import OpenAI from "openai";

export async function POST(req) {
  const { message } = await req.json();

  const client = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY
  });

  const completion = await client.chat.completions.create({
    model: "gpt-4o-mini",
    messages: [
      { role: "system", content: "You are Zihin.Live AI." },
      { role: "user", content: message }
    ]
  });

  return Response.json({
    reply: completion.choices[0].message.content
  });
}
