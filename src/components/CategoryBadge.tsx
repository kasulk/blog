type CategoryBadgeProps = {
  className?: string;
  children: React.ReactNode;
};

export function CategoryBadge({ className, children }: CategoryBadgeProps) {
  return (
    <span
      className={`rounded-sm bg-accent px-3 py-1 text-sm font-semibold uppercase text-white/90 transition-colors duration-300 hover:bg-danger/80 hover:text-white/80 ${className}`}
    >
      {children}
    </span>
  );
}
