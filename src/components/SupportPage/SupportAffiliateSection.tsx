import { H3, Callout } from "@/components";
import { AffiliateLinkList } from "./AffiliateLinkList";

export function SupportAffiliateSection() {
  return (
    <section id="affiliate-links" className="scroll-mt-12">
      <H3>Affiliate-Links</H3>

      <p>
        Affiliate-Links sind Links, bei denen ich eine Provision bekomme wenn du
        über so einen Link kaufst bzw. dich registrierst.
      </p>
      <p>
        Ob du über so einen Link kaufst bzw. dich registrierst, verursacht für
        dich keinerlei Mehrkosten gegenüber dem direkten Kauf/der direkten
        Registrierung. Im Gegenteil. Meist bekommst du auch einen kleinen Bonus.
      </p>
      <p>
        Affiliate-Links auf diesem Blog sind immer{" "}
        <span className="font-bold text-warning">gelb</span>,{" "}
        <u className="font-bold">unterstrichen</u> und mit einen{" "}
        <span className="font-bold">*</span> markiert.
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
      <AffiliateLinkList />
    </section>
  );
}
