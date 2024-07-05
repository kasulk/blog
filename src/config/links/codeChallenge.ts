import { baseURLs } from "./baseUrls";

export const codeChallenge = {
  codewars: {
    challenge: {
      description: "",
      url: `${baseURLs.codewars}/kata`, // append challenge-id
    },
    api: {
      description: "",
      url: `${baseURLs.codewars}/api/v1/code-challenges`, // append challenge-id
    },
  },
} as const;

export type CodeChallenge = typeof codeChallenge;
export type Platform = keyof typeof codeChallenge;
