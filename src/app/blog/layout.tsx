import BlogCategoryCloud from "@/components/BlogCategoryCloud";

type BlogSectionLayoutProps = {
  children: React.ReactNode;
};

export default function BlogSectionLayout({
  children,
}: BlogSectionLayoutProps) {
  return (
    <>
      <section className="container prose mx-auto max-w-3xl py-6 dark:prose-invert">
        {children}
      </section>
      <section className="container prose mx-auto flex max-w-3xl py-6 dark:prose-invert">
        <div>
          <h2>Blog Kategorien</h2>
          <BlogCategoryCloud />
        </div>
        <div></div>
      </section>
    </>
  );
}
