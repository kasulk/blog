import Link from "next/link";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { siteConfig } from "@/config/site";

type AffliateLinkProps = {
  href: string;
  tooltip?: string;
  children?: React.ReactNode;
};

export default function AffiliateLink({
  href,
  tooltip = siteConfig.links.affiliate._defaultTooltip,
  children,
}: AffliateLinkProps) {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger>
          <Link href={href} target="_blank">
            {children}
          </Link>
          *
        </TooltipTrigger>
        <TooltipContent className="py-0">
          <p>{tooltip}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
