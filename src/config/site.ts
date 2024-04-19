import path from "path";

export const siteConfig = {
  name: "kasulk's blog",
  type: "blog",
  url: "https://example.com",
  description: "A really good blog.",
  author: "kasulk",
  // pages: ["home", "blog", "projekte", "donate", "icke"],
  pages: ["blog", "projekte", "donate", "icke"],

  links: {
    personalSite: "https://danielkaser.de",
    social: {
      github: "https://github.com/kasulk",
      linkedin: "https://linkedin.com/in/kasulk",
      // codewars: "https://www.codewars.com/users/kasulk",
    },

    docs: {
      arrayMap:
        "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map?retiredLocale=de",
    },
  },
  dir: {
    blogs: path.join(process.cwd(), "src/content/blogs"),
  },
};

export type SiteConfig = typeof siteConfig;
