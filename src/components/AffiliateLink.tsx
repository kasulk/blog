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

export function AffiliateLink({
  href,
  tooltip = siteConfig.links.affiliate._defaultTooltip,
  children,
}: AffliateLinkProps) {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger>
          <a href={href} target="_blank">
            {children}
          </a>
          <span className="sr-only">{tooltip}</span>*
        </TooltipTrigger>
        <TooltipContent>
          <p className="my-0">{tooltip}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
