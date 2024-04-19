import { CustomStyledMDX } from "@/components/mdx-remote";
import matter from "gray-matter";

const about = matter.read("src/content/about.mdx");

export default function AboutPage() {
  return (
    <div className="container prose mx-auto max-w-3xl py-6 dark:prose-invert">
      <CustomStyledMDX source={about.content} />
    </div>
  );
}
