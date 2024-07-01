import type { ApiData } from "@/../types";
import { codeChallenge } from "@/config/links";

const { codewars } = codeChallenge;

export async function fetchCodewarsChallengeAPI(
  id?: string,
): Promise<ApiData | undefined> {
  const url = `${codewars.api.url}/${id}`;
  const res = await fetch(url);
  const codewarsApiData = await res.json();

  return codewarsApiData;
}
