import Link from 'next/link';
import Image from 'next/image';

export default function CTA() {
  return (
    <section className="relative bg-[#E8DED4] py-16 md:py-20 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/KImberley_reflexologie_32.jpg"
          alt=""
          fill
          className="object-cover opacity-20"
          quality={90}
        />
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-[#3F342C] font-light">
            Talk to us today
          </h2>
          <div className="flex flex-col md:flex-row items-center md:items-end gap-6 md:gap-8">
            <p className="text-base md:text-lg text-[#3F342C]/80 font-light text-center md:text-right max-w-md">
              Wil je meer info of een afspraak inboeken? Neem gerust contact op.
            </p>
            <Link 
              href="/contact"
              className="px-8 py-3 border-2 border-[#3F342C] text-[#3F342C] font-light rounded-sm hover:bg-[#3F342C] hover:text-white transition-all duration-300 inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm"
            >
              CONTACT US
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
