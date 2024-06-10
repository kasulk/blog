import { GitHubLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons";
import { SupportButton } from "./SupportButton";
import { Button } from "./ui/button";
import * as links from "@/config/links";
import { slugify } from "@/lib/utils";
import { LinkExternal } from "./Links/LinkExternal";

const socialIconSize = "h-6 w-6";
const supportIconSize = "h-6 w-6 sm:h-7 sm:w-7";

const socialIcons = [
  <GitHubLogoIcon key="github" className={socialIconSize} />,
  <LinkedInLogoIcon key="linkedin" className={socialIconSize} />,
  // <CodewarsLogoIcon key="codewars" className={socialIconSize} />,
];

type SocialLinksProps = {
  className?: string;
};

export function SocialLinks({ className }: SocialLinksProps) {
  // hide link if there is no icon for it
  const linksWithIcon = links.social.filter((_, i) => i < socialIcons.length);

  return (
    <>
      {linksWithIcon.map(({ name, url }, i) => (
        <LinkExternal
          key={`${slugify(name)}-link`}
          href={url}
          className={className}
        >
          <Button className="w-10 px-0 text-foreground" variant="ghost">
            {socialIcons[i]}
            <span className="sr-only">{`Link to ${name}`}</span>
          </Button>
        </LinkExternal>
      ))}
      <SupportButton className={supportIconSize} />
    </>
  );
}
