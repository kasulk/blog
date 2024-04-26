import Link from "next/link";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { HeartFilledIcon } from "@radix-ui/react-icons";
import { buttonVariants } from "./ui/button";
import { cn } from "@/lib/utils";

type DonateButtonProps = {
  className?: string;
};

const tooltipContent = "Unterstützen";

export function DonateButton({ className }: DonateButtonProps) {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger>
          <Link href="/donate">
            <div
              className={cn(buttonVariants({ variant: "ghost" }), "w-10 px-0")}
            >
              <HeartFilledIcon className={className} />
              <span className="sr-only">{tooltipContent}</span>
            </div>
          </Link>
        </TooltipTrigger>
        <TooltipContent>
          <p className="my-0">{tooltipContent}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
