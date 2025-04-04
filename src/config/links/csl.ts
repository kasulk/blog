const currCampaignDefaultEnd = new Date("2025-04-30");

export const plasma = [
  {
    name: "CSL",
    description: "",
    url: "https://www.cslplasma.de",
    type: "register",
    category: "Good Deeds",
    subCategory: "Leben retten",
    rewards: {
      referrer: "50-100 Euro",
      user: "100 Euro",
    },
    payoutOn:
      "Gewöhnlich nach deiner 10. Spende, oder für die ersten 10 Spenden jeweils 10 € extra.",
    blog: "",

    links: {
      infos: "https://www.plasma-spenden.de",
      locations: "https://www.plasma-spenden.de/#kontakt",
      infos_legacy: "https://www.cslplasma.de/plasmaspende",
      locations_legacy: "https://www.cslplasma.de/standorte",
      googleMapsCSLSearchURL: "https://www.google.com/maps/search/CSL+Plasma",
    },

    locations: [
      {
        city: "Berlin",
        hasCurrCampaign: true,
        isHomeTown: true,
      },
      {
        city: "Berlin2",
        info: "(coming soon...)", //! COMING SOON
      },
      {
        city: "Bielefeld",
        hasCurrCampaign: true,
      },
      {
        city: "Bonn",
        // hasCurrCampaign: true,
      },
      {
        city: "Braunschweig",
        hasCurrCampaign: true,
      },
      {
        city: "Bremen",
        hasCurrCampaign: true,
      },
      {
        city: "Bremen Weserpark",
        hasCurrCampaign: true,
      },
      {
        city: "Duisburg",
        hasCurrCampaign: true,
      },
      {
        city: "Frankfurt",
        hasCurrCampaign: true,
      },
      {
        city: "Gelsenkirchen",
        // hasCurrCampaign: true,
      },
      {
        city: "Göttingen",
        hasCurrCampaign: true,
      },
      {
        city: "Karlsruhe",
        // hasCurrCampaign: true,
      },
      {
        city: "Kiel",
        hasCurrCampaign: true,
      },
      {
        city: "Köln",
        // hasCurrCampaign: true,
      },
      {
        city: "Mainz",
        hasCurrCampaign: true,
      },
      {
        city: "Marburg",
        // hasCurrCampaign: true,
      },
      {
        city: "Münster",
        // hasCurrCampaign: true,
      },
      {
        city: "Nürnberg", // Nürnberg2 (seit 1.3.25; Nürnberg dicht)
        hasCurrCampaign: true,
        currCampaignEnd: new Date("2025-03-08"),
      },
    ] as Location[],
  },
];

// if no special campaign end, add default campaign end
plasma[0].locations.forEach((location) => {
  if (location.hasCurrCampaign && !location.currCampaignEnd) {
    location.currCampaignEnd = currCampaignDefaultEnd;
  }
});

export type Location = {
  city: string;
  isHomeTown?: boolean;
  hasCurrCampaign?: boolean;
  currCampaignEnd?: Date;
  info: string;
};
