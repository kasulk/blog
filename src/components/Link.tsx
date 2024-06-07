import NextLink from "next/link";

type Props = {
  href?: string;
  className?: string;
  children?: React.ReactNode;
};

export function Link({ href = "/not-found", className, children }: Props) {
  return (
    <NextLink
      href={href}
      className={`text-accent no-underline hover:text-danger-600 ${className}`}
    >
      {children}
    </NextLink>
  );
}
