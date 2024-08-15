import { NextRequest } from "next/server";
import { ImageResponse } from "next/og";
import { branding, siteConfig } from "@/config";
import * as links from "@/config/links";
import { fetchCodewarsChallengeAPI } from "@/lib/apiFetchers";

// docs: https://vercel.com/docs/concepts/functions/edge-functions/og-image-generation
// created on: https://og-playground.vercel.app

export const runtime = "edge"; // if hosted on Vercel

const interBold = fetch(
  new URL("../../../assets/fonts/Inter-Bold.ttf", import.meta.url),
).then((res) => res.arrayBuffer());

export async function GET(req: NextRequest) {
  try {
    const fontData = await interBold;
    const { searchParams } = req.nextUrl;

    // title
    const title = searchParams.get("title");
    if (!title) return new Response("No title provided", { status: 500 });

    const heading = title.split("|");
    const isMultiLineHeading = heading.length > 1;

    // description
    const description = searchParams.get("desc");

    // level
    const isCodeChallenge = searchParams.has("codewars");
    const id = searchParams.get("codewars");
    const codeChallengeData = id ? await fetchCodewarsChallengeAPI(id) : null;
    const level = codeChallengeData?.level;

    //Todo:
    //language
    //read time

    return new ImageResponse(
      (
        <div
          tw="flex relative flex-col p-12 pb-4 w-full h-full items-start text-white/90"
          style={{
            background:
              "linear-gradient(to bottom, #020817 20%, #04112f 60%, #f31260)",
          }}
        >
          {/* branding */}
          <h1 tw="flex p-0 m-0 mb-2 items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="M4 11a9 9 0 0 1 9 9" />
              <path d="M4 4a16 16 0 0 1 16 16" />
              <circle cx="5" cy="19" r="1" />
            </svg>
            <span tw="ml-2 text-2xl">{branding}</span>
          </h1>

          <header tw="flex flex-col my-10">
            <h2 tw="flex m-0 mb-2 text-xl uppercase tracking-tight">
              BLOG POST
            </h2>
            {heading.map((line, i) => (
              <h3
                key={`title-part-${i}`}
                tw={`flex m-0 text-6xl ${!i && isMultiLineHeading && "text-white/65"}`}
              >
                {line}
              </h3>
            ))}
          </header>

          <main tw="flex flex-1 text-2xl p-10 pt-0 pb-5">
            <p>{description}</p>
          </main>

          <footer tw="flex items-end w-full justify-between">
            <div tw="flex justify-end text-xl">{siteConfig.url}</div>
            <div tw="flex flex-col items-end text-xl">
              {links.social.map(({ url }) => {
                const shortUrl = url.replace(/https?:\/\/|www\./gi, "");
                return (
                  <a href={url} key={shortUrl} tw="flex ml-2">
                    {shortUrl}
                  </a>
                );
              })}
            </div>
          </footer>
        </div>
      ),
      {
        width: 1200,
        height: 630,
        emoji: "twemoji",
        fonts: [
          {
            name: "Inter",
            data: fontData,
            style: "normal",
            weight: 700,
          },
        ],
      },
    );
  } catch (error: any) {
    console.log(`${error.message}`);
    return new Response("Failed to generate image", { status: 500 });
  }
}
