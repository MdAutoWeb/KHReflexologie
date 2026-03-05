import type { Metadata } from "next";
import { Geist, Playfair_Display } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

const geistSans = Geist({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-serif",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Kimberley – Voetreflexologie & Voetmassage in en rond Brugge | KH Reflexologie",
  description:
    "KH Reflexologie van Kimberley biedt voetreflexologie en zachte voetmassage in en rond Brugge. Een warme praktijk waar iedereen welkom is, waar niets moet en je jezelf mag zijn.",
  keywords:
    "reflexologie, voetreflexologie, voetmassage, Brugge, regio Brugge, Wevelgem, ontspanning, wellness, KH Reflexologie",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="nl" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${playfair.variable} antialiased`}
      >
        <Header />
        <main className="min-h-screen pt-0 relative z-10">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
