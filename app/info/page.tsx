import Hero from '../components/Hero';
import CTA from '../components/CTA';
import Image from 'next/image';

export const metadata = {
  title: 'Info | Kimberley - Reflexologie & More',
  description: 'Wat is reflexologie? Informatie over voetreflexologie, eerste bezoek, betaling en reserveringen.',
};

export default function Info() {
  return (
    <div>
      {/* Hero Banner */}
      <Hero title="" imageUrl="/images/KImberley_reflexologie_6.jpg" compact={true} />

      {/* Eerste bezoek Section - White */}
      <section className="py-20 md:py-32 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
              {/* Left Column - Text */}
              <div>
                <h2 className="text-3xl md:text-4xl font-serif text-[#3F342C] mb-8 font-light">
                  Eerste bezoek
                </h2>
                <div className="space-y-5 text-[#3F342C] text-base md:text-lg leading-relaxed font-light">
                  <p>
                    Graag kom je 10 minuten voor je afspraak aan. Dit geeft je de tijd om rustig binnen te komen en je voor te bereiden op de behandeling.
                  </p>
                  <p>
                    Een behandeling kan uitlopen, ik werk intuïtief en neem de tijd die nodig is. Er is parkeergelegenheid op de oprit of aan de straat (gratis). De praktijk bevindt zich op de eerste verdieping.
                  </p>
                  <p>
                    Er wordt een welkomstdrankje aangeboden. Betaling kan contant of via Payconiq/Bancontact app. Graag gepast betalen bij contante betaling.
                  </p>
                  <p>
                    Voor een combi of voetreflexologie behandeling is het handig om comfortabele broek te dragen.
                  </p>
                </div>
              </div>

              {/* Right Column - Image */}
              <div className="relative w-full h-[500px] rounded-xl overflow-hidden shadow-lg">
                <Image
                  src="/images/KImberley_reflexologie_24.jpg"
                  alt="Eerste bezoek"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Betaling, Reserveren, Producten Aromen Section - Light Beige */}
      <section className="py-20 md:py-32 bg-[#E8DED4]">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
              {/* Left Column - Image */}
              <div className="relative w-full h-[500px] rounded-xl overflow-hidden shadow-lg">
                <Image
                  src="/images/KImberley_reflexologie_19.jpg"
                  alt="Behandeling"
                  fill
                  className="object-cover"
                />
              </div>

              {/* Right Column - Text */}
              <div className="space-y-10">
                <div>
                  <h3 className="text-2xl md:text-3xl font-serif text-[#3F342C] mb-4 font-light">Betaling</h3>
                  <p className="text-[#3F342C]/80 text-base leading-relaxed font-light">
                    Betaling kan contant of via Bancontact/Payconiq app. Graag gepast betalen bij contante betaling.
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl md:text-3xl font-serif text-[#3F342C] mb-4 font-light">Reserveren</h3>
                  <p className="text-[#3F342C]/80 text-base leading-relaxed font-light">
                    Reserveren kan direct via de link op deze website of per email indien de beschikbare tijden niet passen.
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl md:text-3xl font-serif text-[#3F342C] mb-4 font-light">Producten Aromen</h3>
                  <p className="text-[#3F342C]/80 text-base leading-relaxed font-light mb-4">
                    Ik werk met en verkoop 100% pure producten van Aromen, een jong Belgisch aromatherapie bedrijf uit Gullegem. Download gratis het e-book over etherische oliën van Aromen via deze link.
                  </p>
                  <p className="text-[#3F342C]/80 text-base leading-relaxed font-light">
                    Kortingscode: xxxxx<br />
                    Aanbieding: xxxx
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTA />
    </div>
  );
}
