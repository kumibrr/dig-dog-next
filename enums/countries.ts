const countries: Array<Country> = [
  { code: "uk", emoji: "🇬🇧", language: "English", name: "United Kingdom" },
  { code: "es", emoji: "🇪🇸", language: "Español", name: "España" },
];

interface Country {
  code: string;
  name: string;
  emoji: string;
  language: string;
}

export default countries;
