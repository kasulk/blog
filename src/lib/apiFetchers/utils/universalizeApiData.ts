import type { CodewarsApiData, StrippedApiData } from "../types";

export function universalizeCodewarsApiData(
  apiData: CodewarsApiData,
): StrippedApiData {
  const { id, name, rank, url, description } = apiData;

  return {
    id,
    platform: "Codewars",
    name,
    level: rank?.name,
    url,
    description,
  };
}
