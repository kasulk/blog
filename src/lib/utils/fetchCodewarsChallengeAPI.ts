import { codewars } from "@/config/links";

type ApiData = { [key: string]: unknown };

export async function fetchCodewarsChallengeAPI(
  id?: string,
): Promise<ApiData | undefined> {
  const url = `${codewars.api.url}/${id}`;
  const res = await fetch(url);
  const codewarsApiData = await res.json();

  return codewarsApiData;
}
