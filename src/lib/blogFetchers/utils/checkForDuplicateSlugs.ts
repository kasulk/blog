import type { BlogPost } from "@/../types";
import path from "path";

export function checkForDuplicateSlugs(posts: BlogPost[]): void {
  const slugMap: { [slug: string]: BlogPost[] } = {};

  posts.forEach((post) => {
    if (!slugMap[post.slug]) slugMap[post.slug] = [];
    slugMap[post.slug].push(post);
  });

  const duplicateSlugs = Object.values(slugMap).filter(
    (posts) => posts.length > 1,
  );

  if (duplicateSlugs.length > 0) {
    let errorMessage = "Uh-oh... Duplicate slugs found!\n";

    duplicateSlugs.forEach((posts) => {
      errorMessage += "\n" + `${posts.length}x ${posts[0].slug}:` + "\n";
      errorMessage +=
        posts
          .map((post, i) => `${i + 1}. ${path.dirname(post.relativeFilePath)}`)
          .join("\n") + "\n";
    });
    errorMessage += "\nTo fix this, please rename the files above";

    throw new Error(errorMessage);
  }
}
