import Hero from "./components/Hero";
import CTA from "./components/CTA";
import QuoteBanner from "./components/QuoteBanner";

export const metadata = {
  title: "Voetreflexologie & voetmassage in en rond Brugge | KH Reflexologie",
  description:
    "Landen bij jezelf, te beginnen bij je voeten. Voetreflexologie in een warme praktijk in de regio Brugge – een plek waar je mag ontsnappen aan het moeten.",
};

export default function Home() {
  return (
    <div>
      <Hero
        title="Even ontsnappen aan het 'moeten'?"
        imageUrl="/images/KImberley_reflexologie_24.jpg"
        showIntro={true}
        introVariant="short"
        showIntroCta={true}
        showTestimonial={true}
        fadeBottom={true}
      />

      <QuoteBanner
        soft
        quote="Wist je dat je hele lichaam wordt weerspiegeld in je voeten?"
      />

      <CTA />
    </div>
  );
}
