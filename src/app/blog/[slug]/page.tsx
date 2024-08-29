import "@/styles/highlight-js/github-dark.css";
import type { FrontmatterWithApiData } from "@/../types";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { siteConfig } from "@/config";
import {
  PageHeader,
  CustomStyledMDX,
  BackButton,
  CharCounter,
} from "@/components";
import {
  Sidebar,
  SidebarContent,
  BlogRelatedPosts,
  BlogCategoryCloud,
  BlogTagsCloud,
} from "@/components/Sidebar";
import { BlogPostHeader } from "@/components/BlogPostPage";
import {
  getBlogs,
  getBlogBySlug,
  getBlogsByCategory,
} from "@/lib/blogFetchers";
import { checkVGWortCode } from "@/lib/blogFetchers/utils";
import { getBlogPostAuthor } from "@/lib/utils";

type BlogPageProps = {
  params: { slug: string };
};

const isDevMode = process.env.NODE_ENV === "development";
const showCharCounter = isDevMode && siteConfig.vgWort.showCharCounterInDevMode;

export default async function SingleBlogPage({ params }: BlogPageProps) {
  const blog = await getBlogBySlug(params.slug);

  if (!blog || blog.frontmatter.isDraft) notFound();
  checkVGWortCode(blog);

  const { content, frontmatter, slug } = blog;
  const { title, category, vgWortCode, apiData } =
    frontmatter as FrontmatterWithApiData;

  const relatedBlogs = await getBlogsByCategory(category);
  const otherBlogs = relatedBlogs.filter((blog) => blog.slug !== slug);
  const hasRelatedBlogs = otherBlogs.length > 0;

  return (
    <>
      <PageHeader vgWortCode={vgWortCode}>{title}</PageHeader>

      <div className="flex flex-col items-center gap-8 md:flex-row md:items-start lg:gap-16">
        <article className="w-full flex-1 flex-col">
          <BackButton />
          <BlogPostHeader blog={blog} />
          <CustomStyledMDX
            source={content}
            options={{ scope: { ...frontmatter, apiData } }}
          />
          <BackButton />
        </article>

        <Sidebar>
          <SidebarContent title="Kategorien">
            <BlogCategoryCloud />
          </SidebarContent>
          <SidebarContent title="Tags">
            <BlogTagsCloud />
          </SidebarContent>
          {hasRelatedBlogs && (
            <SidebarContent title="Verwandte Posts">
              <BlogRelatedPosts relatedBlogs={otherBlogs} />
            </SidebarContent>
          )}
        </Sidebar>
      </div>

      {showCharCounter && <CharCounter mdxLength={content.length} />}
    </>
  );
}

export async function generateStaticParams(): Promise<{ slug: string }[]> {
  const blogs = await getBlogs();
  return blogs.map((blog) => ({ slug: blog.slug }));
}

export async function generateMetadata({
  params,
}: BlogPageProps): Promise<Metadata> {
  const blog = await getBlogBySlug(params.slug);

  if (!blog) return {};

  const { frontmatter } = blog;
  const { title, description, codeChallengeData, readingTime } = frontmatter;

  const ogSearchParams = new URLSearchParams();
  ogSearchParams.set("title", title || "");
  ogSearchParams.set("desc", description || "");
  ogSearchParams.set("type", "Blog Post");
  ogSearchParams.set("readingTime", readingTime.toString());

  if (codeChallengeData) {
    const { id, platform, language } = codeChallengeData;
    if (id) ogSearchParams.set(platform, id);
    if (language) ogSearchParams.set("lang", language);
  }

  return {
    title: `${title} | ${siteConfig.name}`,
    description,
    authors: { name: getBlogPostAuthor(frontmatter.author, siteConfig.owner) },

    openGraph: {
      title: title || "",
      description: description || "",
      type: "article",
      publishedTime: frontmatter.pubDate.toString(),
      url: `${siteConfig.url}/blog/${blog.slug}`,
      images: [
        {
          url: `/api/og?${ogSearchParams.toString()}`,
          width: 1200,
          height: 630,
          alt: title || "",
        },
      ],
    },
  };
}
