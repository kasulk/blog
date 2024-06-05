import Link from "next/link";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Button } from "./ui/button";
import { HeartFilledIcon } from "@radix-ui/react-icons";

type SupportButtonProps = {
  className?: string;
};

const tooltipContent = "Unterstützen";

export function SupportButton({
  className = "h-6 w-6 sm:h-7 sm:w-7",
}: SupportButtonProps) {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger>
          <Button
            asChild
            className="w-10 px-0 text-accent hover:text-white"
            variant="ghost"
          >
            <Link href="/support">
              <HeartFilledIcon className={className} />
              <span className="sr-only">{tooltipContent}</span>
            </Link>
          </Button>
        </TooltipTrigger>
        <TooltipContent>
          <p className="my-0">{tooltipContent}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
