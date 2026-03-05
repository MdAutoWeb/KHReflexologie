import Hero from '../components/Hero';
import CTA from '../components/CTA';
import Image from 'next/image';

export const metadata = {
  title: 'Aanbod | Kimberley - Reflexologie & More',
  description: 'Ontdek onze behandelingen: voetreflexologie, combi voetreflexologie-verzorging en relaxerende lichaamsmassage. Prijzen en informatie.',
};

export default function Aanbod() {
  return (
    <div>
      {/* Hero Banner */}
      <Hero title="" imageUrl="/images/KImberley_reflexologie_11.jpg" compact={true} />

      {/* Services Section - White */}
      <section className="py-20 md:py-32 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
              {/* Services List */}
              <div className="lg:col-span-1 space-y-8">
                <div className="border-b border-[#B8A89A]/20 pb-6">
                  <h3 className="text-2xl md:text-3xl font-serif text-[#3F342C] mb-3 font-light">Voetreflexologie</h3>
                  <p className="text-base text-[#3F342C] font-light mb-1">60min</p>
                  <p className="text-lg text-[#3F342C] font-light">€80</p>
                </div>

                <div className="border-b border-[#B8A89A]/20 pb-6">
                  <h3 className="text-2xl md:text-3xl font-serif text-[#3F342C] mb-3 font-light">Combi voetreflexologie-verzorging</h3>
                  <p className="text-base text-[#3F342C] font-light mb-1">+/- 90min</p>
                  <p className="text-lg text-[#3F342C] font-light mb-3">€90</p>
                  <p className="text-[#3F342C]/70 text-sm font-light leading-relaxed">
                    Inclusief voetbad met mineralen, scrub, masker, voet-verzorging, nagels knippen en verzorgen
                  </p>
                </div>

                <div className="border-b border-[#B8A89A]/20 pb-6">
                  <h3 className="text-2xl md:text-3xl font-serif text-[#3F342C] mb-3 font-light">Cadeaubon</h3>
                  <p className="text-[#3F342C]/80 text-sm font-light leading-relaxed">
                    Ontdekking reflexologie indien je een cadeaubon wenst met de volgende gegevens: volledige naam en behandeling of bedrag naar keuze. De cadeaubon kan per post verzonden worden of afgehaald worden.
                  </p>
                </div>

                <div className="pt-4">
                  <p className="text-[#3F342C]/80 italic text-sm leading-relaxed font-light">
                    Alle behandelingen zijn inclusief een gezellig kopje thee en/of glas water, kristalenergie, een warm ontvangst met een glimlach, wegkruipen onder een fleece en indien gewenst een begroeting van één van onze katten. Iedereen welkom!
                  </p>
                </div>
              </div>

              {/* Side Image */}
              <div className="hidden lg:block lg:col-span-2">
                <div className="relative w-full h-[700px] rounded-xl overflow-hidden shadow-lg">
                  <Image
                    src="/images/KImberley_reflexologie_37.jpg"
                    alt="Behandeling"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Producten Section - White */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-start">
            {/* Left: Foto producten */}
            <div>
              <div className="relative w-full h-[360px] rounded-xl overflow-hidden shadow-lg">
                <Image
                  src="/images/KImberley_reflexologie_10.jpg"
                  alt="Aromen producten"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Right: Producten tekst uit producten pagina */}
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-2xl md:text-3xl font-serif text-[#3F342C] font-light">
                  Producten Aromen
                </h2>
                <p className="text-[#3F342C]/80 text-sm md:text-base leading-relaxed font-light">
                  Ik werk samen met en verkoop 100% pure producten van Aromen, een jonge Belgische
                  onderneming. De producten worden met zorg ontwikkeld en passen mooi bij de
                  behandelingen in de praktijk.
                </p>
              </div>

              <div className="space-y-6 text-sm md:text-base text-[#3F342C]/85 font-light">
                <div>
                  <h3 className="text-lg md:text-xl font-serif text-[#3F342C] mb-2 font-light">
                    Essentiële oliën
                  </h3>
                  <p className="mb-2">
                    Verschillende diffuser blends (10 ml), zoals:
                  </p>
                  <ul className="list-disc list-inside space-y-1">
                    <li>Jasmijn mix, Focus, Good Morning, Good Night</li>
                    <li>BioPure, BioPure Relax, BioPure Focus</li>
                    <li>BioPure Winter, Spring, Summer, Autumn</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg md:text-xl font-serif text-[#3F342C] mb-2 font-light">
                    Diffusers
                  </h3>
                  <ul className="list-disc list-inside space-y-1">
                    <li>Ultrasone diffuser “Hazelnut” donker – €49</li>
                    <li>Ultrasone diffuser “Hazelnut” licht – €49</li>
                    <li>Ultrasone diffuser “Acorn” wit – €59</li>
                    <li>Ultrasone diffuser “Acorn” zwart – €59</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg md:text-xl font-serif text-[#3F342C] mb-2 font-light">
                    DIY & basisoliën
                  </h3>
                  <ul className="list-disc list-inside space-y-1">
                    <li>Zoete amandelolie – €8,50</li>
                    <li>Arganolie (Bio) – €21</li>
                    <li>Abrikozenpitolie – €9,50</li>
                  </ul>
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
