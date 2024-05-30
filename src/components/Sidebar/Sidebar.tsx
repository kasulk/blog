type Props = {
  children: React.ReactNode;
};

export function Sidebar({ children }: Props) {
  return (
    <aside
      id="sidebar"
      className={`flex max-w-48 justify-start space-x-4 space-y-4 md:flex-col`}
    >
      {children}
    </aside>
  );
}
