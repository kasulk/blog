import { CustomStyledMDX } from "@/components";
import matter from "gray-matter";

const hello = matter.read("src/content/blogs/hello.mdx");

export default function Home() {
  return <CustomStyledMDX source={hello.content} />;
}
