import "@/styles/highlight-js/github-dark.css";
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
import { fetchCodeChallengeAPIs } from "@/lib/apiFetchers";
import {
  createBlogPostDescription,
  createBlogPostTitle,
  getBlogPostAuthor,
} from "@/lib/utils";

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
  const { category, vgWortCode, codeChallengeData } = frontmatter;

  const relatedBlogs = await getBlogsByCategory(category);
  const otherBlogs = relatedBlogs.filter((blog) => blog.slug !== slug);
  const hasRelatedBlogs = otherBlogs.length > 0;

  // get API data
  const apiData = codeChallengeData
    ? await fetchCodeChallengeAPIs(codeChallengeData)
    : null;

  const title = createBlogPostTitle(frontmatter, apiData);

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
  const { codeChallengeData } = frontmatter;

  // get API data
  const apiData = codeChallengeData
    ? await fetchCodeChallengeAPIs(codeChallengeData)
    : null;

  const title = createBlogPostTitle(frontmatter, apiData);
  const description = createBlogPostDescription(frontmatter, apiData);

  const ogSearchParams = new URLSearchParams();
  ogSearchParams.set("title", title);
  ogSearchParams.set("desc", description);

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
      title,
      description,
      type: "article",
      url: `${siteConfig.url}/blog/${blog.slug}`,
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
      title,
      description,
      images: [`/api/og?${ogSearchParams.toString()}`],
    },
  };
}
