import { H4 } from "@/components/Headings";
import { AffiliateLink } from "@/components/Links/AffiliateLink";
import { camelCasify } from "@/lib/utils";

type Props = {
  name: string;
};

export function AffiliateLinkListItemHeader({ name }: Props) {
  return (
    <H4>
      <AffiliateLink partner={camelCasify(name)} />
    </H4>
  );
}
