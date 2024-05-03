import { GitHubLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons";
import { SupportButton } from "./SupportButton";
import { Button } from "./ui/button";
import { siteConfig } from "@/config/site";
import { capitalize } from "@/lib/utils";

const socialIconSize = "h-6 w-6";
const supportIconSize = "h-6 w-6 sm:h-7 w-7";
const socialIcons = [
  <GitHubLogoIcon key="github" className={socialIconSize} />,
  <LinkedInLogoIcon key="linkedin" className={socialIconSize} />,
  // <CodewarsLogoIcon key="codewars" className={socialIconSize} />,
];

type SocialLinksProps = {
  className?: string;
};

export function SocialLinks({ className }: SocialLinksProps) {
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
          className={className}
        >
          <Button className="w-10 px-0 text-foreground" variant="ghost">
            {socialIcons[i]}
            <span className="sr-only">{capitalize(socialNames[i])}</span>
          </Button>
        </a>
      ))}
      <SupportButton className={supportIconSize} />
    </>
  );
}
