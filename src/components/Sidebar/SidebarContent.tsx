import { H3 } from "../Headings";

type Props = {
  title: string;
  children: React.ReactNode;
};

export async function SidebarContent({ title, children }: Props) {
  return (
    <section className="flex min-w-60 max-w-60 flex-col justify-start sm:max-w-36 md:min-w-48">
      <H3 className="mt-0 md:font-normal">{title}</H3>
      {children}
    </section>
  );
}
