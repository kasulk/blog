export const siteConfig = {
  name: "kasulk's blog",
  type: "blog",
  url: "https://example.com",
  description: "A really good blog.",
  author: "kasulk",
  pages: ["home", "blog", "portfolio", "donate", "about"],

  links: {
    personalSite: "https://danielkaser.de",
    github: "https://github.com/kasulk",
    linkedin: "https://linkedin.com/in/kasulk",
    codewars: "https://www.codewars.com/users/kasulk",

    docs: {
      arrayMap:
        "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map?retiredLocale=de",
    },
  },
};

export type SiteConfig = typeof siteConfig;
