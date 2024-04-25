import path from "path";

export const siteConfig = {
  name: "kasulk's blog",
  type: "blog",
  url: "https://example.com",
  description: "A really good blog.",
  owner: "Daniel Kaser",
  // pages: ["home", "blog", "projekte", "donate", "about"],
  pages: ["blog", "projekte", "donate", "about"],

  links: {
    personalSite: "https://danielkaser.de",
    social: {
      github: "https://github.com/kasulk",
      linkedin: "https://linkedin.com/in/kasulk",
      codewars: "https://www.codewars.com/users/kasulk",
    },
    affiliate: {
      _defaultTooltip:
        "Affiliate-Link: Wenn du ueber diesen Link kaufst, kannst du mich ohne Mehrkosten fuer dich unterstuetzen!",
      amazon: "",
      bondora: "",
      honeypot: "https://app.honeypot.io/ref/WiTQJcPU6dXEPsNgdJVaeHzN",
      ib: "https://ibkr.com/referral/daniel471",
      lande: "https://lande.finance?referral=F7QGGIB",
      mintos: "",
      swaper: "",
      twino: "",
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
