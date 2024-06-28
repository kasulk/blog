export const codewarsDomain = "codewars.com";
export const codewarsBaseURL = `https://www.${codewarsDomain}`;

export const codewars = {
  challenge: {
    description: "",
    url: `${codewarsBaseURL}/kata`, // append challenge-id
  },
  api: {
    description: "",
    url: `${codewarsBaseURL}/api/v1/code-challenges`, // append challenge-id
  },
} as const;
