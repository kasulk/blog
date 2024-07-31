import { Metadata } from "next";
import { PageHeader } from "@/components";
import { H2 } from "@/components/Headings";
import { ExternalLink } from "@/components/Links";
import { Laptop, LaptopDescription } from "@/components/PortfolioPage/Laptop";
import { siteConfig, projects } from "@/config";
import { slugify } from "@/lib/utils";

export const metadata: Metadata = {
  title: `Projekte | ${siteConfig.name}`,
  description: "Hier findest du eine Auswahl meiner Web-Projekte",
};

export default function PortfolioPage() {
  return (
    <>
      <PageHeader className="text-muted-foreground/80">
        Mein Portfolio
      </PageHeader>

      <H2 className="text-muted-foreground/80">
        Einige meiner letzten Projekte
      </H2>

      <section
        id="projects"
        className="m-0 flex h-full flex-col p-12 pb-20 text-center"
      >
        {/* grid-container */}
        <div className="mb-24 grid grid-cols-1 gap-12 gap-y-48 p-0 md:grid-cols-3 xl:grid-cols-2 xl:gap-y-44">
          {projects.map((project) => {
            const { name, description, title, url, image, technologies } =
              project;

            return (
              // project-tile
              <div
                key={"project-" + slugify(name)}
                // magic to make width & height ratio fixed, but dynamically together
                className="relative h-full w-full pt-[60%]"
                title={title || description}
              >
                <ExternalLink href={url}>
                  <Laptop
                    imageSrc={image.src}
                    imageAlt={image.alt || title || description}
                  />
                </ExternalLink>
                <LaptopDescription
                  name={name}
                  description={description}
                  technologies={technologies}
                />
              </div>
            );
          })}
        </div>

        {/* <a href="" target="_blank" id="show-all-button"> Show all </a> */}
      </section>
    </>
  );
}
