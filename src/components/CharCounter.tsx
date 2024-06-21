import { siteConfig } from "@/config";

type Props = {
  mdxLength: number;
};

const { vgWort } = siteConfig;

function getCharCounterColor(numChars: number): string {
  if (numChars >= vgWort.charThreshold * 1.111) return "bg-success-600/50";
  if (numChars >= vgWort.charThreshold) return "bg-warning-600/50";
  return "bg-danger-600/50";
}

export function CharCounter({ mdxLength }: Props) {
  const bgColor = getCharCounterColor(mdxLength);

  return (
    <div
      title="Anzahl Zeichen im rohen MDX-Content (ohne Frontmatter)"
      className={`fixed bottom-8 right-8 flex h-16 w-16 items-center justify-center rounded-full opacity-60 shadow-md hover:opacity-100 ${bgColor}`}
    >
      {mdxLength.toLocaleString("de-DE")}
    </div>
  );
}
