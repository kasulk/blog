import { CamelCaseHighlighter } from "../CamelCaseHighlighter";
import { siteConfig } from "@/config/site";

const branding = `${siteConfig.name}${siteConfig.type.toUpperCase()}`;

export function Branding() {
  return (
    <div className="flex space-x-2">
      <span className="font-bold">
        <CamelCaseHighlighter text={branding} />
      </span>
    </div>
  );
}
