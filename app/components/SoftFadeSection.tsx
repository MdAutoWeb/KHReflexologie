import { ReactNode } from "react";

interface SoftFadeSectionProps {
  children: ReactNode;
  className?: string;
}

export default function SoftFadeSection({
  children,
  className = "",
}: SoftFadeSectionProps) {
  return (
    <section
      className={`relative pt-14 md:pt-20 pb-20 md:pb-28 px-6 bg-[#F5EFE8] ${className}`}
    >
      <div className="relative z-[1]">{children}</div>
      <div
        className="absolute inset-x-0 bottom-0 h-24 md:h-32 bg-gradient-to-b from-transparent to-white pointer-events-none"
        aria-hidden="true"
      />
    </section>
  );
}
