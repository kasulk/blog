import NextLink from "next/link";

type Props = {
  href?: string;
  title?: string;
  className?: string;
  children?: React.ReactNode;
};

export function Link({
  href = "/not-found",
  title = "",
  className,
  children,
}: Props) {
  return (
    <NextLink
      href={href}
      title={title}
      className={`text-accent no-underline hover:text-danger-600 ${className}`}
    >
      {children}
    </NextLink>
  );
}
