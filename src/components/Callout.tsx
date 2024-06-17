import { cn } from "@/lib/utils";
import { ReactNode } from "react";

export type CalloutType = "default" | "warning" | "danger" | "success";

type Props = {
  type?: CalloutType;
  title?: string;
  className?: string;
  children?: ReactNode;
};

export function Callout({
  type = "default",
  title,
  className,
  children,
  ...props
}: Props) {
  const bgColor = `bg-${type}-100`;
  const borderColor = `border-${type}-600`;
  const titleColor = type === "default" ? "" : `text-${type}-600`;

  return (
    <blockquote
      className={cn(
        `my-6 items-start rounded-md border border-l-4 p-4 ${className}`,
        `prose ${borderColor} ${bgColor}`,
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
