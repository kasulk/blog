import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/config";

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
  const router = useRouter();
  const pathname = usePathname();

  const navPages = siteConfig.pages;

  // if the page name is 'home' reduce href to '/'
  const href = page === "home" ? "/" : `/${page}`;

  // highlight NavLink if its name is included in the current path
  // so it's highlighted for every subroute
  const isActive =
    navPages.some(
      (navPage) => page === navPage && pathname.includes(`/${navPage}/`),
    ) || pathname === href;

  return (
    <Link
      href={href}
      className={cn(
        `${className} whitespace-nowrap font-medium transition-colors hover:text-primary`,
        pathname === `/${page === "home" ? "" : page}`
          ? "text-foreground"
          : "text-foreground/60",
        isActive ? "text-foreground" : "",
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
