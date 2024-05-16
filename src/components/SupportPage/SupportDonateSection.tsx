import Image from "next/image";
import { H3, Link } from "@/components";
import { links } from "@/config";
import { slugify } from "@/lib/utils";
import PayPalIcon from "@/assets/img/pp144.png";

export function SupportDonateSection() {
  return (
    <section id="spenden" className="scroll-mt-12">
      <H3>Spenden</H3>

      <p>
        Eine Möglichkeit den Blog zu unterstützen sind Spenden. Spenden kannst
        du z.B. senden über:
      </p>

      <ol>
        {links.donate.map(({ name, url, icon }) => (
          <li key={`${slugify(name)}-link`} className="flex items-center">
            <Link href={url}>{name}</Link>
            <div className="mx-2">
              {name === "PayPal" ? (
                <Image
                  src={PayPalIcon}
                  alt={`${name}-Icon`}
                  width={16}
                  height={16}
                  className="my-0"
                />
              ) : (
                icon
              )}
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
