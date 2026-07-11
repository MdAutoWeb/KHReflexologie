interface QuoteBannerProps {
  quote: string;
  className?: string;
  soft?: boolean;
  fadeToWhite?: boolean;
}

export default function QuoteBanner({
  quote,
  className = "",
  soft = false,
  fadeToWhite = true,
}: QuoteBannerProps) {
  if (soft) {
    return (
      <blockquote
        className={`relative text-center px-6 bg-[#F5EFE8] ${
          fadeToWhite ? "pt-14 md:pt-20 pb-20 md:pb-28" : "py-8 md:py-10"
        } ${className}`}
      >
        <p className="relative z-[1] text-lg md:text-xl font-serif text-[#3F342C]/75 font-light italic leading-relaxed max-w-2xl mx-auto">
          {quote}
        </p>
        {fadeToWhite && (
          <div
            className="absolute inset-x-0 bottom-0 h-24 md:h-32 bg-gradient-to-b from-transparent to-white pointer-events-none"
            aria-hidden="true"
          />
        )}
      </blockquote>
    );
  }

  return (
    <blockquote className={`text-center py-12 md:py-16 px-6 ${className}`}>
      <p className="text-xl md:text-2xl font-serif text-[#3F342C] font-light italic leading-relaxed max-w-3xl mx-auto">
        &ldquo;{quote}&rdquo;
      </p>
    </blockquote>
  );
}
