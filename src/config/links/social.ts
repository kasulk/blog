import { siteConfig } from "../site";

export const social = [
  {
    name: "GitHub",
    description: "",
    url: `https://github.com/${siteConfig.github.user}`,
  },
  {
    name: "LinkedIn",
    description: "",
    url: "https://linkedin.com/in/kasulk",
  },
  {
    name: "Codewars",
    description: "",
    url: "https://www.codewars.com/users/kasulk",
  },
] as const;

export type SocialLink = (typeof social)[number];
