const general = {
  "codewars mastery": {
    file: "codewars.png",
    alt: "Codewars. Achieve mastery through challenge.",
    credits: {
      creator: "Codewars",
      source: "codewars.com",
    },
  },
  "defocussed codiverse": {
    file: "coding-1841550_1280.jpg",
    alt: "Codezeilen in der Mitte mit verschwommenem blau-violettem Hintergrund.",
    credits: {
      creator: "Pexels",
      source: "Pixabay",
    },
  },
  "sunny moneygrow": {
    file: "money-2724241_1280.jpg",
    alt: "Vier Münzstapel mit wachsenden Pflanzen und ein Glas voller Münzen mit Pflanze.",
    credits: {
      creator: "Nattanan Kanchanaprat",
      source: "Pixabay",
    },
  },
  "tropic workplace": {
    file: "rest-700156_1280.jpg",
    alt: "Rustikaler, tropischer Arbeitsplatz mit einem Laptop auf einem Holztisch, daneben eine Hängematte.",
    credits: {
      creator: "Gabor Fejes",
      source: "Pixabay",
    },
  },
} as const;

const series = {
  "projekt-tagebuch blog": general["tropic workplace"],
  "code challenges": general["codewars mastery"],
} as const;

const category = {
  code: general["defocussed codiverse"],
  finanzen: general["sunny moneygrow"],
  verschiedenes: general["tropic workplace"],
} as const;

const _default = general["tropic workplace"];

export const globalImages = {
  _default,
  general,
  series,
  category,
} as const;

export type GeneralImageData = typeof general;
export type SeriesImageData = typeof series;
export type CategoryImageData = typeof category;

export type GeneralType = keyof typeof general;
export type SeriesType = keyof typeof series;
export type CategoryType = keyof typeof category;

export type GlobalImages = typeof globalImages;
