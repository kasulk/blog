import Hello from "@/content/blogs/hello.mdx";

export default function Home() {
  return (
    /// prose-class neccessary for tailwind/typography to style the mdx
    <section className="prose flex min-h-screen flex-col items-center justify-between p-24 dark:prose-invert">
      <div>
        <Hello />
      </div>
    </section>
  );
}
