import { siteConfig } from "../site";
import { baseURLs } from "./baseUrls";

export const social = [
  {
    name: "GitHub",
    description: "",
    url: `${baseURLs.github}/${siteConfig.github.user}`,
  },
  {
    name: "LinkedIn",
    description: "",
    url: `${baseURLs.linkedin}/in/kasulk`,
  },
  {
    name: "Codewars",
    description: "",
    url: `${baseURLs.codewars}/users/kasulk`,
  },
] as const;

export type SocialLink = (typeof social)[number];
