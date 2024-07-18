type Props = {
  href?: string;
  rel?: string;
  title?: string;
  className?: string;
  children?: React.ReactNode;
};

export function ExternalLink({
  href,
  rel = "noopener noreferrer",
  title,
  className = "",
  children,
}: Props) {
  return (
    <a
      href={href}
      target="_blank"
      rel={rel}
      title={title}
      className={`text-accent no-underline hover:text-danger-600 ${className}`}
    >
      {children}
    </a>
  );
}
