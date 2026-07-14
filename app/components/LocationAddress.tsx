"use client";

import { getCurrentLocation } from "@/lib/location";

type LocationAddressProps = {
  variant?: "inline" | "footer";
};

export default function LocationAddress({
  variant = "inline",
}: LocationAddressProps) {
  const location = getCurrentLocation();

  if (variant === "footer") {
    return (
      <div className="space-y-1" suppressHydrationWarning>
        <p className="text-[#3F342C]/80 text-sm font-light">{location.street}</p>
        <p className="text-[#3F342C]/80 text-sm font-light">
          {location.postalCode} {location.city}
        </p>
      </div>
    );
  }

  return (
    <span suppressHydrationWarning>{location.full}</span>
  );
}
