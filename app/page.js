"use client";

import { useState } from "react";

export default function Home() {
  const [prompt, setPrompt] = useState("");
  const [model, setModel] = useState("chatgpt");
  const [loading, setLoading] = useState(false);
  const [responseText, setResponseText] = useState("");

  const sendRequest = async () => {
    if (!prompt) return;

    setLoading(true);
    setResponseText("");

    const res = await fetch("/api/route", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ prompt, model }),
    });

    const data = await res.json();
    setResponseText(data.text);
    setLoading(false);
  };

  return (
    <main className="min-h-screen flex flex-col items-center p-8">
      <h1 className="text-4xl font-bold mb-2">Zihin.Live</h1>
      <p className="text-gray-600 mb-6">AI ile konuşmanı canlı yayınla.</p>

      <textarea
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        className="border w-full max-w-xl p-4 rounded mb-4"
        placeholder="Buraya yaz..."
        rows={4}
      />

      <label className="mb-1 font-medium">Yapay Zekâ Modeli</label>
      <select
        className="border p-2 rounded mb-4"
        value={model}
        onChange={(e) => setModel(e.target.value)}
      >
        <option value="chatgpt">ChatGPT</option>
        <option value="grok">Grok</option>
        <option value="claude">Claude</option>
        <option value="gemini">Gemini</option>
      </select>

      <button
        onClick={sendRequest}
        className="bg-black text-white px-6 py-3 rounded"
      >
        {loading ? "Yükleniyor..." : "Yayına Geç"}
      </button>

      {responseText && (
        <div className="border p-4 rounded w-full max-w-xl mt-6">
          <p className="font-bold mb-2">Yanıt:</p>
          <p>{responseText}</p>
        </div>
      )}

      <p className="mt-8 text-sm text-gray-500">
        v1 · {new Date().toLocaleDateString("tr-TR")} · Türkiye
      </p>
    </main>
  );
}
