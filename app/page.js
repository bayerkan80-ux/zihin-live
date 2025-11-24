"use client";
import { useState } from 'react';

export default function Home() {
  const [message, setMessage] = useState('');
  const [ai, setAi] = useState('grok');
  const [visibility, setVisibility] = useState('link-only');

  const sendMessage = async () => {
    // Buraya AI API çağrısı gelecek
    console.log('Mesaj gönderiliyor:', message, ai, visibility);
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>Zihin.Live - AI Konuşmanı Canlı Yayınla</h1>
      <select value={ai} onChange={(e) => setAi(e.target.value)}>
        <option value="grok">Grok</option>
        <option value="claude">Claude</option>
        <option value="gemini">Gemini</option>
      </select>
      <br />
      <input 
        type="text" 
        value={message} 
        onChange={(e) => setMessage(e.target.value)} 
        placeholder="AI'ye sor..." 
      />
      <button onClick={sendMessage}>Gönder & Yayınla</button>
      <br />
      <select value={visibility} onChange={(e) => setVisibility(e.target.value)}>
        <option value="public">Herkese Açık</option>
        <option value="link-only">Sadece Link Olanlar</option>
        <option value="private">Özel (Davetli)</option>
      </select>
    </div>
  );
}
