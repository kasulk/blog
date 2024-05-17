import { BlogCategoryCloud } from "@/components";

type BlogSectionLayoutProps = {
  children: React.ReactNode;
};

export default function BlogSectionLayout({
  children,
}: BlogSectionLayoutProps) {
  return (
    <>
      <section>{children}</section>
      <hr className="flex sm:hidden" />
      <section>
        <BlogCategoryCloud />
      </section>
    </>
  );
}
