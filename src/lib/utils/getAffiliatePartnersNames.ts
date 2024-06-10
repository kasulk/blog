import type { AffiliateLink } from "@/config/links";
import { camelCasify } from "./camelCasify";

export function getAffiliatePartnersNames(
  partners: readonly AffiliateLink[],
): string[] {
  return partners.filter(({ url }) => url).map(({ name }) => camelCasify(name));
}
