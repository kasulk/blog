import { H3, H4, H5 } from "@/components/Headings";
import { ExternalLink } from "../Links";
import { plasma } from "@/config/links";
import { getLastModifiedDateOfFile } from "@/lib/utils/getLastModifiedDateOfFile";
import { SupportLatestPlasmaCampain } from ".";
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

export function SupportDonatePlasmaSection() {
  return (
    <section id="plasma-spenden" className="scroll-mt-12">
      <H3 autoCopyable>Plasma-Spenden</H3>
      <AffiliateLinkListItemCategory
        category={category}
        subCategory={subCategory}
      />
      <p>
        Eine weitere Möglichkeit den Blog, seinen Autor und dich selbst zu
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
        <ExternalLink href={links.locations} title={locations.join("\n")}>
          CSL-Zentren in Deutschland
        </ExternalLink>
        <span> meine Spendernummer (AS062706) an. Das war&apos;s.</span>
      </p>
      <p>
        <span>
          Weitere Infos und ob du fuer eine Plasmaspende in Frage kommst,
          findest du z.B{" "}
        </span>
        <ExternalLink href={links.infos}>hier</ExternalLink>.
      </p>
      <Callout title="Achtung" type="caution" className="my-8">
        Diese Aktionen gibt es leider immer nur in zeitlich unregelmäßigen
        Abständen. Je nach Neu-Spender-Bedarf halt.
        <br />
        <br />
        <p className="text-center">
          👇 Hier drunter siehst du, ob gerade eine Aktion in deiner Nähe läuft.
          👇
        </p>
      </Callout>
      <H5 className="font-bold">
        <span>Aktuelle Aktion in </span>
        <ExternalLink href={links.maps[0].link}>Berlin</ExternalLink>
        <span> bis einschließlich:</span>
      </H5>
      <SupportLatestPlasmaCampain />
      <AffiliateLinkListItemDate lastUpdated={lastModified} />
    </section>
  );
}
