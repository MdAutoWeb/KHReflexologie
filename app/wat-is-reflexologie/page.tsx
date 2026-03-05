import CTA from "../components/CTA";

export default function WatIsReflexologie() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-amber-50 to-amber-100">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-serif text-amber-900 mb-8">Wat is Reflexologie</h1>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-serif text-amber-900 mb-4">Wat is voetreflexologie?</h2>
                <p className="text-gray-700 mb-4">
                  Voetreflexologie is een eeuwenoude behandeling waarbij door middel van druktechnieken op reflexzones de zelfgenezende kracht van het lichaam wordt gestimuleerd.
                </p>
                <p className="text-gray-700 mb-4">
                  Reflexzones zijn gebieden op de voeten die verbonden zijn met organen, botten, spieren en klieren. Het hele lichaam wordt weerspiegeld in de voeten.
                </p>
                <p className="text-gray-700">
                  Door deze zones te behandelen, wordt het lichaam gestimuleerd om zijn gewenste evenwicht (homeostase) te herstellen.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-serif text-amber-900 mb-4">Wat doet voetreflexologie?</h2>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-amber-900 mt-1">•</span>
                    <span>Werkt diep ontspannend, zowel fysiek als psychisch</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-900 mt-1">•</span>
                    <span>Versterkt het immuunsysteem</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-900 mt-1">•</span>
                    <span>Activeert het zelfregulerend systeem en lymfesysteem</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-900 mt-1">•</span>
                    <span>Bevordert de spijsvertering en bloedsomloop</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-900 mt-1">•</span>
                    <span>Harmoniseert het hormonaal systeem</span>
                  </li>
                </ul>
                <p className="mt-6 text-gray-700">
                  Wil je ook deze voordelen ontdekken? Boek dan hier je afspraak.
                </p>
              </div>
            </div>
            <div className="hidden md:block">
              <div className="w-full h-full bg-amber-200 rounded-lg min-h-[600px]"></div>
            </div>
          </div>
        </div>
      </section>

      <CTA />
    </div>
  );
}
