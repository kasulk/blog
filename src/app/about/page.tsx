import About from "@/content/about.mdx";
import { customComponents } from "@/components/mdx-remote";

export default function AboutPage() {
  return (
    <div className="container prose mx-auto max-w-3xl py-6 dark:prose-invert">
      <About components={customComponents} />
    </div>
  );
}
