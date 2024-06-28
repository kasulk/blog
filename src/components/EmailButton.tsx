import type { EmailOptions } from "@/config";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Button } from "./ui/button";
import { EnvelopeClosedIcon } from "@radix-ui/react-icons";
import { siteConfig } from "@/config";

type Props = {
  className?: string;
  subject?: string;
  email?: EmailOptions;
};

const tooltipContent = "Schreib mir!";

export function EmailButton({
  className = "h-6 w-6 sm:h-7 sm:w-7",
  subject = "",
  email = "questions",
}: Props) {
  subject = subject && `?subject=${subject}`;
  const emailAddress = siteConfig.email[email];
  const href = `mailto:${emailAddress}${subject}`;

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger>
          <Button
            asChild
            className="w-10 px-0 text-white hover:text-white"
            variant="ghost"
          >
            <a href={href}>
              <EnvelopeClosedIcon className={className} />
              <span className="sr-only">{tooltipContent}</span>
            </a>
          </Button>
        </TooltipTrigger>
        <TooltipContent>
          <p className="my-0">{tooltipContent}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
