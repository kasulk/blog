import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { siteConfig } from "@/config/site";

type AffliateLinkProps = {
  href?: string;
  partner?: string;
  tooltip?: string;
  children?: React.ReactNode;
};

type Affiliates = { [key: string]: string };

export function AffiliateLink({
  partner,
  href,
  tooltip = siteConfig.links.affiliate._defaultTooltip,
  children,
}: AffliateLinkProps) {
  //
  const affiliates: Affiliates = siteConfig.links.affiliate;
  if (partner) href = affiliates[partner];

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger>
          <a
            href={href}
            target="_blank"
            className="font-bold text-warning-600 hover:text-warning-700 dark:text-warning/90 dark:hover:text-warning/70"
          >
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
