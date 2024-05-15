import type { AffiliateLinkType } from "@/config";
import {
  AffiliateLinkListItemDate,
  AffiliateLinkListItemDesc,
  AffiliateLinkListItemCategory,
  AffiliateLinkListItemHeader,
  AffiliateLinkListItemRewards,
  AffiliateLinkListItemTerms,
} from "./";

type Props = AffiliateLinkType;

export function AffiliateLinkListItem({
  name,
  category,
  subCategory,
  description,
  rewards,
  payoutOn,
  lastUpdated,
  blog,
}: Props) {
  return (
    <li className="space-y-2">
      <AffiliateLinkListItemHeader name={name} />
      <AffiliateLinkListItemCategory
        category={category}
        subCategory={subCategory}
      />
      <AffiliateLinkListItemDesc description={description} blog={blog} />
      <AffiliateLinkListItemRewards rewards={rewards} />
      <AffiliateLinkListItemTerms payoutOn={payoutOn} />
      <AffiliateLinkListItemDate lastUpdated={lastUpdated} />
    </li>
  );
}
