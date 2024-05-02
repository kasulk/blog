"use client";

import Link from "next/link";
import { Branding, NavLink } from ".";
import { capitalize, spacifyCamelCase } from "@/lib/utils";
import { siteConfig } from "@/config/site";

export function MainNav() {
  return (
    <nav className="flex items-center space-x-4 lg:space-x-6">
      <Link href="/" className="mr-6 flex items-center space-x-2">
        <Branding />
      </Link>
      {siteConfig.pages.map((page, i) => (
        <NavLink
          key={`main-nav-link-${i}`}
          page={page}
          className="hidden sm:inline-block"
        >
          {spacifyCamelCase(capitalize(page))}
        </NavLink>
      ))}
    </nav>
  );
}
