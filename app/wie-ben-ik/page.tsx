import Hero from '../components/Hero';
import CTA from '../components/CTA';
import Image from 'next/image';

export const metadata = {
  title: 'Wie ben ik | Kimberley - Reflexologie & More',
  description: 'Leer meer over Kimberley en haar opleidingen in voetreflexologie en massage.',
};

export default function WieBenIk() {
  return (
    <div>
      {/* Hero Section */}
      <Hero title="" imageUrl="/images/KImberley_reflexologie_55.jpg" />

      {/* Reflexologie + Opleidingen Section - White */}
      <section className="py-20 md:py-32 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto space-y-20">
            {/* Rij 1: Opleidingen links, foto rechts */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
              {/* Opleidingen links */}
              <div>
                <h2 className="text-3xl md:text-4xl font-serif text-[#3F342C] mb-6 font-light">
                  Opleidingen
                </h2>
                <div className="space-y-4">
                  <div className="flex justify-between gap-4 text-sm md:text-base border-b border-[#B8A89A]/20 pb-3">
                    <div className="text-[#B8A89A] font-light w-28">September 2021</div>
                    <div className="flex-1 text-[#3F342C] font-light">
                      <p>Health Care voorbereidingsprogramma</p>
                      <p className="text-[#3F342C]/70 text-xs md:text-sm">Howest-ICZO</p>
                    </div>
                  </div>
                  <div className="flex justify-between gap-4 text-sm md:text-base border-b border-[#B8A89A]/20 pb-3">
                    <div className="text-[#B8A89A] font-light w-28">2019-2020</div>
                    <div className="flex-1 text-[#3F342C] font-light">
                      <p>Voetverzorging</p>
                      <p className="text-[#3F342C]/70 text-xs md:text-sm">CVO SG Brugge</p>
                    </div>
                  </div>
                  <div className="flex justify-between gap-4 text-sm md:text-base border-b border-[#B8A89A]/20 pb-3">
                    <div className="text-[#B8A89A] font-light w-28">2019</div>
                    <div className="flex-1 text-[#3F342C] font-light">
                      <p>Product line and treatments</p>
                      <p className="text-[#3F342C]/70 text-xs md:text-sm">Schrammek</p>
                    </div>
                  </div>
                  <div className="flex justify-between gap-4 text-sm md:text-base border-b border-[#B8A89A]/20 pb-3">
                    <div className="text-[#B8A89A] font-light w-28">2019</div>
                    <div className="flex-1 text-[#3F342C] font-light">
                      <p>Basisjaar De Mens</p>
                      <p className="text-[#3F342C]/70 text-xs md:text-sm">Syntra-West Brugge</p>
                    </div>
                  </div>
                  <div className="flex justify-between gap-4 text-sm md:text-base border-b border-[#B8A89A]/20 pb-3">
                    <div className="text-[#B8A89A] font-light w-28">2018-2010</div>
                    <div className="flex-1 text-[#3F342C] font-light">
                      <p>Voetreflexologie</p>
                      <p className="text-[#3F342C]/70 text-xs md:text-sm">Syntra-West Brugge</p>
                    </div>
                  </div>
                  <div className="flex justify-between gap-4 text-sm md:text-base">
                    <div className="text-[#B8A89A] font-light w-28">2013 &amp; 2019</div>
                    <div className="flex-1 text-[#3F342C] font-light">
                      <p>Beroepsbekwaamheid masseur</p>
                      <p className="text-[#3F342C]/70 text-xs md:text-sm">Syntra-West Brugge</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Foto rechts */}
              <div className="hidden lg:block">
                <div className="relative w-full h-[320px] rounded-xl overflow-hidden shadow-lg">
                  <Image
                    src="/images/KImberley_reflexologie_32.jpg"
                    alt="Kimberley aan het werk"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Rij 2: Foto links, tekst 'Wat is reflexologie' rechts */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              {/* Foto links */}
              <div className="hidden lg:block">
                <div className="relative w-full h-[360px] rounded-xl overflow-hidden shadow-lg">
                  <Image
                    src="/images/KImberley_reflexologie_37.jpg"
                    alt="Voetreflexologie"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              {/* Tekst rechts */}
              <div className="space-y-8">
                <div className="space-y-5">
                  <h2 className="text-3xl md:text-4xl font-serif text-[#3F342C] font-light">
                    Wat is reflexologie?
                  </h2>
                  <p className="text-[#3F342C]/80 text-base md:text-lg leading-relaxed font-light">
                    Voetreflexologie is een zachte, ontspannende behandeling waarbij via druk op reflexzones in de voeten
                    de zelfherstellende kracht van het lichaam wordt gestimuleerd. Het hele lichaam wordt als het ware
                    weerspiegeld in de voeten.
                  </p>
                  <p className="text-[#3F342C]/80 text-base md:text-lg leading-relaxed font-light">
                    Door deze zones met aandacht en zorg te behandelen, wordt het lichaam uitgenodigd om terug in evenwicht
                    te komen en spanning los te laten – zowel fysiek als emotioneel.
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl md:text-3xl font-serif text-[#3F342C] mb-4 font-light">
                    Wat doet voetreflexologie?
                  </h3>
                  <ul className="space-y-3 text-[#3F342C]/85 text-sm md:text-base font-light">
                    <li className="flex items-start gap-2">
                      <span className="mt-1 h-1.5 w-1.5 rounded-full bg-[#B8A89A]" />
                      <span>Werkt diep ontspannend, zowel op fysiek als op mentaal vlak</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1 h-1.5 w-1.5 rounded-full bg-[#B8A89A]" />
                      <span>Versterkt het immuunsysteem</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1 h-1.5 w-1.5 rounded-full bg-[#B8A89A]" />
                      <span>Activeert het zelfregulerend systeem en het lymfestelsel</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1 h-1.5 w-1.5 rounded-full bg-[#B8A89A]" />
                      <span>Bevordert spijsvertering en bloedsomloop</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1 h-1.5 w-1.5 rounded-full bg-[#B8A89A]" />
                      <span>Ondersteunt het hormonale evenwicht</span>
                    </li>
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
