import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { siteConfig } from "@/config/site";

type AffliateLinkProps = {
  type?: "order" | "register";
  href?: string;
  partner?: string;
  tooltip?: string;
  children?: React.ReactNode;
};

type Affiliates = { [key: string]: string };

const { links } = siteConfig;
const errors = siteConfig.errors.AffiliateLink;
const tooltips = siteConfig.defaultTooltips.affiliate;

export function AffiliateLink({
  href,
  partner,
  type,
  tooltip,
  children,
}: AffliateLinkProps) {
  // get tooltip content
  if (!type && !tooltip) throw new Error(errors.missingTypeOrTooltip);
  if (!tooltip) {
    if (type === "order") tooltip = tooltips.order;
    else if (type === "register") tooltip = tooltips.register;
    else throw new Error(`${errors.wrongType}: '${type}'`);
  }

  // get link/href
  if (!href && !partner) throw new Error(errors.missingHrefOrPartner);
  const affiliates: Affiliates = links.affiliate;
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
