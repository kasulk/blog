import type { AffiliateType } from "@/../types";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { links, siteConfig } from "@/config";
import { camelCasify, dashify } from "@/lib/utils";

type AffliateLinkProps = {
  partner: string;
  tooltip?: string;
  children?: React.ReactNode;
};

const errors = siteConfig.errors.AffiliateLink;
const tooltips = siteConfig.defaultTooltips.affiliate;

export function AffiliateLink({
  partner,
  tooltip,
  children,
}: AffliateLinkProps) {
  //
  const foundPartner = links.affiliate.find(
    ({ name }) => camelCasify(name) === partner,
  );

  if (!foundPartner) throw new Error(`'${partner}'\n${errors.notFoundPartner}`);
  const { name, url, type } = foundPartner;

  const defaultTooltip = tooltips[type as AffiliateType];
  if (!defaultTooltip) throw new Error(`${errors.wrongType}: '${type}'`);

  tooltip = tooltip || `${dashify(name)}-${defaultTooltip}`;

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger>
          <a
            href={url}
            target="_blank"
            className="font-bold text-warning-600 hover:text-warning-700 dark:text-warning/90 dark:hover:text-warning/70"
          >
            {children ? children : name}
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
