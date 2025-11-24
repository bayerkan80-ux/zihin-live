import '../styles/globals.css';

export const metadata = {
  title: "Zihin.Live",
  description: "AI ile konuşmanı canlı yayınla",
};

export default function RootLayout({ children }) {
  return (
    <html lang="tr">
      <body>{children}</body>
    </html>
  );
}
