import { siteConfig } from "@/config/site";
import { HeartIcon } from "@radix-ui/react-icons";
import { KebabCaseHighlighter } from "../KebapCaseHighlighter";

const branding = `${siteConfig.name}${siteConfig.type.toUpperCase()}`;

export function Branding() {
  return (
    <div className="flex space-x-2">
      <HeartIcon className="h-6 w-6 text-danger" />
      <span className="font-bold">
        <KebabCaseHighlighter text={branding} />
      </span>
    </div>
  );
}
