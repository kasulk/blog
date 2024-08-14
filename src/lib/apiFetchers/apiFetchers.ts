import type { CodeChallengeData } from "@/../types";
import type { CodewarsApiData, StrippedApiData } from "./types";
import { codeChallenge } from "@/config/links";
import { universalizeCodewarsApiData } from "./utils";

const codewarsApiURL = codeChallenge.codewars.api.url;

/**
 * Fetches API data for a given coding challenge based on the platform.
 * Currently supports fetching data from Codewars.
 *
 * @param {CodeChallengeData} codeChallengeData - The data specific to the coding challenge.
 * @param {string} codeChallengeData.id - The unique identifier of the coding challenge.
 * @param {string} codeChallengeData.platform - The platform name for the coding challenge (e.g., Codewars).
 * @returns {Promise<StrippedApiData>} - The stripped API data relevant to the coding challenge.
 */
export async function fetchCodeChallengeAPIs(
  codeChallengeData: CodeChallengeData,
): Promise<StrippedApiData | undefined> {
  const { id, platform } = codeChallengeData;
  let apiData: StrippedApiData | undefined;

  if (platform === "codewars") apiData = await fetchCodewarsChallengeAPI(id);
  return apiData;
}

/**
 * Fetches the Codewars API data for a given challenge ID.
 * Transforms the data to a universal format.
 *
 * @param {string} [id] - The unique identifier of the coding challenge on Codewars.
 * @returns {Promise<StrippedApiData | undefined>} - The stripped API data or undefined if the fetch fails.
 */
export async function fetchCodewarsChallengeAPI(
  id?: string,
): Promise<StrippedApiData | undefined> {
  const url = `${codewarsApiURL}/${id}`;
  const res = await fetch(url);
  const codewarsApiData = (await res.json()) as CodewarsApiData;

  const strippedApiData = universalizeCodewarsApiData(codewarsApiData);
  return strippedApiData;
}
