import Link from "next/link";
import { links } from "@/config";
import { slugify } from "@/lib/utils";

export function SupportDonateSection() {
  return (
    <section id="spenden">
      <h3>Spenden</h3>
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
    </section>
  );
}
