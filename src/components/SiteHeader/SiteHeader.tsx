import { MainNav, MobileNav, ThemeSwitch } from ".";
import { SocialLinks } from "../SocialLinks";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-10 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-screen-2xl items-center">
        <MainNav />
        <div className="flex flex-1 items-center justify-end">
          <nav className="flex items-center">
            <SocialLinks />
            <ThemeSwitch />
            <MobileNav />
          </nav>
        </div>
      </div>
    </header>
  );
}
