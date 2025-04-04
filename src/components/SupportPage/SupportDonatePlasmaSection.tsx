import { H3, H4 } from "@/components/Headings";
import { ExternalLink } from "../Links";
import { plasma } from "@/config/links";
import { getLastModifiedDateOfFile } from "@/lib/utils/getLastModifiedDateOfFile";
import { SupportCurrPlasmaCampainsList } from ".";
import {
  AffiliateLinkListItemCategory,
  AffiliateLinkListItemDate,
  AffiliateLinkListItemRewards,
  AffiliateLinkListItemTerms,
} from "./AffiliateLinkList";
import { Callout } from "@/components/Callout";

const { locations, links, category, subCategory, rewards, payoutOn } =
  plasma[0];

const lastModified = getLastModifiedDateOfFile("src/config/links/csl.ts");
const hometownCenter =
  locations.find(({ isHomeTown }) => isHomeTown) || locations[0];
const { googleMapsCSLSearchURL } = links;

export function SupportDonatePlasmaSection() {
  return (
    <section id="plasma-spenden" className="scroll-mt-12">
      <H3 autoCopyable>Plasma-Spenden 🩸</H3>
      <AffiliateLinkListItemCategory
        category={category}
        subCategory={subCategory}
      />
      <p>
        Eine weitere coole Möglichkeit den Blog, seinen Autor und dich selbst zu
        unterstützen sind Blutplasma-Spenden!
      </p>
      <p>Als Neuspender kannst du hier regelmäßig einen Bonus erhalten.</p>
      <p>
        Ich gehe regelmässig Blutplasma spenden bei{" "}
        <ExternalLink href={links.infos}> CSL</ExternalLink>. Da gibt&apos;s pro
        Spende, abhängig vom Körpergewicht und inklusive Boni, im Schnitt ca. 40
        Euro pro Spende (25 regulär + Bonus, wenn du leichter bist als ich
        (80kg), dann etwas weniger).
      </p>
      <div className="space-y-2">
        <H4>Die Fakten:</H4>
        <AffiliateLinkListItemRewards rewards={rewards} />
        <AffiliateLinkListItemTerms payoutOn={payoutOn} />
      </div>
      <H4>So funktioniert&apos;s:</H4>
      <p>
        <span>Gib bei deiner Anmeldung in einem der </span>
        <ExternalLink
          href={links.locations}
          title={locations
            .map(({ city, info = "" }) => city + " " + info)
            .join("\n")}
        >
          CSL-Zentren in Deutschland
        </ExternalLink>
        <span> meine Spendernummer (AS062706) an. Das war&apos;s.</span>
      </p>
      <p>
        <span>
          Weitere Infos und ob du für eine Plasmaspende in Frage kommst, findest
          du z.B{" "}
        </span>
        <ExternalLink href={links.infos}>hier</ExternalLink>.
      </p>
      <p>
        <span>Wer weiss, vielleicht sehen wir uns ja mal im </span>
        <ExternalLink href={googleMapsCSLSearchURL + "+" + hometownCenter.city}>
          CSL-Center in {hometownCenter.city}
        </ExternalLink>
        <span> 😉</span>
      </p>
      <Callout title="Achtung" type="caution" className="my-8 text-center">
        Diese Aktionen gibt es leider immer nur in zeitlich unregelmäßigen
        Abständen. Je nach Neu-Spender-Bedarf halt.
        <br />
        <div className="my-2 flex items-center justify-evenly gap-x-4 text-center md:justify-center md:gap-x-12">
          <span>👇</span>
          Hier drunter siehst du, ob gerade eine Aktion in deiner Nähe läuft.
          <span>👇</span>
        </div>
      </Callout>

      <SupportCurrPlasmaCampainsList links={links} locations={locations} />
      <AffiliateLinkListItemDate lastUpdated={lastModified} />
    </section>
  );
}
