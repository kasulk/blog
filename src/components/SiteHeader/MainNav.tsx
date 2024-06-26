import { NavLink } from ".";
import { capitalize, spacifyCamelCase } from "@/lib/utils";
import { siteConfig } from "@/config";

const { pages } = siteConfig;

export function MainNav() {
  return (
    <nav className="mx-6 flex items-center space-x-4 lg:space-x-6">
      {Object.keys(pages).map((page, i) => {
        const { isActive, showOnNav } = pages[page as keyof typeof pages];
        return (
          isActive &&
          showOnNav && (
            <NavLink
              key={`main-nav-link-${i}`}
              page={page.toLowerCase()}
              className="hidden sm:inline-block md:text-xl"
            >
              {spacifyCamelCase(capitalize(page))}
            </NavLink>
          )
        );
      })}
    </nav>
  );
}
