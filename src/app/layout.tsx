import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import { cn } from "@/lib/utils";
import "@/styles/globals.css";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { Providers } from "./providers";
import { siteConfig } from "@/config";

if (process.env.NODE_ENV === "development") require("@/styles/devOnly.css");

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: `Salü | ${siteConfig.name}`,
  description: siteConfig.description,
  metadataBase: new URL(process.env.NEXT_APP_URL ?? siteConfig.url),
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light", color: "white " },
    { media: "(prefers-color-scheme: dark", color: "black" },
  ],
};

type RootLayoutProps = Readonly<{
  children: React.ReactNode;
}>;

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body
        className={cn("min-h-screen font-sans antialiased", inter.variable)}
      >
        <Providers>
          <div className="relative flex min-h-dvh flex-col">
            <SiteHeader />
            <main className="container prose mx-auto max-w-6xl py-6 dark:prose-invert">
              {children}
            </main>
            <SiteFooter />
          </div>
        </Providers>
      </body>
    </html>
  );
}
