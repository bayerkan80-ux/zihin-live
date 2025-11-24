"use client";

import { useState } from "react";

export default function Home() {
  const [message, setMessage] = useState("");
  const [ai, setAi] = useState("grok");
  const [visibility, setVisibility] = useState("link-only");

  const sendMessage = async () => {
    if (!message.trim()) return;

    const link = `https://zihin-live.vercel.app/watch/${Math.random().toString(36).slice(2, 9)}`;

    alert(
      `YAYIN AÇILDI\n\nAI: ${ai.toUpperCase()}\nGizlilik: ${visibility === "public" ? "Herkese Açık" : visibility === "link-only" ? "Link ile" : "Davetli"}\n\nLink:\n${link}`
    );
  };

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center p-5">
      <div className="w-full max-w-lg">
        {/* Başlık */}
        <h1 className="text-5xl font-thin tracking-widest text-center mb-2">
          Zihin.Live
        </h1>
        <p className="text-center text-zinc-500 text-sm mb-12">
          AI ile konuşmanı canlı yayınla
        </p>

        {/* AI Seçici */}
        <div className="flex justify-center gap-3 mb-10">
          {["grok", "claude", "gemini"].map((model) => (
            <button
              key={model}
              onClick={() => setAi(model)}
              className={`px-6 py-3 rounded-full text-sm font-medium transition-all ${
                ai === model
                  ? "bg-indigo-600 text-white shadow-lg shadow-indigo-600/30"
                  : "bg-zinc-900 text-zinc-400 hover:text-white"
              }`}
            >
              {model === "grok" ? "Grok" : model === "claude" ? "Claude" : "Gemini"}
            </button>
          ))}
        </div>

        {/* Mesaj Kutusu */}
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && sendMessage()}
          placeholder="Buraya yaz, bütün dünya izlesin..."
          className="w-full bg-zinc-900 border border-zinc-800 rounded-2xl px-6 py-5 text-lg focus:outline-none focus:border-indigo-500 transition-colors placeholder-zinc-600"
        />

        {/* Gizlilik */}
        <div className="flex justify-center gap-4 mt-6">
          {["public", "link-only", "private"].map((mode) => (
            <button
              key={mode}
              onClick={() => setVisibility(mode)}
              className={`text-sm ${visibility === mode ? "text-indigo-400" : "text-zinc-600"}`}
            >
              {mode === "public" ? "Herkese Açık" : mode === "link-only" ? "Link ile" : "Davetli"}
            </button>
          ))}
        </div>

        {/* Buton */}
        <button
          onClick={sendMessage}
          className="w-full mt-10 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white font-medium text-lg py-5 rounded-2xl shadow-xl active:scale-95 transition-all"
        >
          Yayınla
        </button>

        <p className="text-center text-xs text-zinc-600 mt-10">
          v1 · 24 Kasım 2025 · Türkiye
        </p>
      </div>
    </div>
  );
}
