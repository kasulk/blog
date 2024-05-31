// only configurations that DON'T need the server (node),
export const siteConfig = {
  name: "kasulks",
  type: "blog",
  url: "https://kasulks-blog.vercel.app",
  description: "Hier findest du Geschwafel über Finanzen, Coden & Motivation",
  owner: "Daniel Kaser",
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
      notFoundPartner:
        "Affiliate-Partner nicht gefunden! \nPartner muss in camelCase uebergeben werden. \nBitte 'partner' ueberpruefen! (AffiliateLink) \n\n=> <AffiliateLink partner='amazon'>Amazon</AffiliateLink>",
      missingTypeOrTooltip:
        "Bitte 'type' ODER 'tooltip' angeben! (AffiliateLink) \n\n=> <AffiliateLink type='order'>Some Shop</AffiliateLink> \nODER: \n=> <AffiliateLink type='register'>Some Account</AffiliateLink> \n\nODER: \n<AffiliateLink tooltip='Ein cooler Tootip!'>Amazon</AffiliateLink>",
      wrongType: "Falscher Affiliate-'type'",
    },
  },
};

export type SiteConfig = typeof siteConfig;
export type PageConfig = typeof siteConfig.pages._defaultPageConfig;
