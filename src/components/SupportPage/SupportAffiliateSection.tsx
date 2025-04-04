import { H3 } from "@/components/Headings";
import { Callout } from "@/components";
import { AffiliateLinkList } from "./AffiliateLinkList";

export function SupportAffiliateSection() {
  return (
    <section id="affiliate-links" className="scroll-mt-12">
      <H3 autoCopyable>Affiliate-Links 🛍</H3>

      <p>
        Affiliate-Links sind Links, bei denen ich eine Provision bekomme, wenn
        du etwas über so einen Link kaufst bzw. dich registrierst.
      </p>
      <p>
        Ob du über so einen Link kaufst bzw. dich registrierst, verursacht für
        dich keinerlei Mehrkosten gegenüber dem direkten Kauf/der direkten
        Registrierung. Im Gegenteil. Meist bekommst du auch einen kleinen Bonus.
      </p>
      <p>
        Affiliate-Links auf diesem Blog sind immer{" "}
        <span className="font-bold text-warning">gelb</span>,{" "}
        <u className="font-bold">unterstrichen</u> und mit einem{" "}
        <span className="font-bold">*</span> markiert.
      </p>
      <Callout type="warning" className="text-center font-semibold">
        Bitte schaue dir vorher die jeweils geltenden Teilnahmebedingungen des
        jeweiligen Anbieters an.
      </Callout>
      <Callout type="caution" className="text-center font-semibold">
        Investitionen in Finanzinstrumente bergen Verlustrisiken. Keine
        Anlageberatung!
      </Callout>
      <p>
        Ich empfehle nur, was ich auch selber nutze und guten Gewissens
        empfehlen kann und möchte.
      </p>

      <p>
        Hier findest du eine Liste mit Affiliate-Links (alphabetisch sortiert):
      </p>
      <AffiliateLinkList />
    </section>
  );
}
