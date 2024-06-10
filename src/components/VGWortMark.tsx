import * as links from "@/config/links";

type Props = {
  code?: string;
};

// recommended values by VGWort
type ReferrerPolicy = "no-referrer-when-downgrade" | "unsafe-url";

const baseUrl = links.vgWort.find(({ name }) => name === "Counting Mark")?.url;
const referrerPolicy: ReferrerPolicy = "no-referrer-when-downgrade";

/* eslint-disable @next/next/no-img-element */
export function VGWortMark({ code }: Props) {
  if (!baseUrl) throw new Error("No 'baseUrl' found for VG Wort!");
  if (!code) return;

  return (
    <img
      src={`${baseUrl}/${code}`}
      width="1"
      height="1"
      alt=""
      referrerPolicy={referrerPolicy}
      className="hidden"
    />
  );
}
/* eslint-enable @next/next/no-img-element */
