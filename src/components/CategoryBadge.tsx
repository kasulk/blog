type CategoryBadgeProps = {
  className?: string;
  children: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
};

export function CategoryBadge({
  className,
  children,
  onClick,
}: CategoryBadgeProps) {
  return (
    <span
      className={`flex items-center rounded-sm bg-accent px-3 py-1 text-sm font-semibold uppercase text-white/90 transition-colors duration-300 hover:bg-danger/80 hover:text-white/80 ${className}`}
      onClick={onClick}
    >
      {children}
    </span>
  );
}
