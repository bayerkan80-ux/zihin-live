import "../styles/layout.css";

export default function Home() {
  return (
    <div className="main-container">

      <h1>Zihin.Live</h1>
      <p>AI ile konuşmanı canlı yayınla.</p>

      {/* PROMPT */}
      <div className="prompt-box">
        <textarea
          placeholder="Buraya yaz, bütün dünya izlesin..."
          rows="4"
        ></textarea>
      </div>

      {/* AI MODEL SEÇİMİ (Dropdown) */}
      <div className="dropdown-container">
        <label>Yapay Zekâ Modeli</label>
        <select className="dropdown">
          <option>Grok</option>
          <option>Claude</option>
          <option>Gemini</option>
        </select>
      </div>

      {/* YAYIN MODU (Dropdown) */}
      <div className="dropdown-container">
        <label>Yayın Modu</label>
        <select className="dropdown">
          <option>Kamuya Açık</option>
          <option>Link ile</option>
          <option>Davetli</option>
        </select>
      </div>

      {/* BÜYÜK CTA */}
      <button className="big-start-button">Yayına Geç</button>

      {/* FOOTER */}
      <p className="footer">v1 · 24 Kasım 2025 · Türkiye</p>
    </div>
  );
}
