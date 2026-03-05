import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact | Kimberley - Reflexologie & More',
  description: 'Neem contact op voor een afspraak. Adres: Beverhoutsveldstraat 55C, 8730 Oedelem. Telefoon: +32 (0) 476 51 42 48',
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
