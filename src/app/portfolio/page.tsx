import { Metadata } from "next";
import { PageHeader } from "@/components";
import { H2 } from "@/components/Headings";
import { ExternalLink } from "@/components/Links";
import { Laptop, LaptopDescription } from "@/components/PortfolioPage/Laptop";
import { siteConfig, projects } from "@/config";
import { slugify } from "@/lib/utils";

export const metadata: Metadata = {
  title: `Projekte | ${siteConfig.name}`,
  description: "Hier findest du eine Auswahl meiner letzten Web-Projekte",
};

export default function PortfolioPage() {
  return (
    <>
      <PageHeader>Mein Portfolio</PageHeader>

      <H2>Einige meiner letzten Projekte</H2>

      <section
        id="projects"
        className="m-0 flex h-full flex-col p-12 pb-20 text-center"
      >
        <div
          id="grid-container"
          className="mb-40 grid grid-cols-1 gap-12 gap-y-72 p-0 sm:mb-24 sm:gap-y-60 md:grid-cols-2 lg:grid-cols-3 lg:gap-y-72 xl:grid-cols-2 xl:gap-y-60"
        >
          {projects.map((project, i) => {
            const {
              name,
              description,
              title,
              url,
              image,
              technologies,
              isActive,
            } = project;

            return (
              isActive && (
                <div
                  key={"project-tile-" + slugify(name)}
                  // magic to make width & height ratio fixed, but dynamically together
                  className="relative h-full w-full pt-[60%]"
                  title={title || description}
                >
                  <ExternalLink href={url}>
                    <Laptop
                      imageSrc={image.src}
                      imageAlt={image.alt || title || description}
                      position={i + 1}
                    />
                  </ExternalLink>
                  <LaptopDescription
                    name={name}
                    description={description}
                    url={url}
                    technologies={technologies}
                  />
                </div>
              )
            );
          })}
        </div>
      </section>
    </>
  );
}
