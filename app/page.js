export default function Home() {
  return (
    <div>
      <h1>Zihin.Live</h1>
      <p>AI ile konuşmanı canlı yayınla.</p>

      {/* Prompt (metin giriş alanı) */}
      <div className="prompt-box">
        <textarea
          placeholder="Buraya yaz, bütün dünya izlesin..."
          rows="4"
        ></textarea>
      </div>

      {/* Yayın seçenekleri */}
      <div className="button-row">
        <button className="ai-button">Grok</button>
        <button className="ai-button">Claude</button>
        <button className="ai-button">Gemini</button>
      </div>

      {/* Yayın kontrol butonları */}
      <div className="button-row">
        <button>Yayınla</button>
        <button>Link ile</button>
        <button>Davetli</button>
      </div>

      <p>v1 · 24 Kasım 2025 · Türkiye</p>
    </div>
  );
}
