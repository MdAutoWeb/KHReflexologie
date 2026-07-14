import type { Metadata } from "next";
import { Geist, Playfair_Display } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { getSiteUrl } from "@/lib/localBusinessSchema";

const siteUrl = getSiteUrl();

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
  metadataBase: new URL(siteUrl),
  title: "Kimberley – Voetreflexologie & Voetmassage in en rond Brugge | KH Reflexologie",
  description:
    "Landen bij jezelf, te beginnen bij je voeten. KH Reflexologie van Kimberley biedt voetreflexologie in een warme praktijk in en rond Brugge.",
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
