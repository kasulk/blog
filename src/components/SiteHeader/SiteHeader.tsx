import Link from "next/link";
import { Branding, MainNav, MobileNav, ThemeSwitch } from ".";
import { SocialLinks } from "../SocialLinks";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-10 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-screen-2xl items-center justify-between">
        <Branding />
        <MainNav />
        <div className="flex items-center justify-end">
          <SocialLinks className="hidden sm:inline-block" />
          <ThemeSwitch />
          <MobileNav />
        </div>
      </div>
    </header>
  );
}
