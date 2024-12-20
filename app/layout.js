import "./globals.css";
export const metadata = {
  title: "Your Travel Shop",
  description: "Your Travel Shop",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="hide-scrollbar">
      <body className={`antialiased`}>{children}</body>
    </html>
  );
}
