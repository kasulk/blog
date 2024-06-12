import { replaceUmlauts } from "./replaceUmlauts";

export function slugify(text: string): string {
  return replaceUmlauts(text)
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^\w-]+/g, "")
    .replace(/--+/g, "-")
    .replace(/^-+/, "")
    .replace(/-+$/, "");
}
