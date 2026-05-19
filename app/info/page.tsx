import Hero from "../components/Hero";
import CTA from "../components/CTA";
import FAQ from "../components/FAQ";
import QuoteBanner from "../components/QuoteBanner";
import Image from "next/image";

export const metadata = {
  title: "Info | Wat is voetreflexologie en voetmassage in Brugge",
  description:
    "Veelgestelde vragen, tips om je voor te bereiden en praktische info rond betaling en reserveren bij KH Reflexologie in de regio Brugge.",
};

const preparationTips = [
  {
    title: "Comfortabele kleding",
    text: "Trek een broek aan die je gemakkelijk tot net onder je knie kunt optrekken. Zo kan ik ook je enkels en het onderste deel van je onderbenen goed behandelen.",
  },
  {
    title: "Frisse voetjes",
    text: "Je hoeft echt niet naar de pedicure te gaan, maar even je voeten opfrissen voor je komt is voor ons allebei prettig.",
  },
  {
    title: "Eten en drinken",
    text: "Probeer vlak voor de behandeling geen zware maaltijd te eten. Drink na de sessie juist extra veel water; dit helpt je lichaam om de afvalstoffen die zijn vrijgekomen sneller af te voeren.",
  },
  {
    title: "Kom op tijd",
    text: "Zorg dat je een paar minuutjes voor je afspraak aanwezig bent. Zo kun je in alle rust even 'landen' met een kopje thee, voordat we aan de behandeling beginnen.",
  },
  {
    title: "Niets moet",
    text: "Tijdens de massage hoef je niet te praten. Als je liever je ogen sluit en in stilte geniet, is dat helemaal prima. Dit is jouw moment.",
  },
];

export default function Info() {
  return (
    <div>
      <Hero
        title=""
        imageUrl="/images/KImberley_reflexologie_6.jpg"
        compact={true}
        showIntro={false}
      />

      <QuoteBanner
        quote="Zin in een kop thee en een behandeling die je weer lichter laat voelen?"
        className="bg-white"
      />

      <section className="py-20 md:py-32 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
              <div>
                <h2 className="text-3xl md:text-4xl font-serif text-[#3F342C] mb-4 font-light">
                  Zo bereid je je voor op je moment van rust
                </h2>
                <p className="text-[#3F342C]/80 text-base md:text-lg leading-relaxed font-light mb-8">
                  Om het maximale uit je sessie te halen en de ontspanning
                  direct te laten beginnen, heb ik een paar kleine tips:
                </p>
                <div className="space-y-6">
                  {preparationTips.map((tip) => (
                    <div key={tip.title}>
                      <h3 className="text-lg font-serif text-[#3F342C] mb-2 font-light">
                        {tip.title}
                      </h3>
                      <p className="text-[#3F342C]/80 text-base leading-relaxed font-light">
                        {tip.text}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative w-full h-[500px] rounded-xl overflow-hidden shadow-lg">
                <Image
                  src="/images/KImberley_reflexologie_24.jpg"
                  alt="Voorbereiding op je behandeling"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 600px"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <FAQ backgroundImageUrl="/images/KImberley_reflexologie_19.jpg" />

      <section className="py-20 md:py-32 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto space-y-10">

                <div>
                  <h3 className="text-2xl md:text-3xl font-serif text-[#3F342C] mb-4 font-light">
                    Betaling
                  </h3>
                  <p className="text-[#3F342C]/80 text-base leading-relaxed font-light">
                    Betaling kan contant of via Bancontact/Payconiq app. Graag
                    gepast betalen bij contante betaling.
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl md:text-3xl font-serif text-[#3F342C] mb-4 font-light">
                    Reserveren
                  </h3>
                  <p className="text-[#3F342C]/80 text-base leading-relaxed font-light">
                    Reserveren kan direct via de link op deze website of per
                    e-mail indien de beschikbare tijden niet passen.
                  </p>
                </div>

          </div>
        </div>
      </section>

      <CTA />
    </div>
  );
}
