import type { BlogPostImage as ImageType, Frontmatter } from "@/../types";
import type {
  GeneralType,
  SeriesType,
  CategoryType,
  GlobalImages,
} from "@/config/images";
import { siteConfig } from "@/config";
import Image from "next/image";
import { createImageCreditsTag } from "@/lib/utils";
import { globalImages } from "@/config/images";

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

/**
 * Fetches the appropriate image for a blog post based on frontmatter, series, and category.
 *
 * @param {Frontmatter} frontmatter - The frontmatter data of the blog post, which may include series, category, and image.
 * @param {GlobalImages} globalImages - An object containing all the global images categorized by general, series, and category.
 * @returns {ImageType} - The resolved image object for the blog post.
 * @throws {Error} - Throws an error if the provided image is not a valid general type.
 */
function getBlogPostImage(
  frontmatter: Frontmatter,
  globalImages: GlobalImages,
): ImageType {
  const { series, category } = frontmatter;
  let { image } = frontmatter;

  if (typeof image === "string") {
    if (!isValidGeneralType(image, globalImages)) {
      throwInvalidGeneralTypeError(image, globalImages);
    }
    image = globalImages.general[image as GeneralType];
  }

  if (!image) {
    const seriesImage = globalImages.series[series as SeriesType];
    const categoryImage = globalImages.category[category as CategoryType];

    if (seriesImage) image = seriesImage;
    else if (categoryImage) image = categoryImage;
    else image = globalImages._default;
  }

  return image;
}

/**
 * Checks if the provided image string is a valid general image type.
 *
 * @param {string} image - The image string to validate.
 * @param {GlobalImages} globalImages - An object containing all the global images categorized by general, series, and category.
 * @returns {boolean} - Returns true if the image string is a valid general image type, otherwise false.
 */
function isValidGeneralType(
  image: string,
  globalImages: GlobalImages,
): image is GeneralType {
  const generalTypes = Object.keys(globalImages.general);
  return generalTypes.includes(image);
}

/**
 * Throws an error indicating the provided image string is not a valid general image type.
 *
 * @param {string} image - The invalid image string.
 * @param {GlobalImages} globalImages - An object containing all the global images categorized by general, series, and category.
 * @throws {Error} - Throws an error listing all valid general types.
 */
function throwInvalidGeneralTypeError(
  image: string,
  globalImages: GlobalImages,
): never {
  const generalTypes = Object.keys(globalImages.general);

  throw new Error(`'${image}' ist kein valides Bild!\n
  Valide Bilder sind:
  ===================
  ${generalTypes
    .sort()
    .map((type) => `'${type}'`)
    .join(",\n")}

  Oder gib ein individuelles Bild in folgendem (yaml) Format an:\n
  image:
    file: string
    alt: string
    credits?: string
      creator?: string
      source?: string
  `);
}
