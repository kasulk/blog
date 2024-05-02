// only configurations that DON'T need the server (node),
export const siteConfig = {
  name: "kasulks",
  type: "blog",
  url: "https://kasulks-blog.vercell.app",
  description: "Hier findest du Geschwafel über Finanzen, Coden & Motivation",
  owner: "Daniel Kaser",
  pages: ["blog", "projekte", "support", "aboutMe"],
  dir: {
    blogs: "src/content/blogs",
  },

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
      tradeRepublic: "https://ref.trade.re/7g7k9z1g",
      twino: "",
    },

    docs: {
      arrayMap:
        "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map?retiredLocale=de",
    },
  },
};

export type SiteConfig = typeof siteConfig;
