import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const { prompt, model } = await req.json();

    if (!prompt) {
      return NextResponse.json({ text: "Prompt boş!" });
    }

    // 🔹 CHATGPT
    if (model === "chatgpt") {
      const response = await fetch("https://api.openai.com/v1/chat/completions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
        },
        body: JSON.stringify({
          model: "gpt-4.1-mini",
          messages: [{ role: "user", content: prompt }],
        }),
      });

      const data = await response.json();
      return NextResponse.json({ text: data.choices?.[0]?.message?.content });
    }

    // 🔹 GROK
    if (model === "grok") {
      const response = await fetch("https://api.x.ai/v1/chat/completions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.GROK_API_KEY}`,
        },
        body: JSON.stringify({
          model: "grok-beta",
          messages: [{ role: "user", content: prompt }],
        }),
      });

      const data = await response.json();
      return NextResponse.json({ text: data.choices?.[0]?.message?.content });
    }

    // 🔹 CLAUDE
    if (model === "claude") {
      const response = await fetch("https://api.anthropic.com/v1/messages", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-api-key": process.env.CLAUDE_API_KEY,
          "anthropic-version": "2023-06-01",
        },
        body: JSON.stringify({
          model: "claude-3-sonnet-20240229",
          messages: [{ role: "user", content: prompt }],
          max_tokens: 300,
        }),
      });

      const data = await response.json();
      return NextResponse.json({ text: data.content?.[0]?.text });
    }

    // 🔹 GEMINI
    if (model === "gemini") {
      const response = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${process.env.GEMINI_API_KEY}`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            contents: [{ parts: [{ text: prompt }] }],
          }),
        }
      );

      const data = await response.json();
      return NextResponse.json({
        text: data.candidates?.[0]?.content?.parts?.[0]?.text,
      });
    }

    return NextResponse.json({ text: "Model bulunamadı!" });
  } catch (err) {
    return NextResponse.json({ text: "Sunucu hatası: " + err.message });
  }
}
