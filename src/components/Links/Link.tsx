import NextLink from "next/link";
import { HTMLAttributeAnchorTarget } from "react";

type Props = {
  href?: string;
  title?: string;
  target?: HTMLAttributeAnchorTarget;
  className?: string;
  children?: React.ReactNode;
};

export function Link({
  href = "/not-found",
  title = "",
  target = "_self",
  className,
  children,
}: Props) {
  return (
    <NextLink
      href={href}
      title={title}
      target={target}
      className={`text-accent no-underline hover:text-danger-600 ${className}`}
    >
      {children}
    </NextLink>
  );
}
