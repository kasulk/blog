import { H2 } from "@/components";
import BlogCategoryCloud from "@/components/BlogCategoryCloud";

type BlogSectionLayoutProps = {
  children: React.ReactNode;
};

export default function BlogSectionLayout({
  children,
}: BlogSectionLayoutProps) {
  return (
    <>
      <section>{children}</section>
      <section>
        <div>
          <H2>Blog Kategorien</H2>
          <BlogCategoryCloud />
        </div>
      </section>
    </>
  );
}
