import { siteConfig } from "@/config/site";
import { SocialLinks } from "../SiteHeader/SocialLinks";

export function SiteFooter() {
  return (
    <footer>
      <div className="mb-6 mt-14 flex flex-col items-center">
        <div className="mb-3 flex items-center space-x-4">
          <SocialLinks />
        </div>
        <div className="mb-2 flex space-x-2 text-sm text-muted-foreground">
          Made with 😋 in Berlin
        </div>
        <div className="mb-2 flex space-x-2 text-sm text-muted-foreground">
          {siteConfig.name} | © {new Date().getFullYear()}
        </div>
      </div>
    </footer>
  );
}
