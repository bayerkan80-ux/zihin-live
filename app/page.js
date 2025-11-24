import "../styles/layout.css";

export default function Home() {
  return (
    <div className="main-container">
      <h1>Zihin.Live</h1>
      <p>AI ile konuşmanı canlı yayınla.</p>

      {/* Prompt alanı */}
      <div className="prompt-box">
        <textarea
          placeholder="Buraya yaz, bütün dünya izlesin..."
          rows="4"
        ></textarea>
      </div>

      {/* AI model butonları */}
      <div className="button-row">
        <button className="ai-button">Grok</button>
        <button className="ai-button">Claude</button>
        <button className="ai-button">Gemini</button>
      </div>

      {/* Yayın kontrol */}
      <div className="button-row">
        <button className="ctrl-button">Yayınla</button>
        <button className="ctrl-button">Link ile</button>
        <button className="ctrl-button">Davetli</button>
      </div>

      {/* Footer */}
      <p className="footer">v1 · 24 Kasım 2025 · Türkiye</p>
    </div>
  );
}
