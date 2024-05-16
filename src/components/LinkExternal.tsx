type Props = {
  href: string;
  target?: "_blank";
  rel?:
    | "noopener"
    | "noreferrer"
    | "noopener noreferrer"
    | "noreferrer noopener";
  className?: string;
  children?: React.ReactNode;
};

export function LinkExternal({
  href,
  target = "_blank",
  rel = "noopener noreferrer",
  className,
  children,
}: Props) {
  return (
    <a
      href={href}
      target={target}
      rel={rel}
      className={`text-accent no-underline hover:text-danger-600 ${className}`}
    >
      {children}
    </a>
  );
}
