import { H1 } from "@/components";

type Props = {
  children: React.ReactNode;
};

export function PageHeader({ children }: Props) {
  return (
    <header>
      <div className="flex flex-col items-start gap-4 md:flex-row md:justify-between md:gap-8">
        <div className="flex-1 space-x-4">
          <H1>{children}</H1>
        </div>
      </div>
      <hr className="my-8" />
    </header>
  );
}
