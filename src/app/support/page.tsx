import Link from "next/link";
import { Metadata } from "next";
import { AffiliateLink, Callout } from "@/components";
import { links, siteConfig } from "@/config";
import { camelCasify, getMonthAndYearFromDate, slugify } from "@/lib/utils";

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

      <h3 id="spenden">Spenden</h3>
      <p>
        Eine weitere Möglichkeit den Blog zu unterstützen sind Spenden. Spenden
        kannst du z.B. senden ueber:
      </p>
      <ol>
        {links.donate.map(({ name, url }) => (
          <li key={`${slugify(name)}-link`}>
            <Link href={url}>{name}</Link>
          </li>
        ))}
      </ol>

      <h3 id="affiliate-links">Affiliate-Links</h3>
      <p>
        Affiliate-Links sind Links, bei denen ich eine Provision bekomme wenn du
        über so einen Link kaufst bzw. dich registrierst.
      </p>
      <p>
        Ob du ueber so einen Link kaufst bzw. dich registrierst, verursacht für
        dich keinerlei Mehrkosten gegenüber dem direkten Kauf/der direkten
        Registrierung. Im Gegenteil. Meist bekommst du auch einen kleinen Bonus.
      </p>
      <Callout type="warning" className="font-semibold">
        Bitte schaue dir vorher die jeweils geltenden Teilnahmebedingungen des
        jeweiligen Anbieters an.
      </Callout>
      <p>
        Ich empfehle nur, was ich auch selber nutze und guten Gewissens
        empfehlen kann und möchte.
      </p>
      <p>Hier findest du eine Liste mit Affiliate-Links:</p>

      <ul className="list-none">
        {links.affiliate.map(
          ({
            name,
            url,
            category,
            subCategory,
            description,
            rewards,
            payoutOn,
            lastUpdated,
            blog,
          }) =>
            url && (
              <li key={`${slugify(name)}-affiliate-link`} className="space-y-2">
                <h4 className="text-lg">
                  <AffiliateLink partner={camelCasify(name)} />
                </h4>
                <div>
                  <span className="font-semibold">{category}</span>
                  {category && subCategory && <span className="mx-2">|</span>}
                  <span>{subCategory}</span>
                </div>
                {description && (
                  <div>
                    {description}{" "}
                    {blog && (
                      <Link href={`blog/${blog}`} className="text-accent">
                        &rarr; Blog-Artikel lesen
                      </Link>
                    )}
                  </div>
                )}
                <div className="flex flex-col space-y-2 sm:flex-row sm:space-y-0 ">
                  {rewards.referrer && (
                    <div className="sm:flex-1">
                      <div className="font-semibold">Bonus für mich:</div>
                      <div>{rewards.referrer}</div>
                    </div>
                  )}
                  {rewards.user && (
                    <div className="sm:flex-1">
                      <div className="font-semibold">Bonus für dich:</div>
                      <div>{rewards.user}</div>
                    </div>
                  )}
                </div>
                {payoutOn && (
                  <div>
                    <div className="font-semibold">Auszahlung bei: </div>
                    <div>{payoutOn}</div>
                  </div>
                )}
                <div className="flex justify-end text-sm">
                  <span>Stand: {getMonthAndYearFromDate(lastUpdated)}</span>
                </div>
              </li>
            ),
        )}
      </ul>

      <h3 id="merchandise" className="text-muted-foreground">
        Merchandise (coming soon...)
      </h3>
      <p className="text-muted-foreground">
        Ich hab ein paar geile Ideen für T-Shirts und Tassen uff der Pfanne!
      </p>
    </>
  );
}
