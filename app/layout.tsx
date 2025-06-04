import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><defs><linearGradient id='bg' x1='0%25' y1='0%25' x2='100%25' y2='100%25'><stop offset='0%25' style='stop-color:%231f2937;stop-opacity:1' /><stop offset='50%25' style='stop-color:%23374151;stop-opacity:1' /><stop offset='100%25' style='stop-color:%23111827;stop-opacity:1' /></linearGradient></defs><rect width='100' height='100' fill='url(%23bg)' rx='22'/><text x='50' y='68' font-size='45' text-anchor='middle' font-family='system-ui'>🔪</text></svg>" />
        <meta name="theme-color" content="#1f2937" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
