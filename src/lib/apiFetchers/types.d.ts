export type ApiData =
  | {
      [key: string]: unknown;
    }
  | undefined;

export type CodewarsApiData = {
  id: string;
  name: string;
  rank: {
    name: string;
    [key: string]: unknown;
  };
  url: string;
  description: string;
  [key: string]: unknown;
};

export type StrippedApiData = {
  id: string;
  platform: "Codewars";
  name: string;
  level: string;
  url: string;
  description: string;
};
