import { slugify } from "@/lib/utils";

/**
 *
 * @param children children of e.g. h2-heading
 * @returns the slugified version of the elements text e.g. to use it as id
 */
export function createId(children: string | React.ReactNode): string {
  return typeof children === "string" ? slugify(children) : "";
}
