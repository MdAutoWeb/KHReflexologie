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
  title: "Kimberley - Reflexologie & More | Welkom in een ruimte waar je jezelf mag zijn",
  description:
    "Een ruimte waar iedereen welkom is, waar niets moet en je jezelf mag zijn. Voetreflexologie en relaxerende massages in Wevelgem.",
  keywords:
    "reflexologie, voetreflexologie, massage, Wevelgem, ontspanning, wellness",
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
