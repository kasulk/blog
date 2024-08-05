export type Project = {
  name: string;
  description: string;
  title?: string;
  url: string;
  technologies: string[];
  image: {
    src: string;
    alt?: string;
  };
  isActive: boolean;
};

const imageDir = "/img/portfolio/";

export const projects: Project[] = [
  {
    name: "Blog",
    description:
      "Dieser high-performance Markdown-Blog ist nicht 'Made with ❤', sondern mit Next.js 14.",
    title: "",
    url: "https://kasulks-blog.vercel.app",
    technologies: [
      "React",
      "TypeScript",
      "Next.js",
      "Rest API",
      "SSG",
      "Markdown/MDX",
      "Tailwind",
    ],
    image: {
      src: imageDir + "blog.png",
      alt: "",
    },
    isActive: true,
  },
  {
    name: "Ursula 3000",
    description:
      "Verarbeitet und rendert die Daten von 3000 Aktien aus dem US Russell Index. NextAuth und Darkmode.",
    title:
      "Ursula hilft dir Dividenden-Aktien im US Russell 3000 Index zu finden.",
    url: "https://ursula-3000.vercel.app",
    technologies: [
      "React",
      "TypeScript",
      "Next.js",
      "MongoDB",
      "Rest API",
      "Node.js",
      "Tailwind",
    ],
    image: {
      src: imageDir + "uschi-3000.png",
      alt: "",
    },
    isActive: true,
  },
  {
    name: "Art Gallery",
    description:
      "Diese Zusammenarbeit mit dem großen Spreekaiser empfängt und zeigt streitbare Kunstwerke.",
    title: "Diese exquisite Kunst-Gallerie-App ist selbst ein Kunstwerk...",
    url: "https://art-gallery-2000.vercel.app",
    technologies: [
      "React",
      "TypeScript",
      "Next.js",
      "Rest API",
      "Node.js",
      "Styled Components",
      "Jest",
    ],
    image: {
      src: imageDir + "art-gallery.png",
      alt: "",
    },
    isActive: true,
  },
  {
    name: "Single Page Portfolio",
    description:
      "Eine einfache, aber responsive Single-Page-Portfolio-Webseite mit Animationen und Pop-Ups.",
    title: "",
    url: "https://www.danielkaser.de",
    technologies: ["JavaScript", "HTML5", "CSS3", "Rest API"],
    image: {
      src: imageDir + "portfolio-page.png",
      alt: "",
    },
    isActive: true,
  },
  {
    name: "YT UI Clone",
    description:
      "Komplett responsiver UI-Klon eines mehr oder weniger bekannten Video-Streaming-Dienstes.",
    title: "",
    url: "https://www.danielkaser.de/portfolio/ytclone",
    technologies: ["HTML5", "CSS3"],
    image: {
      src: imageDir + "yt-clone.png",
      alt: "",
    },
    isActive: true,
  },
  {
    name: "Drögemeier Fahrzeugteile",
    description:
      "Individuell angepasster JTL-Online-Shop für einen Kfz-Teile-Online-Handel in Berlin.",
    title: "",
    url: "https://www.droegemeier-fahrzeugteile.de",
    technologies: ["JTL-Shop 4", "HTML5", "CSS3"],
    image: {
      src: imageDir + "dft-shop.png",
      alt: "",
    },
    isActive: true,
  },
  {
    name: "Original Dirt",
    description:
      "Nachdem du diese responsive Landing Page gesehen hast, kaufst du willenlos teuren Kehricht.",
    title: "",
    url: "https://www.danielkaser.de/portfolio/original-dirt",
    technologies: ["HTML5", "CSS3"],
    image: {
      src: imageDir + "original-dirt.png",
      alt: "",
    },
    isActive: false,
  },
  {
    name: "Formular-Umfrage-Formular",
    description:
      "Wahrscheinlich das beste Umfrage-Formular für Umfrage-Formulare der Welt. Handgemacht.",
    title:
      "Eines der besten Umfrage-Formulare für Umfrage-Formulare der Welt. Handgemacht.",
    url: "https://www.danielkaser.de/portfolio/survey-form",
    technologies: ["HTML5", "CSS3"],
    image: {
      src: imageDir + "survey-form.png",
      alt: "",
    },
    isActive: false,
  },
  {
    name: "Stand-Up",
    description:
      "Individuell angepasste Wordpress-Seite für einen aufstrebenden Stand-Up-Comedian.",
    title: "",
    url: "https://www.danielkaser.de/comedy",
    technologies: ["Wordpress", "HTML5", "CSS3"],
    image: {
      src: imageDir + "dk-comedy.png",
      alt: "",
    },
    isActive: true,
  },
  {
    name: "Naturheilpraxis Lorbach",
    description:
      "Individuell angepasste Wordpress-Seite für eine Naturheilpraktikerin in Berlin.",
    title: "",
    url: "https://www.naturheilpraxis-lorbach.de",
    technologies: ["Wordpress", "HTML5", "CSS3"],
    image: {
      src: imageDir + "naturheilpraxis-lorbach.png",
      alt: "",
    },
    isActive: true,
  },
  {
    name: "Sonniger Schnurrbart",
    description:
      "Einfache, sonnige, persönliche Webseite mit Animationen, jeder Menge Chili und einem Schnurrbart.",
    title: "",
    url: "https://www.danielkaser.de/portfolio/sunny-mustache",
    technologies: ["HTML5", "CSS3"],
    image: {
      src: imageDir + "sunny-mustache.png",
      alt: "",
    },
    isActive: true,
  },
];
