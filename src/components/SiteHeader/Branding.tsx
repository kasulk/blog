import { siteConfig } from "@/config/site";
import { HeartIcon } from "@radix-ui/react-icons";

export function Branding() {
  return (
    <>
      <HeartIcon className="h-6 w-6 text-foreground" />
      <span className="font-bold">
        <span className="text-foreground">{siteConfig.author}&apos;s</span>
        <span className="text-red-500">{siteConfig.type}</span>!
      </span>
    </>
  );
}
