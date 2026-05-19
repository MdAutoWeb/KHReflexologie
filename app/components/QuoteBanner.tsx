interface QuoteBannerProps {
  quote: string;
  className?: string;
}

export default function QuoteBanner({
  quote,
  className = "",
}: QuoteBannerProps) {
  return (
    <blockquote className={`text-center py-12 md:py-16 px-6 ${className}`}>
      <p className="text-xl md:text-2xl font-serif text-[#3F342C] font-light italic leading-relaxed max-w-3xl mx-auto">
        &ldquo;{quote}&rdquo;
      </p>
    </blockquote>
  );
}
