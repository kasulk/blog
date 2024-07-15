import type { AffiliateType } from "@/../types";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { H6 } from "@/components/Headings";
import { siteConfig, errors as allErrors } from "@/config";
import * as links from "@/config/links";
import { camelCasify, dashify } from "@/lib/utils";
import { Link } from "./Link";

type Props = {
  partner: string;
  tooltip?: string;
  children?: React.ReactNode;
};

const errors = allErrors.AffiliateLink;
const tooltips = siteConfig.defaultTooltips.affiliate;

export function AffiliateLink({ partner, tooltip, children }: Props) {
  const foundPartner = links.affiliate.find(
    ({ name }) => camelCasify(name) === partner,
  );

  if (!foundPartner) throw new Error(`'${partner}'\n${errors.partnerNotFound}`);
  const { name, url, type } = foundPartner;

  const defaultTooltip = tooltips[type as AffiliateType];
  if (!defaultTooltip) throw new Error(`${errors.wrongType}: '${type}'`);

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
        <Link href="/support#affiliate-links" target="_blank">
          <TooltipContent className="flex w-1/2 flex-col space-y-2 sm:w-2/3">
            <H6 className="font-bold">
              <span>{`${dashify(name)}-Affiliate-Link`}&nbsp;</span>
              <span className="text-accent">❤</span>
            </H6>
            <span className="leading-normal">{defaultTooltip}</span>
            <span className="self-end font-bold text-background hover:text-accent hover:underline">
              mehr Infos...
            </span>
          </TooltipContent>
        </Link>
      </Tooltip>
    </TooltipProvider>
  );
}
