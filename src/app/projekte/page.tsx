import { Metadata } from "next";
import { PageHeader, H2 } from "@/components";
import { siteConfig } from "@/config";

export const metadata: Metadata = {
  title: `Projekte | ${siteConfig.name}`,
  description: "Hier findest du eine Auswahl meiner Web-Projekte",
};

export default function ProjectsPage() {
  return (
    <>
      <PageHeader className="text-muted-foreground/80">
        Meine Projekte
      </PageHeader>

      <H2 className="text-muted-foreground/80">🏗 coming soon... 🏗</H2>
    </>
  );
}
