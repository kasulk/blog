import { Link } from "@/components/Links";
import { CamelCaseHighlighter } from "../CamelCaseHighlighter";
import { branding } from "@/config";

export function Branding() {
  return (
    <Link href="/" className="flex items-center space-x-2 text-foreground">
      <span className="font-bold sm:text-lg md:text-xl">
        <CamelCaseHighlighter text={branding} />
      </span>
    </Link>
  );
}
