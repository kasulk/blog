import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";

type NavLinkProps = {
  page: string;
  className?: string;
  children: React.ReactNode;
  onOpenChange?: (open: boolean) => void;
};

export function NavLink({
  page,
  className,
  children,
  onOpenChange,
}: NavLinkProps) {
  const pathname = usePathname();
  const router = useRouter();
  const href = page === "home" ? "/" : `/${page}`;

  return (
    <Link
      href={href}
      className={cn(
        `${className} text-sm font-medium transition-colors hover:text-primary`,
        pathname === `/${page === "home" ? "" : page}`
          ? "text-foreground"
          : "text-foreground/60",
      )}
      onClick={() => {
        router.push(href);
        onOpenChange?.(false);
      }}
    >
      {children}
    </Link>
  );
}
