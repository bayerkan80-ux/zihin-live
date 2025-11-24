"use client";

import { useState } from "react";

export default function Home() {
  const [message, setMessage] = useState("");
  const [ai, setAi] = useState("grok");
  const [visibility, setVisibility] = useState("link-only");

  const sendMessage = async () => {
    if (!message.trim()) {
      alert("Lütfen bir mesaj yaz!");
      return;
    }

    // Yayın linkini oluştur (şimdilik sabit, yarın dinamik olacak)
    const broadcastLink = `https://zihin-live.vercel.app/watch/${Math.random().toString(36).substring(7)}`;

    alert(
      `YAYIN BAŞLADI! \n\n` +
      `Seçtiğin AI: ${ai.toUpperCase()}\n` +
      `Yayın tipi: ${visibility === "public" ? "Herkese Açık" : visibility === "link-only" ? "Sadece Link Olanlar" : "Özel"}\n\n` +
      `İzleyiciler seni şu linkten izleyebilir:\n${broadcastLink}\n\n` +
      `(Yarın gerçek AI konuşması ve izleyici ekranı eklenecek!)`
    );

    // Konsola da yazalım (geliştirici için)
    console.log("Yeni yayın:", { message, ai, visibility, broadcastLink });
  };

  return (
    <div style={{ padding: "30px", fontFamily: "Arial, sans-serif", maxWidth: "600px", margin:
