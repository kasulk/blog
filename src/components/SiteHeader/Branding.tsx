import { siteConfig } from "@/config/site";
import { HeartIcon } from "@radix-ui/react-icons";
import Link from "next/link";

export default function Branding() {
  return (
    <Link href="/" className="mr-6 flex items-center space-x-2">
      <HeartIcon className="h-6 w-6 text-foreground" />
      <span className="font-bold">
        <span className="text-foreground">{siteConfig.name}</span>
        <span className="text-red-500">{siteConfig.type}</span>
      </span>
    </Link>
  );
}
