const baseURL = "https://www.codewars.com";

export const codewars = {
  challenge: {
    description: "",
    url: `${baseURL}/kata`, // append challenge-id
  },
  api: {
    description: "",
    url: `${baseURL}/api/v1/code-challenges`, // append challenge-id
  },
} as const;
