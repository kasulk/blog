import { buttonVariants } from "../ui/button";
import { GitHubLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons";
import { siteConfig } from "@/config/site";
import { capitalize, cn } from "@/lib/utils";
import { DonateButton } from "../DonateButton";

const socialIconClassNames = "h-6 w-6 text-foreground hover:text-foreground/80";
const donateButtonClassNames = "h-7 w-7 text-danger hover:text-danger/80";
const socialIcons = [
  <GitHubLogoIcon key="github" className={socialIconClassNames} />,
  <LinkedInLogoIcon key="linkedin" className={socialIconClassNames} />,
  // <CodewarsLogoIcon key="codewars" className={socialIconClassNames} />,
];

export function SocialLinks() {
  const socialNames = Object.keys(siteConfig.links.social);
  // don't show link if there is no icon for it
  const socialLinks = Object.values(siteConfig.links.social).filter(
    (_, i) => i < socialIcons.length,
  );

  return (
    <>
      {socialLinks.map((link, i) => (
        <a
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
        </a>
      ))}
      <DonateButton className={donateButtonClassNames} />
    </>
  );
}
