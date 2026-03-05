import Hero from './components/Hero';
import CTA from './components/CTA';

export const metadata = {
  title: 'Voetreflexologie & voetmassage in en rond Brugge | KH Reflexologie',
  description:
    'Voetreflexologie en zachte voetmassage in een warme praktijk in de regio Brugge. Een ruimte waar iedereen welkom is, waar niets moet en je jezelf mag zijn.',
};

export default function Home() {
  return (
    <div>
      {/* Full Width Hero Section with Testimonial */}
      <Hero 
        title="Een ruimte waar iedereen welkom is, waar niets moet en je jezelf mag zijn"
        imageUrl="/images/KImberley_reflexologie_24.jpg"
        showTestimonial={true}
      />

      {/* CTA Section */}
      <CTA />
    </div>
  );
}
