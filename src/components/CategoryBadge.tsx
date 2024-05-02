type CategoryBadgeProps = {
  children: React.ReactNode;
};

export default function CategoryBadge({ children }: CategoryBadgeProps) {
  return (
    <span className="rounded-sm bg-accent px-3 py-1 text-white/90 transition-colors duration-300 hover:bg-danger/80 hover:text-white/80">
      {children}
    </span>
  );
}
