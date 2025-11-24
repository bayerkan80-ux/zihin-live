import "../styles/globals.css";
import "../styles/layout.css";

export const metadata = {
  title: "Zihin.Live",
  description: "AI ile güçlendirilmiş bilinç deneyimi.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="tr">
      <body>
        <main className="main-container">
          {children}
        </main>
      </body>
    </html>
  );
}
