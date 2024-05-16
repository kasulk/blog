import { Metadata } from "next";
import { PageHeader } from "@/components";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { siteConfig } from "@/config";
import { getInitials } from "@/lib/utils";

export const metadata: Metadata = {
  title: `About Me | ${siteConfig.name}`,
  description: "Information about me",
};

const { owner } = siteConfig;

export default async function AboutMePage() {
  return (
    <>
      <PageHeader>About Me</PageHeader>

      <div className="flex flex-col items-center gap-8 md:flex-row-reverse md:items-start md:gap-16">
        <div className="flex min-w-48 max-w-48 flex-col gap-2 py-4">
          <Avatar className="h-48 w-48">
            <AvatarImage src="/img/avatar.jpg" alt={owner} />
            <AvatarFallback className="bg-warning/20 text-6xl">
              {getInitials(owner)}
            </AvatarFallback>
          </Avatar>
          <h2 className="break-words text-center text-2xl font-bold">
            {owner}
          </h2>
          <p className="break-words text-center text-muted-foreground">
            Web Developer
          </p>
        </div>
        <p className="flex flex-col space-y-6 py-4 text-lg text-muted-foreground">
          <div>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur.
          </div>
          <div>
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt mollit anim id est laborum Lorem ipsum dolor sit
            amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
            ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
            nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat. Duis aute irure dolor in reprehenderit in voluptate velit
            esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum
          </div>
        </p>
      </div>
    </>
  );
}
