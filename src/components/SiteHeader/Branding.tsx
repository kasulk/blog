import { siteConfig } from "@/config/site";
import { HeartIcon } from "@radix-ui/react-icons";

export function Branding() {
  return (
    <>
      <HeartIcon className="h-6 w-6 text-danger" />
      <span className="font-bold">
        <span className="text-foreground">{siteConfig.owner}&apos;s</span>
        <span className="text-danger">{siteConfig.type.toUpperCase()}</span>!
      </span>
    </>
  );
}
