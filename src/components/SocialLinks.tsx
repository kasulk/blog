import { GitHubLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons";
import { Codewars as CodewarsLogoIcon } from "./Icons";
import { SupportButton } from "@/components/SupportButton"; //? barrel imports not working here (server/client-conflict?)
import { ExternalLink } from "@/components/Links";
import { Button } from "./ui/button";
import * as links from "@/config/links";
import { slugify } from "@/lib/utils";
import { EmailButton } from "./EmailButton";

const socialIconSize = "h-6 w-6";
const supportIconSize = "h-6 w-6 sm:h-7 sm:w-7";

const socialIcons = [
  // same order as in social links obj
  <GitHubLogoIcon key="github" className={socialIconSize} />,
  <LinkedInLogoIcon key="linkedin" className={socialIconSize} />,
  <CodewarsLogoIcon key="codewars" className={socialIconSize} />,
];

type Props = {
  className?: string;
  showEmail?: boolean;
  showCodewars?: boolean;
  emailSubject?: string;
};

export function SocialLinks({
  className,
  showEmail = true,
  showCodewars = true,
  emailSubject,
}: Props) {
  // hide link if there is no icon for it
  const linksWithIcon = links.social.filter((_, i) => i < socialIcons.length);
  const linksToShow = !showCodewars
    ? linksWithIcon.filter(({ name }) => name !== "Codewars")
    : linksWithIcon;

  return (
    <div className={className}>
      {showEmail && (
        <EmailButton subject={emailSubject} className={socialIconSize} />
      )}
      {linksToShow.map(({ name, url }, i) => (
        <ExternalLink key={`${slugify(name)}-link`} href={url}>
          <Button className="w-10 px-0 text-foreground" variant="ghost">
            {socialIcons[i]}
            <span className="sr-only">{`Link to ${name}`}</span>
          </Button>
        </ExternalLink>
      ))}
      <SupportButton className={socialIconSize} />
    </div>
  );
}
