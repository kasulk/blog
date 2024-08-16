/* eslint-disable @next/next/no-img-element */
import { NextRequest } from "next/server";
import { ImageResponse } from "next/og";
import { branding, siteConfig } from "@/config";
import * as links from "@/config/links";
// import { fetchCodewarsChallengeAPI } from "@/lib/apiFetchers";
import { filterObjProperties } from "@/lib/utils";

// docs: https://vercel.com/docs/concepts/functions/edge-functions/og-image-generation
// play: https://og-playground.vercel.app

type ObjWithArrayBuffers = { [key: string]: ArrayBuffer };

export const runtime = "edge"; // if hosted on Vercel

const interBoldPromise = fetch(
  new URL("../../../assets/fonts/Inter-Bold.ttf", import.meta.url),
).then((res) => res.arrayBuffer());

// loop (i.e. dynamic url) not working with fetch here, hence individual fetches...
const jsIconPromise = fetch(
  new URL("../../../assets/img/og-icons/js.png", import.meta.url),
).then((res) => res.arrayBuffer());
const tsIconPromise = fetch(
  new URL("../../../assets/img/og-icons/ts.png", import.meta.url),
).then((res) => res.arrayBuffer());

const iconPromises = {
  JavaScript: jsIconPromise,
  TypeScript: tsIconPromise,
};

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = req.nextUrl;

    const title = searchParams.get("title");
    if (!title) return new Response("No title provided", { status: 500 });

    const description = searchParams.get("desc");
    const language = searchParams.get("lang") || "";
    // const id = searchParams.get("codewars");

    // heading
    const heading = title.split("|");
    const isMultiLineHeading = heading.length > 1;
    // icons
    const filteredIconPromises = filterObjProperties(iconPromises, [language]);
    const iconBuffers = await resolveIconPromises(filteredIconPromises);
    // font
    const fontBuffer = await interBoldPromise;
    // level
    // const codeChallengeData = id ? await fetchCodewarsChallengeAPI(id) : null;
    // const level = codeChallengeData?.level;

    // Todo:
    // read time

    return new ImageResponse(
      (
        <div
          tw="flex relative flex-col p-12 pb-4 w-full h-full items-start text-white/90"
          style={{
            background:
              "linear-gradient(to bottom, #020817 20%, #04112f 60%, #f31260)",
          }}
        >
          <div tw={"flex w-full h-[64px] items-start justify-between"}>
            {/* branding */}
            <h1 tw="flex p-0 m-0 items-center">
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
            {/* icons */}
            <div tw="flex justify-end">
              {Object.entries(iconBuffers).map(([key, value]) => (
                <img
                  key={`icon-${key}`}
                  tw="ml-4"
                  width={64}
                  height={64}
                  src={`data:image/png;base64,${Buffer.from(value).toString("base64")}`}
                  alt=""
                />
              ))}
            </div>
          </div>

          <header tw="flex flex-col mt-8 mb-10">
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

          <main tw="flex flex-1 flex-col text-2xl p-10 pt-0 pb-5">
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
            data: fontBuffer,
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

/**
 * Resolves a set of promises that return ArrayBuffers and returns an object with the same keys and resolved values.
 *
 * @param {Object} iconPromises - An object where the keys are strings and the values are promises that resolve to ArrayBuffers.
 * @returns {Promise<Object>} A promise that resolves to an object containing the same keys as the input, but with the promises replaced by their resolved ArrayBuffer values.
 *
 * @example
 * const iconPromises = {
 *   icon1: fetchIcon('icon1.png'),
 *   icon2: fetchIcon('icon2.png'),
 * };
 * const resolvedIcons = await resolveIconPromises(iconPromises);
 * console.log(resolvedIcons); // { icon1: ArrayBuffer, icon2: ArrayBuffer }
 */
async function resolveIconPromises(iconPromises: {
  [key: string]: Promise<ArrayBuffer>;
}): Promise<{ [key: string]: ArrayBuffer }> {
  //
  const resolvedEntries = await Promise.all(
    Object.entries(iconPromises).map(async ([key, promise]) => [
      key,
      await promise,
    ]),
  );

  return Object.fromEntries(resolvedEntries);
}
