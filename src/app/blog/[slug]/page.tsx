import "@/styles/highlight-js/github-dark.css";
import path from "path";
import { Metadata } from "next";
import { notFound } from "next/navigation";
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
} from "@/components/Sidebar";
import { BlogPostHeader } from "@/components/BlogPostPage";
import { siteConfig } from "@/config";
import {
  getBlogs,
  getBlogBySlug,
  getBlogsByCategory,
} from "@/lib/blogFetchers/blogFetchers";
import { createBlogPostTitle, fetchCodewarsChallengeAPI } from "@/lib/utils";

type BlogPageProps = {
  params: { slug: string };
};

const isDevMode = process.env.NODE_ENV === "development";
const showCharCounter = isDevMode && siteConfig.vgWort.showCharCounterInDevMode;

export default async function SingleBlogPage({ params }: BlogPageProps) {
  const blog = await getBlogBySlug(params.slug);

  if (!blog || blog.frontmatter.isDraft) notFound();

  const { content, frontmatter, slug } = blog;

  const { category, vgWortCode, codeChallengeData } = frontmatter;
  const title = createBlogPostTitle(frontmatter);

  const relatedBlogs = await getBlogsByCategory(category);
  const otherBlogs = relatedBlogs.filter((blog) => blog.slug !== slug);
  const hasRelatedBlogs = otherBlogs.length > 0;

  // get API data
  const codewarsApiData = await fetchCodewarsChallengeAPI(
    codeChallengeData?.id,
  );

  const frontmatterWithApiData = codewarsApiData
    ? { ...frontmatter, apiData: codewarsApiData }
    : { ...frontmatter };

  return (
    <>
      <PageHeader vgWortCode={vgWortCode}>{title}</PageHeader>

      <div className="flex flex-col items-center gap-8 md:flex-row md:items-start lg:gap-16">
        <article className="w-full flex-1 flex-col">
          <BackButton />
          <BlogPostHeader frontmatter={frontmatter} />
          <CustomStyledMDX
            source={content}
            options={{ scope: { ...frontmatterWithApiData } }}
          />
          <BackButton />
        </article>

        <Sidebar>
          <SidebarContent title="Kategorien">
            <BlogCategoryCloud />
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
  const title = createBlogPostTitle(frontmatter);

  const ogSearchParams = new URLSearchParams();
  ogSearchParams.set("title", title);

  return {
    title: `${title} | ${siteConfig.name}`,
    description: frontmatter.description,
    authors: { name: frontmatter.author },

    openGraph: {
      title,
      description: frontmatter.description,
      type: "article",
      url: path.join(process.cwd(), blog.slug),
      images: [
        {
          url: `/api/og?${ogSearchParams.toString()}`,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: title,
      description: frontmatter.description,
      images: [`/api/og?${ogSearchParams.toString()}`],
    },
  };
}
