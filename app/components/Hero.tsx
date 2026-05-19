import { ReactNode } from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface HeroProps {
  title: string;
  subtitle?: string;
  imageUrl?: string;
  children?: ReactNode;
  showTestimonial?: boolean;
  showIntro?: boolean;
  showIntroCta?: boolean;
  compact?: boolean;
}

export default function Hero({
  title,
  subtitle,
  imageUrl,
  children,
  showTestimonial,
  showIntro = true,
  showIntroCta = true,
  compact,
}: HeroProps) {
  if (compact) {
    return (
      <section className="relative w-full h-[30vh] min-h-[250px] flex items-end">
        <div className="absolute inset-0 overflow-hidden">
          {imageUrl ? (
            <Image
              src={imageUrl}
              alt=""
              fill
              className="object-cover"
              priority
              quality={80}
              sizes="100vw"
            />
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-[#3F342C] to-[#2a231c]" />
          )}
        </div>

        <div className="absolute inset-0 bg-black/40" />

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
      <div className="absolute inset-0">
        {imageUrl ? (
          <Image
            src={imageUrl}
            alt=""
            fill
            className="object-cover"
            priority
            quality={80}
            sizes="100vw"
            style={{ objectPosition: 'center' }}
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-[#3F342C] to-[#2a231c]" />
        )}
      </div>

      <div className="absolute inset-0 bg-black/40" />

      <div className="relative z-10 flex-1 flex flex-col">
        {showIntro && (
          <div className="flex-1 flex items-center py-16 md:py-24">
            <div className="container mx-auto px-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto relative">
                <div className="text-white">
                  <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif mb-6 leading-tight font-light">
                    {title}
                  </h1>
                  {subtitle && (
                    <p className="text-base md:text-lg text-white/90 mb-4 leading-relaxed font-light">
                      {subtitle}
                    </p>
                  )}
                  <p className="text-sm md:text-base text-white/90 leading-relaxed font-light">
                    In een wereld die nooit stilstaat, bied ik je een plek waar de tijd dat wel doet. Ik ben Kimberley,
                    een warme, goedlachse en tikkeltje introverte vrouw die je met open armen ontvangt in mijn praktijk
                    voor voetreflexologie.
                  </p>
                  <p className="text-sm md:text-base text-white/90 leading-relaxed font-light mt-4">
                    Ik werk hiernaast ook als administratief bediende in de logistiek.
                  </p>
                </div>

                <div className="text-white mt-8 lg:mt-0 relative">
                  <div className="hidden lg:block absolute left-0 top-0 bottom-0 w-px bg-white/30 -translate-x-6" />

                  <p className="text-sm md:text-base text-white/90 leading-relaxed font-light mb-4">
                    Na een weg van dromen en groeien, heb ik de moed gevonden om mijn passie te volgen. Mijn passie voor
                    voetreflexologie ontstond uit een zoektocht binnen in mezelf en een verlangen naar vertraging. Als
                    mama en natuurmens hou ik ervan om te verbinden – met mezelf en met anderen.
                  </p>
                  <p className="text-sm md:text-base text-white/90 leading-relaxed font-light mb-4">
                    Ik geloof in de kracht van zachtheid. Via je voeten breng ik je hele lichaam tot rust, stimuleer ik je
                    zelfgenezend vermogen en help ik je de dagelijkse drukte even te vergeten.
                  </p>
                  <p className={`text-sm md:text-base text-white/90 leading-relaxed font-light ${showIntroCta ? 'mb-6' : ''}`}>
                    In mijn praktijk ben ik er voor jou met een glimlach en een luisterend oor (of een deugddoende
                    stilte). Een plek waar je mag ontsnappen aan de rush en gewoon mag &lsquo;zijn&rsquo;. Gun jij jezelf
                    die adempauze?
                  </p>
                  {showIntroCta && (
                    <Link
                      href="/contact"
                      className="inline-flex items-center gap-2 px-6 py-3 bg-[#B8A89A] text-white font-light text-sm rounded-xl hover:bg-[#A39284] transition-all duration-300"
                    >
                      Boek hier jouw moment van rust
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}

        {!showIntro && title && (
          <div className="flex-1 flex items-end py-16 md:py-24">
            <div className="container mx-auto px-6">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif text-white font-light leading-tight max-w-3xl">
                {title}
              </h1>
            </div>
          </div>
        )}

        {showTestimonial && (
          <div className="pb-4 md:pb-6">
            <div className="container mx-auto px-6">
              <div className="max-w-4xl mx-auto bg-black/50 backdrop-blur-sm rounded-lg p-6 md:p-8">
                <div className="flex flex-col md:flex-row gap-6 items-start">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 md:w-20 md:h-20 rounded-lg bg-[#B8A89A] overflow-hidden" />
                  </div>
                  <div className="flex-1 text-white">
                    <div className="text-4xl md:text-5xl text-[#B8A89A] mb-2 leading-none font-serif">&ldquo;</div>
                    <p className="text-sm md:text-base text-white/95 mb-3 italic leading-relaxed font-light">
                      Via Kimberley kwam ik voor het eerst in aanraking met voetreflexologie. Ik stond er meteen van
                      versteld hoe veel deugd en effect zo&apos;n behandeling kan hebben. Kimberley is heel respectvol,
                      mindfull aanwezig en voelt waar ze moet zijn, ook bij haar massages. Ze is getalenteerd en
                      gepassioneerd, maar dat zal je zelf wel meteen ondervinden!
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
