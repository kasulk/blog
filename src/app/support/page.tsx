import { Metadata } from "next";
import { siteConfig } from "@/config/site";
import Link from "next/link";

export const metadata: Metadata = {
  title: `Support | ${siteConfig.name}`,
  description: "Unterstütze diesen Blog!",
};

const donateLinks = siteConfig.links.donate;

export default function SupportPage() {
  return (
    <>
      <h1>Support</h1>
      <p>
        Wenn dir dieser Blog gefaellt, freue ich mich, wenn du uns (den Blog und
        mich) unterstuetzt.
      </p>
      <h2>How it works</h2>
      <p>Im Folgenden findest Inspirationen, wie du das tun kannst.</p>
      <p>Im Grunde gibt es 3 Moeglichkeiten:</p>
      <ol>
        <li>
          <Link href="#affiliate-links">
            Du klickst auf einen Affiliate-Link
          </Link>
        </li>
        <li>
          <Link href="#spenden">Du spendest</Link>
        </li>
        <li>
          <Link href="#merchandise">
            Du erwirbst sexy Merchandise (coming soon...)
          </Link>
        </li>
      </ol>
      <h3 id="affiliate-links">Affiliate-Links</h3>
      <p>
        Affiliate-Links sind Links, bei denen ich eine kleine Provision bekomme
        wenn du ueber so einen Link kaufst bzw. dich registrierst.
      </p>
      <p>
        Ob du ueber so einen Link kaufst bzw. dich registrierst, verursacht fuer
        dich keinerlei Mehrkosten gegenueber dem direkten Kauf/der direkten
        Anmeldung. Im Gegenteil. Meist bekommst du auch einen kleinen Bonus.
      </p>
      <p>Hier findest du eine Liste mit Affiliate-Links:</p>
      <div>Anbieter | Beschreibung | Bonus fuer mich | Bonus fuer dich</div>
      <h3 id="spenden">Spenden</h3>
      <p>
        Eine weitere Moeglichkeit den Blog zu unterstuetzen sind Spenden.
        Spenden kannst du z.B. senden ueber:
      </p>
      <ol>
        {Object.values(donateLinks).map(({ name, url }, i) => (
          <li key={`donate-link-${i + 1}`}>
            <Link href={url}>{name}</Link>
          </li>
        ))}
      </ol>
      <h3 id="merchandise">Merchandise (coming soon...)</h3>
      <p>
        Ich hab ein paar geile Ideen fuer T-Shirts und Tassen auf der Pfanne!
      </p>
    </>
  );
}
