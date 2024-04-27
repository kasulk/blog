import { buttonVariants } from "./ui/button";
import { GitHubLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons";
import { siteConfig } from "@/config/site";
import { capitalize, cn } from "@/lib/utils";
import { DonateButton } from "./DonateButton";

const socialIconSize = "h-6 w-6";
const supportIconSize = "h-7 w-7";
const socialIcons = [
  <GitHubLogoIcon key="github" className={socialIconSize} />,
  <LinkedInLogoIcon key="linkedin" className={socialIconSize} />,
  // <CodewarsLogoIcon key="codewars" className={socialIconSize} />,
];

export function SocialLinks() {
  const socialNames = Object.keys(siteConfig.links.social);
  // don't show link if there is no icon for it
  const socialLinks = Object.values(siteConfig.links.social).filter(
    (_, i) => i < socialIcons.length,
  );

  return (
    <>
      {socialLinks.map((href, i) => (
        <a
          key={`social-link-${i}`}
          href={href}
          target="_blank"
          rel="noreferrer"
        >
          <div
            className={cn(
              buttonVariants({ variant: "ghost" }),
              "w-10 px-0 text-foreground",
            )}
          >
            {socialIcons[i]}
            <span className="sr-only">{capitalize(socialNames[i])}</span>
          </div>
        </a>
      ))}
      <DonateButton className={supportIconSize} />
    </>
  );
}
