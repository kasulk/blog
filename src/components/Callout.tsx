import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface CalloutProps {
  type?: "default" | "warning" | "danger" | "success";
  className?: string;
  children?: ReactNode;
}

export function Callout({
  type = "default",
  className,
  children,
  ...props
}: CalloutProps) {
  return (
    <div
      className={cn(
        `boder-l-4 my-6 w-full items-start rounded-md border p-4 dark:max-w-none ${className}`,
        {
          "border-danger-600 bg-danger-100 dark:prose": type === "danger",
          "border-warning-600 bg-warning-100 dark:prose": type === "warning",
          "border-success-600 bg-success-100 dark:prose": type === "success",
        },
      )}
      {...props}
    >
      <div>{children}</div>
    </div>
  );
}
