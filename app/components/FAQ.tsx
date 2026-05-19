import Image from 'next/image';

const faqItems = [
  {
    question: 'Kietelt voetreflexologie?',
    answer:
      'Dit is een van de meest gestelde vragen! Hoewel voeten gevoelig kunnen zijn, kietelt voetreflexologie niet. Ik gebruik een techniek met specifieke druk en stevige grepen, wat heel anders aanvoelt dan gekriebel. De meeste mensen ervaren het juist als een diepe, rustgevende massage.',
  },
  {
    question: 'Wat moet ik aan of uit doen?',
    answer:
      'Je mag gewoon je kleren aanhouden. Alleen je schoenen en sokken gaan uit. Het is handig om een broek te dragen die je gemakkelijk tot net onder je knie kunt optrekken.',
  },
  {
    question: 'Wat kan ik verwachten van een sessie?',
    answer:
      "We beginnen vaak met een kort gesprekje over hoe het met je gaat. Daarna mag je plaatsnemen in de relaxzetel. Terwijl ik je voeten masseer en specifieke punten bewerk, mag jij je ogen sluiten en even helemaal niets doen. Veel mensen voelen na afloop een heerlijke 'lichtheid' of hebben het gevoel op wolkjes te lopen.",
  },
  {
    question: 'Helpt het echt tegen stress of slaapproblemen?',
    answer:
      "Absoluut. Voetreflexologie brengt je zenuwstelsel in de 'ruststand', waardoor je cortisol (stresshormoon) daalt en je lichaam weer in balans komt. Dit helpt enorm om het piekeren te stoppen en je nachtrust te verbeteren.",
  },
  {
    question: 'Zijn er momenten dat een behandeling niet kan?',
    answer:
      'Bij hoge koorts, besmettelijke voetaandoeningen (zoals voetschimmel) of een trombosebeen is voetreflexologie niet toegestaan. Ben je zwanger? Laat het me dan zeker even weten; tijdens de eerste drie maanden ben ik extra voorzichtig.',
  },
  {
    question: 'Kan ik gemakkelijk parkeren?',
    answer: 'Ja hoor, dat kan voor de deur of op de middelste oprit.',
  },
  {
    question: 'Geef je ook lichaamsmassages?',
    answer:
      'Dat kan zeker, te beginnen met een kennismaking tijdens een sessie voetreflexologie.',
  },
];

interface FAQProps {
  backgroundImageUrl?: string;
}

export default function FAQ({ backgroundImageUrl }: FAQProps) {
  return (
    <section className="relative py-20 md:py-32 bg-[#E8DED4] overflow-hidden">
      {backgroundImageUrl && (
        <div className="absolute inset-0">
          <Image
            src={backgroundImageUrl}
            alt=""
            fill
            className="object-cover opacity-55"
            quality={80}
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-[#E8DED4]/50" />
        </div>
      )}

      <div className="relative z-10 container mx-auto px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-serif text-[#3F342C] mb-10 font-light text-center">
            Veelgestelde vragen
          </h2>
          <div className="space-y-6">
            {faqItems.map((item) => (
              <details
                key={item.question}
                className="group bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-sm"
              >
                <summary className="text-lg font-serif text-[#3F342C] font-light cursor-pointer list-none flex items-start justify-between gap-4">
                  <span>{item.question}</span>
                  <span className="text-[#B8A89A] text-xl leading-none group-open:rotate-45 transition-transform shrink-0">
                    +
                  </span>
                </summary>
                <p className="mt-4 text-[#3F342C]/80 text-base leading-relaxed font-light">
                  {item.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
