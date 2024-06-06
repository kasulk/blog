import { H1, VGWortMark } from "@/components";

type Props = {
  className?: string;
  children: React.ReactNode;
  vgWortCode?: string;
};

export function PageHeader({ className, children, vgWortCode }: Props) {
  return (
    <header>
      <div className="flex flex-col items-start gap-4 md:flex-row md:justify-between md:gap-8">
        <div className="flex-1 space-x-4">
          <H1 className={className}>{children}</H1>
        </div>
      </div>
      <hr className="my-8" />
      <VGWortMark code={vgWortCode} />
    </header>
  );
}
