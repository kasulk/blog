import Link from "next/link";
import { buttonVariants } from "../ui/button";
import { GitHubLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons";
import { siteConfig } from "@/config/site";
import { capitalize, cn } from "@/lib/utils";

export function SocialLinks() {
  const socialLinks = Object.values(siteConfig.links.social);
  const socialNames = Object.keys(siteConfig.links.social);

  const iconClassNames = "text-foreground h-6 w-6 hover:text-foreground/80";

  const socialIcons = [
    <GitHubLogoIcon key="github" className={iconClassNames} />,
    <LinkedInLogoIcon key="linkedin" className={iconClassNames} />,
    // <CodewarsLogoIcon key="codewars" className={iconClassNames} />,
  ];

  return (
    <>
      {socialLinks.map((link, i) => (
        <Link
          key={`social-link-${i}`}
          href={link}
          target="_blank"
          rel="noreferrer"
        >
          <div
            className={cn(buttonVariants({ variant: "ghost" }), "w-10 px-0")}
          >
            {socialIcons[i]}
            <span className="sr-only">{capitalize(socialNames[i])}</span>
          </div>
        </Link>
      ))}
    </>
  );
}
