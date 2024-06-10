export const vgWort = [
  {
    name: "Counting Mark",
    description: "",
    url: "https://vg07.met.vgwort.de/na",
  },
] as const;

export type VGWortLink = (typeof vgWort)[number];
