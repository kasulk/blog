import { Link } from "@/components/Links";
import { H2, H3, H4 } from "@/components/Headings";
import { PageHeader } from "@/components";

export default function Home() {
  return (
    <>
      <PageHeader>Salü</PageHeader>

      <div className="mb-8 text-center">
        <H2>Hier findest Du</H2>
        <ul className="list-none p-0">
          <li>
            meinen <Link href="/blog">Blog</Link>{" "}
          </li>
          <li>und</li>
          <li>
            mein <Link href="/portfolio">Portfolio</Link>{" "}
          </li>
        </ul>

        <H3>Außerdem kannst Du hier</H3>
        <ul className="list-none p-0">
          <li>
            <Link href="/aboutme">mehr über mich erfahren</Link>
          </li>
          <li>oder</li>
          <li>
            <Link href="/support">den Blog unterstützen</Link>
          </li>
        </ul>

        <H4 className="mt-12">Bis in Bälde!</H4>
        <Link href="/aboutme">Daniel</Link>
      </div>
    </>
  );
}
