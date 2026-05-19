import Hero from "../components/Hero";
import CTA from "../components/CTA";
import QuoteBanner from "../components/QuoteBanner";
import Image from "next/image";

export const metadata = {
  title: "Aanbod | Voetreflexologie & voetmassage in regio Brugge",
  description:
    "Ontdek het aanbod van KH Reflexologie: voetreflexologie, combi voetreflexologie-verzorging en cadeaubonnen. Voetmassage en reflexologie in en rond Brugge.",
};

export default function Aanbod() {
  return (
    <div>
      {/* Hero Banner */}
      <Hero
        title=""
        imageUrl="/images/KImberley_reflexologie_11.jpg"
        compact={true}
        showIntro={false}
      />

      <QuoteBanner
        quote="Voelt je lichaam zwaar of je hoofd vol? Kom zoals je bent, laat je schoenen bij de deur en herontdek je eigen balans."
        className="bg-white"
      />

      {/* Services Section - White */}
      <section className="py-20 md:py-32 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
              {/* Services List */}
              <div className="lg:col-span-1 space-y-8">
                <div className="border-b border-[#B8A89A]/20 pb-6">
                  <h3 className="text-2xl md:text-3xl font-serif text-[#3F342C] mb-3 font-light">
                    Voetreflexologie
                  </h3>
                  <p className="text-base text-[#3F342C] font-light mb-1">
                    60min
                  </p>
                  <p className="text-lg text-[#3F342C] font-light">€80</p>
                  <p className="text-[#3F342C]/70 text-sm font-light leading-relaxed mt-3">
                    Helpt bij stress, slaapproblemen of vermoeidheid
                  </p>
                </div>

                <div className="border-b border-[#B8A89A]/20 pb-6">
                  <h3 className="text-2xl md:text-3xl font-serif text-[#3F342C] mb-3 font-light">
                    Combi voetreflexologie-verzorging
                  </h3>
                  <p className="text-base text-[#3F342C] font-light mb-1">
                    +/- 90min
                  </p>
                  <p className="text-lg text-[#3F342C] font-light mb-3">€90</p>
                  <p className="text-[#3F342C]/70 text-sm font-light leading-relaxed">
                    Inclusief voetbad met mineralen, scrub, masker,
                    voet-verzorging, nagels knippen en verzorgen
                  </p>
                </div>

                <div className="border-b border-[#B8A89A]/20 pb-6">
                  <h3 className="text-2xl md:text-3xl font-serif text-[#3F342C] mb-3 font-light">
                    Cadeaubon
                  </h3>
                  <p className="text-[#3F342C]/80 text-sm font-light leading-relaxed">
                    Ontdekking reflexologie indien je een cadeaubon wenst met de
                    volgende gegevens: volledige naam en behandeling of bedrag
                    naar keuze. De cadeaubon kan per post verzonden worden of
                    afgehaald worden.
                  </p>
                </div>

                <div className="pt-4">
                  <p className="text-[#3F342C]/80 italic text-sm leading-relaxed font-light">
                    Alle behandelingen zijn inclusief een gezellig kopje thee
                    en/of glas water, kristalenergie, een warm ontvangst met een
                    glimlach, wegkruipen onder een fleece en indien gewenst een
                    begroeting van één van onze katten. Iedereen welkom!
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
                    sizes="(max-width: 768px) 100vw, 600px"
                  />
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
