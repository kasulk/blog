import { Metadata } from "next";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: `Support | ${siteConfig.name}`,
  description: "Unterstütze diesen Blog!",
};

export default async function SupportPage() {
  return <div className="container max-w-6xl py-6 lg:py-10"></div>;
}
