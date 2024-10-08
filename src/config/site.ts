// only configurations that DON'T need the server (node),
export const siteConfig = {
  name: "kasulks",
  type: "blog",
  url: "https://kasulks-blog.vercel.app",
  description: "Warme Worte über Finanzen, Coden & Motivation",
  owner: "Daniel Kaser",
  personalSite: "https://danielkaser.de",
  email: {
    questions: "frage@kasulk.com",
  },
  categories: ["coden", "finanzen", "inspiration", "verschiedenes"] as const,
  github: {
    user: "kasulk",
    repos: {
      blog: "blog",
      ursula: "ursula-3000",
    },
  },
  vgWort: {
    charCountThreshold: 1800,
    viewCountThreshold: 1500,
    showCharCounterInDevMode: true,
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
    // blogs: "src/content/blogs", // not working with pagination (anymore)
    blogImages: "/img/blogs",
  },

  showCategoryCount: true,
  showTagCount: true,

  blog: {
    pagination: {
      PER_PAGE: 5,
    },
  },

  defaultTooltips: {
    affiliate: {
      order:
        "Wenn du über diesen Link bestellst, unterstützt du meine Arbeit! (ohne Mehrkosten für dich)",
      register:
        "Wenn du dich über diesen Link registrierst, unterstützt du meine Arbeit! (ohne Mehrkosten für dich)",
    },
  },
};

export const branding = `${siteConfig.name}${siteConfig.type.toUpperCase()}`;

export const calloutColorMap = {
  default: {
    titleColor: "text-muted-foreground",
    textColor: "text-muted-foreground",
    bgColor: "text-muted-foreground",
    borderColor: "text-muted-foreground",
  },
  caution: {
    titleColor: "text-danger-600",
    textColor: "text-danger-900",
    bgColor: "bg-danger-100",
    borderColor: "border-danger-600",
  },
  important: {
    titleColor: "text-fuchsia-600",
    textColor: "text-fuchsia-900",
    bgColor: "bg-fuchsia-100",
    borderColor: "border-fuchsia-600",
  },
  note: {
    titleColor: "text-blue-600",
    textColor: "text-blue-900",
    bgColor: "bg-blue-100",
    borderColor: "border-blue-600",
  },
  tip: {
    titleColor: "text-success-600",
    textColor: "text-success-900",
    bgColor: "bg-success-100",
    borderColor: "border-success-600",
  },
  warning: {
    titleColor: "text-warning-600",
    textColor: "text-warning-900",
    bgColor: "bg-warning-100",
    borderColor: "border-warning-600",
  },
} as const;

export type Category = (typeof siteConfig.categories)[number];
export type Categories = typeof siteConfig.categories;

export type SiteConfig = typeof siteConfig;
export type PageConfig = typeof siteConfig.pages._defaultPageConfig;
export type EmailOptions = keyof typeof siteConfig.email;

type CalloutColorMap = typeof calloutColorMap;
export type CalloutType = keyof CalloutColorMap;
