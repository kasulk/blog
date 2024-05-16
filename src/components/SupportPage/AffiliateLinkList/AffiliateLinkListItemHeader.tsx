import { H4 } from "@/components";
import { AffiliateLink } from "@/components/AffiliateLink";
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
