import { CustomStyledMDX } from "@/components/mdx-remote";
import matter from "gray-matter";

const hello = matter.read("src/content/blogs/hello.mdx");

export default function Home() {
  return (
    /// prose-class neccessary for tailwind/typography to style the mdx
    <section className="container prose mx-auto max-w-3xl py-6 dark:prose-invert">
      <CustomStyledMDX source={hello.content} />
    </section>
  );
}
