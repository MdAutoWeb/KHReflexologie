import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact | KH Reflexologie – voetmassage en reflexologie in Brugge',
  description:
    'Heb je een vraag of wil je een afspraak maken? Neem contact op met KH Reflexologie in Oedelem (regio Brugge). Telefoon: +32 (0) 476 51 42 48',
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
