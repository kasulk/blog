type CategoryBadgeProps = {
  className?: string;
  children: React.ReactNode;
};

export default function CategoryBadge({
  className,
  children,
}: CategoryBadgeProps) {
  return (
    <span
      className={`${className} rounded-sm bg-accent px-3 py-1 text-white/90 transition-colors duration-300 hover:bg-danger/80 hover:text-white/80`}
    >
      {children}
    </span>
  );
}
