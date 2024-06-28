import { siteConfig } from "@/config";
import { getCharCounterColor } from "@/lib/utils";

type Props = {
  mdxLength: number;
  className?: string;
};

const { charCountThreshold } = siteConfig.vgWort;

export function CharCounter({ mdxLength, className = "" }: Props) {
  const bgColor = getCharCounterColor(mdxLength, charCountThreshold);
  className = `${bgColor} ${className}` || "";

  return (
    <div
      title="Anzahl Zeichen im rohen MDX-Content (ohne Frontmatter)"
      className={`fixed bottom-0 left-0 flex h-16 w-16 items-center justify-center rounded-full text-foreground opacity-60 shadow-md hover:opacity-100 ${className}`}
    >
      {mdxLength.toLocaleString("de-DE")}
    </div>
  );
}
