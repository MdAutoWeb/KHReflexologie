"use client";

import { getCurrentLocation } from "@/lib/location";

export default function LocationMap() {
  const location = getCurrentLocation();

  return (
    <iframe
      src={`https://www.google.com/maps?q=${location.mapsQuery}&output=embed`}
      width="100%"
      height="100%"
      style={{ border: 0 }}
      allowFullScreen
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      className="w-full h-full"
      title={`Kaart: ${location.full}`}
      suppressHydrationWarning
    />
  );
}
