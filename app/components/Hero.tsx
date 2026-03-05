import { ReactNode } from 'react';
import Image from 'next/image';

interface HeroProps {
  title: string;
  subtitle?: string;
  imageUrl?: string;
  children?: ReactNode;
  showTestimonial?: boolean;
  compact?: boolean;
}

export default function Hero({ title, subtitle, imageUrl, children, showTestimonial, compact }: HeroProps) {
  if (compact) {
    return (
      <section className="relative w-full h-[30vh] min-h-[250px] flex items-end">
        {/* Background Image */}
        <div className="absolute inset-0 overflow-hidden">
          {imageUrl ? (
            <Image
              src={imageUrl}
              alt=""
              fill
              className="object-cover"
              priority
              quality={90}
            />
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-[#3F342C] to-[#2a231c]" />
          )}
        </div>
        
        {/* Soft Dark Overlay */}
        <div className="absolute inset-0 bg-black/40" />
        
        {/* Title */}
        {title && (
          <div className="relative z-10 container mx-auto px-6 pb-6 pt-20 md:pt-24">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif text-white font-light leading-tight">
              {title}
            </h1>
          </div>
        )}
      </section>
    );
  }

  return (
    <section className="relative w-full min-h-[calc(100vh-120px)] flex flex-col pt-[120px]">
      {/* Background Image */}
      <div className="absolute inset-0">
        {imageUrl ? (
          <Image
            src={imageUrl}
            alt=""
            fill
            className="object-cover"
            priority
            quality={90}
            style={{ objectPosition: 'center' }}
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-[#3F342C] to-[#2a231c]" />
        )}
      </div>
      
      {/* Soft Dark Overlay */}
      <div className="absolute inset-0 bg-black/40" />
      
      {/* Content Container */}
      <div className="relative z-10 flex-1 flex flex-col">
        {/* Main Content */}
        <div className="flex-1 flex items-center py-16 md:py-24">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto relative">
              {/* Left Column */}
              <div className="text-white">
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif mb-4 leading-tight font-light">
                  {title}
                </h1>
                {subtitle && (
                  <p className="text-base md:text-lg text-white/90 mb-4 leading-relaxed font-light">
                    {subtitle}
                  </p>
                )}
                <p className="text-sm md:text-base text-white/90 leading-relaxed font-light">
                  Ik ben een warme, goedlachte en ietwat introverte jonge vrouw die je met heel veel liefde zal ontvangen. Ik ben mama van een zoontje. Ik hou van tijd doorbrengen in de natuur, maar ook van gezellig samen zijn met vrienden en familie. Ik ben graag creatief bezig en leer graag iets bij.
                </p>
              </div>
              
              {/* Right Column */}
              <div className="text-white mt-40 lg:mt-80 relative">
                {/* Vertical Line - matches text height */}
                <div className="hidden lg:block absolute left-0 top-0 bottom-0 w-px bg-white/30 -translate-x-6" />
                
                <p className="text-sm md:text-base text-white/90 leading-relaxed font-light mb-4">
                  Na vele opleidingen, dromen en wat twijfelen aan mezelf heb ik eindelijk de moed verzameld om deze stap te zetten. Ik werk hiernaast sinds januari 2022 ook in de productie van Aromen. Ik bied jou een ruimte aan waar niets moet en je jezelf mag zijn. Een laagdrempelige plek om even te ontsnappen van het "moeten", haasten en alle druk die ons opgelegd wordt.
                </p>
                <p className="text-sm md:text-base text-white/90 leading-relaxed font-light">
                  Roept dit jou? Boek dan jouw afspraak.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Testimonial Section - Compact Rectangle */}
        {showTestimonial && (
          <div className="pb-4 md:pb-6">
            <div className="container mx-auto px-6">
              <div className="max-w-4xl mx-auto bg-black/50 backdrop-blur-sm rounded-lg p-6 md:p-8">
                <div className="flex flex-col md:flex-row gap-6 items-start">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 md:w-20 md:h-20 rounded-lg bg-[#B8A89A] overflow-hidden">
                      {/* Profile image placeholder - keep as is for now */}
                    </div>
                  </div>
                  <div className="flex-1 text-white">
                    <div className="text-4xl md:text-5xl text-[#B8A89A] mb-2 leading-none font-serif">"</div>
                    <p className="text-sm md:text-base text-white/95 mb-3 italic leading-relaxed font-light">
                      Via Kimberley kwam ik voor het eerst in aanraking met voetreflexologie. Ik stond er meteen van versteld hoe veel deugd en effect zo'n behandeling kan hebben. Kimberley is heel respectvol, mindfull aanwezig en voelt waar ze moet zijn, ook bij haar massages. Ze is getalenteerd en gepassioneerd, maar dat zal je zelf wel meteen ondervinden!
                    </p>
                    <div>
                      <p className="font-light text-base text-white">Sophia Dequeker</p>
                      <p className="text-[#B8A89A] text-xs mt-1 font-light">Down To Earth Massage</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
        
        {children}
      </div>
    </section>
  );
}
