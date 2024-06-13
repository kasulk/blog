import { Link } from "@/components/Links";
import { H2 } from "@/components/Headings";
import { PageHeader } from "@/components";

export default function Home() {
  return (
    <>
      <PageHeader>Salü</PageHeader>

      <div className="text-center">
        <H2>Hier findest du in Kürze</H2>
        <ul className="list-none">
          <li>
            meinen <Link href="/blog">Blog</Link>{" "}
          </li>
          <li>
            mein <Link href="/portfolio">Portfolio</Link>{" "}
          </li>
        </ul>

        <H2>Bis es soweit ist, kannst du</H2>
        <ul className="list-none">
          <li>
            <Link href="/aboutme">hier </Link> mehr über mich erfahren
          </li>
          <li>oder</li>
          <li>
            <Link href="/support">hier</Link> den Blog unterstützen.
          </li>
        </ul>

        <H2>Danke!</H2>
        <p>
          Bis in Bälde, <br />
          Daniel
        </p>
      </div>
    </>
  );
}
