import Link from "next/link";
import { Metadata } from "next";
import { siteConfig } from "@/config";
import {
  SupportDonateSection,
  SupportAffiliateSection,
} from "@/components/SupportPage/";
import SupportMerchSection from "@/components/SupportPage/SupportMerchSection";

export const metadata: Metadata = {
  title: `Support | ${siteConfig.name}`,
  description: "Unterstütze diesen Blog!",
};

export default function SupportPage() {
  return (
    <>
      <h1>Support</h1>
      <p>
        Wenn dir dieser Blog gefällt, freue ich mich, wenn du uns (den Blog und
        mich) unterstützt.
      </p>

      <h2>How it works</h2>
      <p>Im Folgenden findest Inspirationen, wie du das tun kannst.</p>
      <p>Im Grunde gibt es 4 Möglichkeiten:</p>
      <ol>
        <li>
          <Link href="#spenden">Du spendest</Link>
        </li>
        <li>
          <Link href="#affiliate-links">
            Du klickst auf einen Affiliate-Link
          </Link>
        </li>
        <li>
          <Link href="#merchandise">
            Du erwirbst sexy Merchandise (coming soon...)
          </Link>
        </li>
        <li>
          Du sagst deiner <em>Oma</em> sie soll spenden, auf einen Link klicken
          oder sexy Merchandise (coming soon...) erwerben!
        </li>
      </ol>

      <SupportDonateSection />
      <SupportAffiliateSection />
      <SupportMerchSection />
    </>
  );
}
