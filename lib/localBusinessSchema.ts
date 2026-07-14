import { getCurrentLocation } from "./location";

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://kimberleyhwong.com";

const BUSINESS = {
  name: "KH Reflexologie",
  telephone: "+32476514248",
  email: "kimberley.hwong@outlook.be",
  taxID: "BE0782.960.046",
  priceRange: "€€",
  areaServed: [
    "Brugge",
    "Oedelem",
    "Sint-Andries",
    "Beernem",
    "Wevelgem",
    "Damme",
    "Knokke-Heist",
  ],
  sameAs: [
    "https://www.facebook.com/voetreflexologiekh/",
    "https://www.instagram.com/reflexologie_kh/",
  ],
} as const;

export function getSiteUrl(): string {
  return SITE_URL.replace(/\/$/, "");
}

export function getLocalBusinessSchema(path = "", date = new Date()) {
  const siteUrl = getSiteUrl();
  const pageUrl = path ? `${siteUrl}${path.startsWith("/") ? path : `/${path}`}` : siteUrl;
  const location = getCurrentLocation(date);

  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${siteUrl}/#localbusiness`,
    name: BUSINESS.name,
    image: [
      `${siteUrl}/images/Logo.png`,
      `${siteUrl}/images/KImberley_reflexologie_24.jpg`,
    ],
    telephone: BUSINESS.telephone,
    email: BUSINESS.email,
    taxID: BUSINESS.taxID,
    address: {
      "@type": "PostalAddress",
      streetAddress: location.street,
      addressLocality: location.city,
      postalCode: location.postalCode,
      addressCountry: "BE",
    },
    areaServed: BUSINESS.areaServed,
    url: pageUrl,
    priceRange: BUSINESS.priceRange,
    description:
      "Voetreflexologie en ontspannende voetmassage in een warme praktijk in de regio Brugge.",
    sameAs: BUSINESS.sameAs,
  };
}
