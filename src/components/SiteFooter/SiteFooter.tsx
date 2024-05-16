import { SocialLinks } from "@/components";
import { siteConfig } from "@/config";

export function SiteFooter() {
  return (
    <footer className="mt-auto">
      <div className="mb-4 mt-14 flex flex-col items-center">
        <div className="mb-3 flex items-center space-x-4">
          <SocialLinks />
        </div>
        <div className="mb-2 text-lg text-muted-foreground">
          Made with 😋 in Berlin
        </div>
        <div className="mb-2 text-sm text-muted-foreground">
          {siteConfig.name} © {new Date().getFullYear()}
        </div>
      </div>
    </footer>
  );
}
