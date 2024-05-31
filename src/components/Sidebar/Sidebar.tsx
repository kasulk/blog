type Props = {
  children: React.ReactNode;
};

export function Sidebar({ children }: Props) {
  return (
    <aside
      id="sidebar"
      className={`flex flex-wrap justify-evenly space-x-2 p-6 sm:gap-4 md:min-w-48 md:max-w-60 md:flex-col md:gap-12 md:p-0 lg:min-w-60`}
    >
      {children}
    </aside>
  );
}
