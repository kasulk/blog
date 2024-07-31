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
};

export const projects: Project[] = [
  {
    name: "Blog",
    description:
      "This high-performance markdown blog is not made with love. It's made with Next.js 14.",
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
      src: "/img/portfolio/blog.png",
      alt: "",
    },
  },
  {
    name: "Art Gallery",
    description:
      "This collaboration with the great Spreekaiser fetches and displays disputable art pieces.",
    title: "This exquisit art gallery app is itself a fine piece of art...",
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
      src: "/img/portfolio/art-gallery.png",
      alt: "",
    },
  },
  {
    name: "Ursula 3000",
    description:
      "Processes and renders data of 3000 stocks of the US Russell Index. NextAuth and darkmode.",
    title:
      "Ursula helps you to screen dividend stocks in the US Russell 3000 index.",
    url: "https://ursula-kasulk.vercel.app",
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
      src: "/img/portfolio/uschi.png",
      alt: "",
    },
  },
  {
    name: "Daniel Kaser",
    description: "Do you recognize it?",
    title: "Exactly! I build this very portfolio page! Cool huh?!",
    url: "https://www.danielkaser.de",
    technologies: ["JavaScript", "HTML5", "CSS3", "Rest API"],
    image: {
      src: "/img/portfolio/portfolio-page.png",
      alt: "",
    },
  },
  {
    name: "Drögemeier Fahrzeugteile",
    description:
      "Customized JTL-Online-Shop for a motor vehicle car parts e-commerce business in Berlin.",
    title: "",
    url: "https://www.droegemeier-fahrzeugteile.de",
    technologies: ["JTL-Shop 4", "HTML5", "CSS3"],
    image: {
      src: "/img/portfolio/dft-shop.png",
      alt: "",
    },
  },
  {
    name: "Original Dirt",
    description:
      "On this responsive landing page you'll get mesmerized to buy expensive dirt.",
    title: "",
    url: "https://www.danielkaser.de/portfolio/original-dirt",
    technologies: ["HTML5", "CSS3"],
    image: {
      src: "/img/portfolio/original-dirt.png",
      alt: "",
    },
  },
  {
    name: "A Form Survey Form",
    description:
      "Probably the best survey form about forms in the world. Handmade.",
    title: "One of the best survey forms in the world, handmade.",
    url: "https://www.danielkaser.de/portfolio/survey-form",
    technologies: ["HTML5", "CSS3"],
    image: {
      src: "/img/portfolio/survey-form.png",
      alt: "",
    },
  },
  {
    name: "Simple Personal Website",
    description:
      "Simple sunny personal website with animations, lots of chili and a mustache.",
    title: "",
    url: "https://www.danielkaser.de/portfolio/sunny-mustache",
    technologies: ["HTML5", "CSS3"],
    image: {
      src: "/img/portfolio/sunny-mustache.png",
      alt: "",
    },
  },
  {
    name: "YT UI Clone",
    description:
      "Fully responsive UI clone of a kind of well known video streaming service. Using CSS Grid & Flexbox.",
    title: "",
    url: "https://www.danielkaser.de/portfolio/ytclone",
    technologies: ["HTML5", "CSS3"],
    image: {
      src: "/img/portfolio/yt-clone.png",
      alt: "",
    },
  },
  {
    name: "Stand-Up",
    description: "Customized Wordpress page for an aspiring stand-up comedian.",
    title: "",
    url: "https://www.danielkaser.de/comedy",
    technologies: ["Wordpress", "HTML5", "CSS3"],
    image: {
      src: "/img/portfolio/dk-comedy.png",
      alt: "",
    },
  },
  {
    name: "Naturheilpraxis Lorbach",
    description: "Customized Worpress page for a naturopath in Berlin.",
    title: "",
    url: "https://www.naturheilpraxis-lorbach.de",
    technologies: ["Wordpress", "HTML5", "CSS3"],
    image: {
      src: "/img/portfolio/naturheilpraxis-lorbach.png",
      alt: "",
    },
  },
];
