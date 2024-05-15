import { AffiliateLinkListItem } from "./";
import { links } from "@/config";
import { slugify } from "@/lib/utils";

export function AffiliateLinkList() {
  return (
    <ul className="list-none">
      {links.affiliate.map(
        (data) =>
          data.url && (
            <AffiliateLinkListItem
              key={`${slugify(data.name)}-affiliate-link`}
              {...data}
            />
          ),
      )}
    </ul>
  );
}
