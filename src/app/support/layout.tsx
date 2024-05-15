type SupportPageLayoutProps = {
  children: React.ReactNode;
};

export default function SupportPageLayout({
  children,
}: SupportPageLayoutProps) {
  return (
    <>
      <section className="container prose mx-auto max-w-3xl py-6 dark:prose-invert">
        {children}
      </section>
    </>
  );
}
