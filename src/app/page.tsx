import Hello from "@/content/blogs/hello.mdx";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {/* prose-class neccessary for tailwind/typography to style the mdx */}
      <div className="prose">
        <Hello />
      </div>
    </main>
  );
}
