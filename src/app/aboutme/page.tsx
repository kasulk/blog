import { Metadata } from "next";
import { Link, ExternalLink } from "@/components/Links";
import { PageHeader, SocialLinks } from "@/components";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { siteConfig } from "@/config";
import { getInitials, getSocialUrl } from "@/lib/utils";
import { createLinksJoinedWithCommasAndOrAnd } from "@/lib/utils/createLinksJoinedWithCommasAndOrAnd";

export const metadata: Metadata = {
  title: `About Me | ${siteConfig.name}`,
  description: "Einige Informationen über mich",
};

const { owner, email, categories } = siteConfig;
const vgWortCode = "347c1cd684b448f8a709c8570bd55340";

export default async function AboutMePage() {
  return (
    <>
      <PageHeader vgWortCode={vgWortCode}>About Me</PageHeader>

      <div className="flex flex-col items-center gap-8 md:flex-row-reverse md:items-start md:gap-16">
        <div className="flex min-w-52 max-w-52 flex-col items-center gap-2 py-4">
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
            Web Developer | Autor
          </p>
          <SocialLinks />
        </div>
        <div className="flex flex-col space-y-6 py-4 text-lg text-muted-foreground">
          <p className="m-0">
            Ich heiße Daniel und bin verantwortlich für das was Du hier lesen
            musst. Im Folgenden findest Du ein bisschen Info über mich. Danach
            noch ein bisschen Lorem Ipsum, damit es etwas voller aussieht.
          </p>
          <p>
            2022 habe ich mich endlich entschlossen JavaScript zu lernen. Nach
            ein paar Online-Kursen hatte ich Anfang 2023 die Chance an einem
            12-wöchigen “Fullstack”-Bootcamp in Berlin teilzunehmen.
            Schwerpunkte waren React, Next.js und MongoDB.
          </p>
          <p>
            Nachdem ich noch ein bisschen mein Bootcamp-Abschluss-Projekt
            aufgehübscht hatte (und ca. 650{" "}
            <ExternalLink href={getSocialUrl("codewars")}>
              Code-Challenges
            </ExternalLink>{" "}
            später), habe ich mit diesem Blog begonnen. Das Projekt-Tagebuch
            dazu findest Du{" "}
            <Link href="/blog/projekt-tagebuch-blog-tag-1">hier</Link>.
          </p>
          <p>
            Neben dem Coden kann ich noch ganz gut mit Geld umgehen und mich
            selbst ganz gut geißeln. Darum wirst Du hier hauptsächlich
            Geschwafel über Finanzen, Coden und Inspiration bzw. Motivation
            finden. Vielleicht auch mal was Sportliches.
          </p>
          <p>Der Rest ist noch recht lose und ich schau mal wo es hingeht.</p>
          <p>
            Ich hab also erst mal {categories.length} Kategorien eingerichtet:{" "}
            {createLinksJoinedWithCommasAndOrAnd(categories)}. Was Coden angeht,
            findest Du meinen aktuellen Tech-Stack außerdem auf{" "}
            <ExternalLink href={getSocialUrl("github")}>GitHub</ExternalLink>.
          </p>
          <p>
            Wenn Du eine Frage hast, von der Du überzeugt bist, ich könnte sie
            qualifiziert beantworten,{" "}
            <a
              href={`mailto:${email.questions}?subject=Öööhm, was frag' ich denn...?`}
            >
              schreib mir
            </a>{" "}
            gerne. Wenn meine Antwort für viele Leute hilfreich sein könnte,
            gibt’s vielleicht sogar ‘nen neuen Blog-Artikel.
          </p>
          <p>
            Wenn Du meine Arbeit (finanziell) unterstützen möchtest, findest Du
            jederzeit Inspiration dazu, wenn Du auf das
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
          <p>Sieht doch gleich viel voller aus, wa?! Find ick ooch.</p>
          <p>So, und jetzt viel Spaß beim lesen, lesen, lesen!</p>
          <p className="flex flex-col">
            <span>Beste Grüße aus Berlin,</span>
            <span className="italic line-through">Icke</span>
            <span>Daniel</span>
          </p>
          <p>&nbsp;</p>
          <p>
            Ach so! Ich hab auch eine Radio-Comedy geschrieben - mehr dazu zu
            gegebener Zeit...
          </p>
        </div>
      </div>
    </>
  );
}
