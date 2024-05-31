"use client";

import { useState } from "react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";
import { Branding, NavLink } from ".";
import { siteConfig } from "@/config";
import { capitalize, spacifyCamelCase } from "@/lib/utils";

const { pages } = siteConfig;

export function MobileNav() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="flex items-center">
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild>
          <Button
            variant="ghost"
            className="w-10 px-0 hover:text-white sm:hidden"
          >
            <HamburgerMenuIcon className="h-5 w-5" />
            <span className="sr-only">Toggle Menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="right" className="bg-gradient">
          <NavLink
            onOpenChange={setOpen}
            page="/"
            className="flex items-center "
          >
            <Branding />
          </NavLink>
          <div className="mt-12 flex flex-col space-y-8">
            {Object.keys(pages).map((page, i) => {
              const { isActive, showOnNav } = pages[page as keyof typeof pages];
              return (
                isActive &&
                showOnNav && (
                  <NavLink
                    key={`mobile-nav-link-${i}`}
                    onOpenChange={setOpen}
                    page={page.toLowerCase()}
                    className="text-xl"
                  >
                    {spacifyCamelCase(capitalize(page))}
                  </NavLink>
                )
              );
            })}
          </div>
        </SheetContent>
      </Sheet>
    </nav>
  );
}
