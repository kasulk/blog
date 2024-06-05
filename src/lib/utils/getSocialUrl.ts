import { links } from "@/config";

export function getSocialUrl(socialName: string): string {
  const social = links.social.find(({ name }) => socialName === name);
  if (!social) {
    throw new Error(
      `Uh-oh! Social (link) for '${socialName}' does not exist...`,
    );
  }
  return social.url;
}
