import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact | KH Reflexologie – voetmassage en reflexologie in Brugge',
  description:
    'Neem contact op met KH Reflexologie voor een afspraak voor voetreflexologie of voetmassage in regio Brugge. Adres: Beverhoutsveldstraat 55C, 8730 Oedelem. Telefoon: +32 (0) 476 51 42 48',
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
