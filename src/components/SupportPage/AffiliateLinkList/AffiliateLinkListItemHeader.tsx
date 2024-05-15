import { AffiliateLink } from "@/components/AffiliateLink";
import { camelCasify } from "@/lib/utils";

type Props = {
  name: string;
};

export function AffiliateLinkListItemHeader({ name }: Props) {
  return (
    <h4 className="text-lg">
      <AffiliateLink partner={camelCasify(name)} />
    </h4>
  );
}
