export default function Home() {
  return (
    <main className="min-h-screen bg-white px-6 flex flex-col items-center">
      
      {/* Üst boşluk */}
      <div className="h-20" />

      {/* Başlık */}
      <h1 className="text-4xl font-semibold tracking-tight text-neutral-900">
        Zihin.Live
      </h1>

      {/* Alt açıklama */}
      <p className="text-neutral-600 mt-2 text-lg">
        AI ile konuşmanı canlı yayınla.
      </p>

      {/* Model seçimi */}
      <div className="flex gap-2 mt-6">
        <button className="px-4 py-2 text-sm rounded-full bg-neutral-900 text-white">
          Grok
        </button>
        <button className="px-4 py-2 text-sm rounded-full border border-neutral-300">
          Claude
        </button>
        <button className="px-4 py-2 text-sm rounded-full border border-neutral-300">
          Gemini
        </button>
      </div>

      {/* Giriş kutusu */}
      <input
        placeholder="Buraya yaz, bütün dünya izlesin"
        className="mt-6 w-full max-w-md border border-neutral-300 rounded-xl px-4 py-3 text-neutral-700 focus:outline-none focus:ring-2 focus:ring-neutral-900"
      />

      {/* Yayın butonları */}
      <div className="flex gap-3 mt-6">
        <button className="px-4 py-2 rounded-xl bg-neutral-900 text-white hover:bg-neutral-800 transition">
          Yayınla
        </button>

        <button className="px-4 py-2 rounded-xl border border-neutral-300 text-neutral-700 hover:bg-neutral-50">
          Link ile
        </button>

        <button className="px-4 py-2 rounded-xl border border-neutral-300 text-neutral-700 hover:bg-neutral-50">
          Davetli
        </button>
      </div>

      {/* Alt bilgi */}
      <p className="text-neutral-400 mt-10 text-sm">
        v1 · 24 Kasım 2025 · Türkiye
      </p>

    </main>
  );
}
