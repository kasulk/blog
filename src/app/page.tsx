import Hello from "@/content/blogs/hello.mdx";

export default function Home() {
  return (
    <section className="flex min-h-screen flex-col items-center justify-between p-24">
      {/* /// prose-class neccessary for tailwind/typography to style the mdx */}
      <div className="prose">
        <Hello />
      </div>
    </section>
  );
}
