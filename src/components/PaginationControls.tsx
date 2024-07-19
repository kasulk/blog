"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";

type Props = {
  numBlogPosts: number;
  hasPrevPage: boolean;
  hasNextPage: boolean;
};

export function PaginationControls({
  numBlogPosts,
  hasPrevPage,
  hasNextPage,
}: Props) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const page = Number(searchParams.get("page") ?? "1");
  const per_page = Number(searchParams.get("per_page") ?? "5");

  const numPages = Math.ceil(numBlogPosts / per_page);

  const className =
    "bg-blue-500 p-1 px-4 text-white disabled:hover:cursor-not-allowed";

  function getNewSearchParams(newPage: number): string {
    return `${pathname}?page=${newPage}&per_page=${per_page}`;
  }

  //   return (
  //     <div className="flex flex-col items-center justify-center gap-2 sm:flex-row sm:gap-8">
  //       {/* <div className="relative flex w-1/3 items-center justify-center gap-8"> */}
  //       <button
  //         className={className}
  //         disabled={!hasPrevPage}
  //         onClick={() => router.push(getNewSearchParams(1))}
  //       >
  //         &lt;&lt;
  //       </button>
  //       <button
  //         className={className}
  //         disabled={!hasPrevPage}
  //         onClick={() => router.push(getNewSearchParams(page - 1))}
  //       >
  //         &lt;
  //       </button>
  //       <div>
  //         {page} / {numPages}
  //       </div>
  //       <button
  //         className={className}
  //         disabled={!hasNextPage}
  //         onClick={() => router.push(getNewSearchParams(page + 1))}
  //       >
  //         &gt;
  //       </button>
  //       <button
  //         className={className}
  //         disabled={!hasNextPage}
  //         onClick={() => router.push(getNewSearchParams(numPages))}
  //       >
  //         &gt;&gt;
  //       </button>
  //       {/* <div className="order-first mx-auto"> */}
  //       {/* <div className="absolute left-1/2 -translate-x-1/2 transform px-4"> */}
  //       {/* <button> */}
  //       {/* {page} / {numPages} */}
  //       {/* </button> */}
  //       {/* </div> */}
  //     </div>
  //   );
  return (
    // notloesung
    // <div className="flex min-h-screen items-center justify-center bg-gray-100">
    //   <div className="grid grid-cols-3 gap-4 sm:grid-cols-5">
    //     <div className="order-4 bg-blue-500 p-4 text-white sm:order-1">1</div>
    //     <div className="order-1 bg-green-500 p-4 text-white sm:order-2">2</div>
    //     <div className="order-2 bg-red-500 p-4 text-white sm:order-3">3</div>
    //     <div className="order-3 bg-yellow-500 p-4 text-white sm:order-4">4</div>
    //     <div className="order-6 bg-purple-500 p-4 text-white sm:order-5">5</div>
    //     <div className="order-5 bg-slate-500 p-4 text-white sm:hidden"></div>
    //   </div>
    // </div>
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <div className="flex w-full flex-wrap justify-center gap-4">
        {/* <div className="order-4 w-1/4 bg-green-500 p-4 text-white sm:order-1 sm:w-auto"> */}
        <div className="order-4 flex w-1/4 justify-end bg-green-500 text-white sm:order-1 sm:w-auto">
          <button
            className={className}
            disabled={!hasPrevPage}
            onClick={() => router.push(getNewSearchParams(1))}
          >
            &lt;&lt;
          </button>
        </div>
        {/* <div className="w-1/4i order-1 bg-red-500 p-4 text-white sm:order-2 sm:w-auto"> */}
        <div className="order-1 flex w-1/4 justify-end bg-red-500 text-white sm:order-2 sm:w-auto">
          <button
            className={className}
            disabled={!hasPrevPage}
            onClick={() => router.push(getNewSearchParams(page - 1))}
          >
            &lt;
          </button>
        </div>
        {/* <div className="order-2 w-1/4 bg-purple-500 p-4 text-white sm:order-3 sm:w-auto"> */}
        <div className="order-2 flex w-1/4 items-center justify-center bg-purple-500 px-4 text-white sm:order-3 sm:w-auto">
          <div>
            {page} / {numPages}
          </div>
        </div>
        {/* <div className="order-3 w-1/4 bg-red-500 p-4 text-white sm:order-4 sm:w-auto"> */}
        <div className="order-3 flex w-1/4 justify-start bg-red-500 text-white sm:order-4 sm:w-auto">
          <button
            className={className}
            disabled={!hasNextPage}
            onClick={() => router.push(getNewSearchParams(page + 1))}
          >
            &gt;
          </button>
        </div>
        {/* <div className="order-5 w-1/4 bg-green-500 p-4 text-white sm:order-5 sm:w-auto"> */}
        <div className="order-5 flex w-1/4 justify-start bg-green-500 text-white sm:order-5 sm:w-auto">
          <button
            className={className}
            disabled={!hasNextPage}
            onClick={() => router.push(getNewSearchParams(numPages))}
          >
            &gt;&gt;
          </button>
        </div>
      </div>
    </div>
  );
}
