import Link from "next/link";
import { CamelCaseHighlighter } from "../CamelCaseHighlighter";
import { siteConfig } from "@/config";

const branding = `${siteConfig.name}${siteConfig.type.toUpperCase()}`;

export function Branding() {
  return (
    <Link href="/" className="flex items-center space-x-2">
      <span className="font-bold sm:text-lg md:text-xl">
        <CamelCaseHighlighter text={branding} />
      </span>
    </Link>
  );
}
