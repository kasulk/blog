import { cn } from "@/lib/utils";
import { ReactNode } from "react";

type Props = {
  type?: CalloutType;
  title?: string;
  className?: string;
  children?: ReactNode;
};

type ColorMap = typeof colorMap;
export type CalloutType = keyof ColorMap;

export const colorMap = {
  default: {
    titleColor: "text-muted-foreground",
    textColor: "text-muted-foreground",
    bgColor: "text-muted-foreground",
    borderColor: "text-muted-foreground",
  },
  danger: {
    titleColor: "text-danger-600",
    textColor: "text-danger-900",
    bgColor: "bg-danger-100",
    borderColor: "border-danger-600",
  },
  warning: {
    titleColor: "text-warning-600",
    textColor: "text-warning-900",
    bgColor: "bg-warning-100",
    borderColor: "border-warning-600",
  },
  success: {
    titleColor: "text-success-600",
    textColor: "text-success-900",
    bgColor: "bg-success-100",
    borderColor: "border-success-600",
  },
  tip: {
    titleColor: "text-success-600",
    textColor: "text-success-900",
    bgColor: "bg-success-100",
    borderColor: "border-success-600",
  },
  important: {
    titleColor: "text-fuchsia-600",
    textColor: "text-fuchsia-900",
    bgColor: "bg-fuchsia-100",
    borderColor: "border-fuchsia-600",
  },
  note: {
    titleColor: "text-blue-600",
    textColor: "text-blue-900",
    bgColor: "bg-blue-100",
    borderColor: "border-blue-600",
  },
} as const;

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

  return (
    <blockquote
      className={cn(
        `my-6 items-start rounded-md border border-l-4 p-4 text-foreground ${className}`,
        // "prose",
        textColor,
        bgColor,
        borderColor,
      )}
      {...props}
    >
      {title && (
        <div className={`font-semibold ${titleColor}`}>
          {title.toUpperCase()}
        </div>
      )}
      <div>{children}</div>
    </blockquote>
  );
}
