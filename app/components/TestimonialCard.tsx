interface TestimonialCardProps {
  quote: string;
  author: string;
  role?: string;
  imageUrl?: string;
}

export default function TestimonialCard({ quote, author, role, imageUrl }: TestimonialCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-sm p-8 md:p-12 max-w-3xl mx-auto">
      <div className="flex flex-col md:flex-row gap-6 md:gap-10">
        {imageUrl && (
          <div className="flex-shrink-0">
            <div className="w-20 h-20 rounded-full bg-[#E8DED4] overflow-hidden">
              {/* Image placeholder - replace with actual image */}
            </div>
          </div>
        )}
        <div className="flex-1">
          <div className="text-5xl text-[#B8A89A] mb-4 leading-none font-serif">"</div>
          <p className="text-lg md:text-xl text-[#3F342C] mb-6 italic leading-relaxed font-light">
            {quote}
          </p>
          <div>
            <p className="font-light text-base text-[#3F342C]">{author}</p>
            {role && <p className="text-[#B8A89A] text-sm mt-1 font-light">{role}</p>}
          </div>
        </div>
      </div>
    </div>
  );
}
