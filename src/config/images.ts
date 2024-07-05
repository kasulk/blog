const general = {
  "tropic workplace": {
    file: "rest-700156_1280.jpg",
    alt: "Rustikaler, tropischer Arbeitsplatz mit einem Laptop auf einem Holztisch, daneben eine Hängematte.",
    credits: {
      creator: "Gabor Fejes",
      source: "Pixabay",
    },
  },
  "codewars mastery": {
    file: "codewars.png",
    alt: "Codewars. Achieve mastery through challenge.",
    credits: {
      creator: "Codewars",
      source: "codewars.com",
    },
  },
} as const;

const series = {
  "projekt-tagebuch blog": general["tropic workplace"],
  "code challenges": general["codewars mastery"],
} as const;

const category = {
  code: {
    file: "",
    alt: "",
    credits: {
      creator: "",
      source: "",
    },
  },
  finanzen: {
    file: "",
    alt: "",
    credits: {
      creator: "",
      source: "",
    },
  },
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
