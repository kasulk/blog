"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn, capitalize } from "@/lib/utils";
import Branding from "./Branding";

const pages = ["home", "blog", "portfolio", "about"];

export function MainNav() {
  const pathname = usePathname();

  return (
    <nav className="flex items-center space-x-4 lg:space-x-6">
      <Branding />
      {pages.map((page, i) => (
        <Link
          key={i}
          href={page === "home" ? "/" : `/${page}`}
          className={cn(
            "hidden text-sm font-medium transition-colors hover:text-primary sm:inline-block",
            pathname === `/${page === "home" ? "" : page}`
              ? "text-foreground"
              : "text-foreground/60",
          )}
        >
          {console.log("pathname:", pathname)}
          {capitalize(page)}
        </Link>
      ))}
    </nav>
  );
}
