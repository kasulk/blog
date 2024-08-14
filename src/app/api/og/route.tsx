import { NextRequest } from "next/server";
import { ImageResponse } from "next/og";
import { branding, siteConfig } from "@/config";
import * as links from "@/config/links";
import { fetchCodewarsChallengeAPI } from "@/lib/apiFetchers";

// docs: https://vercel.com/docs/concepts/functions/edge-functions/og-image-generation

export const runtime = "edge"; // for hosting on Vercel

const interBold = fetch(
  new URL("../../../assets/fonts/Inter-Bold.ttf", import.meta.url),
).then((res) => res.arrayBuffer());

export async function GET(req: NextRequest) {
  try {
    const fontBold = await interBold;
    const { searchParams } = req.nextUrl;
    const title = searchParams.get("title");

    // level
    const id = searchParams.get("codewars");
    const codeChallengeData = id ? await fetchCodewarsChallengeAPI(id) : null;
    const level = codeChallengeData?.level;

    // description
    const description = searchParams.get("desc");

    //Todo:
    //language
    //read time

    if (!title) return new Response("No title provided", { status: 500 });

    const heading = title.split("|");
    const isMultiLineHeading = heading.length > 1;

    return new ImageResponse(
      (
        // created on: https://og-playground.vercel.app
        <div
          tw="flex relative flex-col p-12 pb-4 w-full h-full items-start text-white/90"
          style={{
            background:
              "linear-gradient(to bottom, #020817 20%, #04112f 60%, #f31260)",
          }}
        >
          {/* branding */}
          <div tw="flex items-center">
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
            <p tw="ml-2 font-bold text-2xl">{branding}</p>
          </div>
          {/* header */}
          <div tw="flex flex-col py-10">
            <div tw="flex text-xl uppercase font-bold tracking-tight font-normal">
              BLOG POST
            </div>
            {heading.map((line, i) => (
              <div
                key={`title-part-${i}`}
                tw={`flex text-[50px] ${!i && isMultiLineHeading && "text-white/65"}`}
              >
                {line}
              </div>
            ))}
          </div>
          {/* content */}
          <div tw="flex flex-1 text-2xl p-10 pt-0 pb-5">
            <p>{description}</p>
          </div>
          {/* footer */}
          <div tw="flex items-end w-full justify-between">
            <div tw="flex justify-end text-xl">{siteConfig.url}</div>
            <div tw="flex flex-col items-end text-xl">
              {links.social.map(({ url }) => {
                const shortUrl = url.replace(/https?:\/\/|www\./gi, "");
                return (
                  <div key={shortUrl} tw="flex ml-2">
                    {shortUrl}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      ),
      {
        width: 1200,
        height: 630,
        fonts: [
          {
            name: "Inter",
            data: fontBold,
            style: "normal",
            weight: 700,
          },
        ],
      },
    );
  } catch (error) {
    return new Response("Failed to generate image", { status: 500 });
  }
}
