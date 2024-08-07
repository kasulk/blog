import type { CodewarsApiData, StrippedApiData } from "../types";

/**
 * Universalizes the data from the Codewars API by stripping it down to a standardized format.
 *
 * @param {CodewarsApiData} apiData - The data received from the Codewars API.
 * @returns {StrippedApiData} - The stripped down and standardized data.
 */
export function universalizeCodewarsApiData(
  apiData: CodewarsApiData,
): StrippedApiData {
  const { id, name, slug, rank, url, description } = apiData;

  return {
    id,
    platform: "Codewars",
    name: name.trim(),
    slug,
    level: rank?.name,
    url,
    description,
  };
}
