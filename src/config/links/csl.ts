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
    payoutOn: "Gewöhnlich nach deiner 10. Spende.",
    // lastUpdated: new Date("2024-06-17"), // not neccessary, get date from last file modification
    currentCampainEnd: new Date("2025-01-31"),
    blog: "",

    links: {
      infos: "https://www.plasma-spenden.de",
      locations: "https://www.plasma-spenden.de/#kontakt",
      infos_legacy: "https://www.cslplasma.de/plasmaspende",
      locations_legacy: "https://www.cslplasma.de/standorte",
      maps: [
        {
          city: "Berlin",
          link: "https://www.google.com/maps/place/Axel-Springer-Straße+42,+10969+Berlin",
        },
      ],
    },

    locations: [
      "Berlin",
      "Bielefeld",
      "Bonn",
      "Braunschweig",
      "Bremen",
      "Duisburg",
      "Frankfurt",
      "Gelsenkirchen",
      "Göttingen",
      "Karlsruhe",
      "Kiel",
      "Köln",
      "Mainz",
      "Marburg (coming soon...)",
      "Münster",
      "Nürnberg",
    ],
  },
];
