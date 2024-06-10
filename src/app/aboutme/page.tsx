import { Metadata } from "next";
// import { Link, LinkExternal, PageHeader } from "@/components";
import { Link, PageHeader } from "@/components";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { siteConfig } from "@/config";
import { getInitials, getSocialUrl } from "@/lib/utils";
import { ExternalLink } from "@/components/Links/ExternalLink";

export const metadata: Metadata = {
  title: `About Me | ${siteConfig.name}`,
  description: "Einige Informationen über mich",
};

const { owner } = siteConfig;
const vgWortCode = "347c1cd684b448f8a709c8570bd55340";

export default async function AboutMePage() {
  return (
    <>
      <PageHeader vgWortCode={vgWortCode}>About Me</PageHeader>

      <div className="flex flex-col items-center gap-8 md:flex-row-reverse md:items-start md:gap-16">
        <div className="flex min-w-48 max-w-48 flex-col gap-2 py-4">
          <Avatar className="h-48 w-48">
            <AvatarImage
              src="/img/avatar.jpg"
              alt={owner}
              className="m-0"
              title="Jip. Dit bin icke — von meiner Schokoladenseite!"
            />
            <AvatarFallback className="bg-danger/40 text-6xl">
              {getInitials(owner)}
            </AvatarFallback>
          </Avatar>
          <h2 className="mb-0 mt-8 break-words text-center text-2xl font-bold">
            {owner}
          </h2>
          <p className="break-words text-center text-muted-foreground">
            Web Developer
          </p>
        </div>
        <div className="flex flex-col space-y-6 py-4 text-lg text-muted-foreground">
          <p className="m-0">
            Ich heiße Daniel und bin verantwortlich für das was hier geschrieben
            steht. Im Folgenden findet ihr ein bisschen Info über mich. Danach
            noch ein bisschen Lorem Ipsum, damit es nicht so leer aussieht.
          </p>
          <p>
            2022 habe ich mich endlich entschlossen JavaScript zu lernen. Nach
            ein paar Online-Kursen hatte ich Anfang 2023 die Chance an einem
            12-wöchigen “Fullstack”-Bootcamp in Berlin teilzunehmen.
            Schwerpunkte waren React, Next.js und MongoDB.
          </p>
          <p>
            Nachdem ich noch ein bisschen mein Bootcamp-Abschluss-Projekt
            aufgehübscht hatte und ca. 650{" "}
            {/* <a href={getSocialUrl("Codewars")}>Coding-Challenges</a> später, */}
            <ExternalLink href={getSocialUrl("Codewars")}>
              Coding-Challenges
            </ExternalLink>{" "}
            später, habe ich mit diesem Blog begonnen. Das Projekt-Tagebuch dazu
            findest du{" "}
            <Link href="/blog/projekt-tagebuch-blog-tag-1">hier</Link>.
          </p>
          <p>
            Neben dem Coden kann ich noch ganz gut mit Geld umgehen und mich
            selbst ganz gut geißeln. Darum wirst du hier hauptsächlich
            Geschwafel über Finanzen, Coden und Inspiration bzw. Motivation
            finden. Vielleicht auch mal was Sportliches.
          </p>
          <p>Der Rest ist noch recht lose und ich schau mal wo es hingeht.</p>
          <p>
            Ich hab also erst mal 4 Kategorien eingerichtet:{" "}
            <Link href="/category/finanzen">Finanzen</Link>,{" "}
            <Link href="/category/coden">Coden</Link>,{" "}
            <Link href="/category/inspiration">Inspiration</Link> und{" "}
            <Link href="/category/verschiedenes">Verschiedenes</Link>. Was Coden
            angeht, findest du meinen aktuellen Tech-Stack außerdem auf GitHub.
          </p>
          <p>
            Wenn du eine Frage hast, von der du überzeugt bist, ich könnte sie
            qualifiziert beantworten, schreib mir gerne. Wenn meine Antwort für
            viele Leute hilfreich sein könnte, gibt’s vielleicht sogar ‘nen
            neuen Blog-Artikel.
          </p>
          <p>
            Wenn du meine Arbeit (finanziell) unterstützen möchtest, findest du
            jederzeit Inspiration dazu, wenn du auf das
            <Link href="/support" className="mx-2">
              ♥
            </Link>
            <span className="sr-only">Herz</span>
            klickst.
          </p>
          <p>
            So, jetzt das versprochene Lorem Ipsum: Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Donec gravida dictum eros nec ultrices.
            Morbi nisi lectus, viverra quis venenatis sed, dignissim eget massa.
            Cras tellus dui, varius ut nullam.
          </p>
          <p>Sieht doch gleich viel voller aus, oder?! Find ich auch.</p>
          <p>So, und jetzt viel Spaß beim lesen, lesen, lesen!</p>
          <p className="flex flex-col">
            <span>Beste Grüße aus Berlin,</span>
            <span>Daniel</span>
          </p>
        </div>
      </div>
    </>
  );
}
