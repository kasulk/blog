import { getAffiliatePartnersNames } from "@/lib/utils";
import * as links from "@/config/links";

export const errors = {
  AffiliateLink: {
    partnerNotFound:
      "Affiliate-Partner nicht gefunden! \n" +
      "Partner muss in camelCase übergeben werden. \n" +
      "Bitte 'partner' überprüfen! (AffiliateLink) \n\n" +
      "JSX => <AffiliateLink partner='tradeRepublic'>Trade Republic</AffiliateLink>\n" +
      "MDX => [Trade Republic]($tradeRepublic)\n\n" +
      "Mögliche Partner sind:\n" +
      "=======================\n" +
      getAffiliatePartnersNames(links.affiliate).join("\n"),
    wrongType: "Falscher Affiliate-'type'",
  },
};
