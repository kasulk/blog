import type { BlogPostImage as ImageType, Frontmatter } from "@/../types";
import type { GlobalImages, SeriesType, CategoryType } from "@/config/images";
import { siteConfig } from "@/config";
import Image from "next/image";
import { createImageCreditsTag } from "@/lib/utils";
import * as globalImages from "@/config/images";

type Props = {
  frontmatter: Frontmatter;
  className?: string;
};

const blogImageDir = siteConfig.dir.blogImages;

export function BlogPostImage({ frontmatter, className = "" }: Props) {
  const image = getBlogPostImage(frontmatter, globalImages);

  return (
    <Image
      src={`${blogImageDir}/${image?.file}`}
      alt={image?.alt}
      title={image.credits && createImageCreditsTag(image.credits)}
      fill
      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      className={`my-0 rounded-t-sm object-cover ${className}`}
    />
  );
}

export function getBlogPostImage(
  frontmatter: Frontmatter,
  globalImages: GlobalImages,
): ImageType {
  const { series, category } = frontmatter;
  let { image } = frontmatter;

  if (typeof image === "string") image = globalImages.general[image];

  if (!image) {
    const seriesImg = globalImages.series[series as SeriesType];
    const categoryImg = globalImages.category[category as CategoryType];
    const defaultImg = globalImages.general["tropic workplace"];

    if (series && seriesImg) image = seriesImg;
    else if (categoryImg) image = categoryImg;
    else image = defaultImg;
  }

  return image;
}
