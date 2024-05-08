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
    blogImages: "/img/blogs",
  },
  showCategoryCount: true,

  links: {
    personalSite: "https://danielkaser.de",
    social: {
      github: "https://github.com/kasulk",
      linkedin: "https://linkedin.com/in/kasulk",
      codewars: "https://www.codewars.com/users/kasulk",
    },
    affiliate: {
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
  },

  docs: {
    arrayMap:
      "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map?retiredLocale=de",
  },

  defaultTooltips: {
    affiliate: {
      order:
        "Affiliate-Link ❤ Wenn du über diesen Link bestellst, unterstützt du meine Arbeit! (ohne Mehrkosten für dich)",
      register:
        "Affiliate-Link ❤ Wenn du dich über diesen Link anmeldest, unterstützt du meine Arbeit! (ohne Mehrkosten für dich)",
    },
  },

  errors: {
    AffiliateLink: {
      missingHrefOrPartner:
        "Bitte 'href' ODER 'partner' angeben! (AffiliateLink) \n\n=> <AffiliateLink partner={amazon}>Amazon</AffiliateLink> \nODER: \n=> <AffiliateLink href='https://amazon.de/'}>Amazon</AffiliateLink>",
      missingTypeOrTooltip:
        "Bitte 'type' ODER 'tooltip' angeben! (AffiliateLink) \n\n=> <AffiliateLink type='order'>Some Shop</AffiliateLink> \nODER: \n=> <AffiliateLink type='register'>Some Account</AffiliateLink> \n\nODER: \n<AffiliateLink tooltip='Ein cooler Tootip!'>Amazon</AffiliateLink>",
      wrongType: "Falscher 'type'",
    },
  },
};

export type SiteConfig = typeof siteConfig;
