import { getAffiliatePartnersNames } from "@/lib/utils";
import * as links from "@/config/links";

// only configurations that DON'T need the server (node),
export const siteConfig = {
  name: "kasulks",
  type: "blog",
  url: "https://kasulks-blog.vercel.app",
  description: "Hier findest du Geschwafel über Finanzen, Coden & Motivation",
  owner: "Daniel Kaser",
  personalSite: "https://danielkaser.de",
  github: {
    user: "kasulk",
    repos: {
      blog: "blog",
    },
  },

  pages: {
    blog: {
      isActive: true,
      showOnNav: true,
    },
    portfolio: {
      isActive: true,
      showOnNav: true,
    },
    support: {
      isActive: true,
      showOnNav: true,
    },
    aboutMe: {
      isActive: true,
      showOnNav: true,
    },
    blogPost: {
      isActive: true,
      showOnNav: false,
    },
    _defaultPageConfig: {
      isActive: false,
      showOnNav: false,
    },
  },

  dir: {
    blogs: "src/content/blogs",
    blogImages: "/img/blogs",
  },

  showCategoryCount: true,

  defaultTooltips: {
    affiliate: {
      order:
        "Affiliate-Link ❤ Wenn du über diesen Link bestellst, unterstützt du meine Arbeit! (ohne Mehrkosten für dich)",
      register:
        "Affiliate-Link ❤ Wenn du dich über diesen Link registrierst, unterstützt du meine Arbeit! (ohne Mehrkosten für dich)",
    },
  },

  errors: {
    AffiliateLink: {
      partnerNotFound:
        "Affiliate-Partner nicht gefunden! \n" +
        "Partner muss in camelCase übergeben werden. \n" +
        "Bitte 'partner' überprüfen! (AffiliateLink) \n\n" +
        "JSX => <AffiliateLink partner='tradeRepublic'>Trade Republic</AffiliateLink>\n" +
        "MDX => [Trade Republic]($tradeRepublic)\n\n" +
        "Mögliche Partner sind:\n" +
        "=======================\n" +
        getAffiliatePartnersNames(links.affiliate).join("\n"),
      wrongType: "Falscher Affiliate-'type'",
    },
  },
};

export type SiteConfig = typeof siteConfig;
export type PageConfig = typeof siteConfig.pages._defaultPageConfig;
