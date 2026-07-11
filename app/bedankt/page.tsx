import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Bedankt voor je afspraak | KH Reflexologie",
  description: "Je afspraak is goed ontvangen. Tot snel in de praktijk!",
};

export default function Bedankt() {
  return (
    <section className="min-h-[70vh] flex items-center justify-center bg-[#E8DED4] py-24 px-6">
      <div className="max-w-2xl mx-auto text-center">
        <h1 className="text-3xl md:text-4xl font-serif text-[#3F342C] mb-6 font-light">
          Wat fijn dat je voor jezelf kiest!
        </h1>
        <div className="space-y-5 text-[#3F342C]/80 text-base md:text-lg leading-relaxed font-light">
          <p>
            Je afspraak is goed ontvangen. Ik kijk er enorm naar uit om je te mogen ontvangen in mijn praktijk en je
            een moment van rust te bieden.
          </p>
          <p>
            Je ontving zojuist een bevestiging in je mailbox (check ook even je spam-folder). Heb je vooraf nog vragen?
            Stel ze gerust.
          </p>
          <p>Tot snel, de thee staat klaar!</p>
          <p className="text-[#3F342C]">Warme groet, Kimberley</p>
        </div>
        <p className="mt-10 text-[#3F342C]/70 italic font-light text-base md:text-lg">
          Landen bij jezelf, te beginnen bij je voeten.
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 mt-10 px-8 py-3 bg-[#B8A89A] text-white font-light rounded-xl hover:bg-[#A39284] transition-all duration-300"
        >
          Terug naar home
        </Link>
      </div>
    </section>
  );
}
