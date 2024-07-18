import { Metadata } from "next";
import { siteConfig } from "@/config";
import { Link } from "@/components/Links";
import { H2 } from "@/components/Headings";
import { PageHeader } from "@/components";
import {
  SupportDonateSection,
  SupportDonatePlasmaSection,
  SupportAffiliateSection,
  SupportMerchSection,
} from "@/components/SupportPage/";

export const metadata: Metadata = {
  title: `Support Me | ${siteConfig.name}`,
  description: "Unterstütze diesen Blog!",
};

export default function SupportPage() {
  return (
    <>
      <PageHeader>Support Me</PageHeader>

      <p>
        Wenn dir dieser Blog gefällt, freue ich mich, wenn du uns (also den Blog
        und mich) unterstützt.
      </p>

      <H2 autoCopyable>How it works</H2>
      <p>Im Folgenden findest du Inspirationen, wie du das tun kannst.</p>
      <p>Im Grunde gibt es 4 Möglichkeiten:</p>
      <ol>
        <li>
          <Link href="#spenden">Du spendest Bares ☕</Link>
        </li>
        <li>
          <Link href="#plasma-spenden">Du spendest Blutplasma 🩸</Link>
        </li>
        <li>
          <Link href="#affiliate-links">
            Du klickst auf einen Affiliate-Link 🛍
          </Link>
        </li>
        <li>
          <Link href="#merchandise">
            Du erwirbst sexy Merchandise 👕 <em>(coming soon...)</em>
          </Link>
        </li>
        <li>
          Du sagst deiner <em>Oma</em> sie soll spenden, auf einen Link klicken
          oder sexy Merchandise <em>(coming soon...)</em> erwerben! 👵
        </li>
      </ol>

      <hr />

      <div className="flex flex-col space-y-12">
        <SupportDonateSection />
        <SupportDonatePlasmaSection />
        <SupportAffiliateSection />
        <SupportMerchSection />
      </div>
    </>
  );
}
