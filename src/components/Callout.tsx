import type { CalloutType } from "@/config";
import { calloutColorMap as colorMap } from "@/config";
import { cn, translateDefaultCalloutTitle } from "@/lib/utils";
import { ReactNode } from "react";

type Props = {
  type?: CalloutType;
  title?: string;
  className?: string;
  children?: ReactNode;
};

export function Callout({
  type = "default",
  title,
  className = "",
  children,
  ...props
}: Props) {
  //
  if (!(type in colorMap)) type = "default";
  const { titleColor, textColor, bgColor, borderColor } = colorMap[type];

  if (title) title = translateDefaultCalloutTitle(title).toUpperCase();

  return (
    <blockquote
      className={cn(
        `my-6 items-start rounded-md border border-l-4 p-4 ${className}`,
        // "prose",
        textColor,
        bgColor,
        borderColor,
      )}
      {...props}
    >
      {title && <div className={`font-semibold ${titleColor}`}>{title}</div>}
      <div>{children}</div>
    </blockquote>
  );
}
