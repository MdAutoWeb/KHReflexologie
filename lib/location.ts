export type PracticeLocation = {
  street: string;
  postalCode: string;
  city: string;
  full: string;
  mapsQuery: string;
};

export const DEFAULT_LOCATION: PracticeLocation = {
  street: "Beverhoutsveldstraat 55C",
  postalCode: "8730",
  city: "Oedelem",
  full: "Beverhoutsveldstraat 55C, 8730 Oedelem",
  mapsQuery: "Beverhoutsveldstraat+55C,+8730+Oedelem,+Belgium",
};

export const SUMMER_LOCATION: PracticeLocation = {
  street: "Grote Ede 35",
  postalCode: "8200",
  city: "Sint-Andries",
  full: "Grote Ede 35, 8200 Sint-Andries",
  mapsQuery: "Grote+Ede+35,+8200+Sint-Andries,+Belgium",
};

export function isSummerLocation(date = new Date()): boolean {
  const month = date.getMonth();
  return month === 6 || month === 7;
}

export function getCurrentLocation(date = new Date()): PracticeLocation {
  return isSummerLocation(date) ? SUMMER_LOCATION : DEFAULT_LOCATION;
}
