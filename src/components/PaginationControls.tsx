"use client";

import { useRouter, useSearchParams } from "next/navigation";

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
  const searchParams = useSearchParams();

  const page = Number(searchParams.get("page") ?? "1");
  const per_page = Number(searchParams.get("per_page") ?? "5");

  const last = Math.ceil(numBlogPosts / per_page);

  return (
    <div className="flex items-center justify-center gap-8">
      <button
        className="bg-blue-500 p-1 px-4 text-white disabled:hover:cursor-not-allowed"
        disabled={!hasPrevPage}
        onClick={() => {
          router.push(`/blog?page=1&per_page=${per_page}`);
        }}
      >
        &lt;&lt;
      </button>
      <button
        className="bg-blue-500 p-1 px-4 text-white disabled:hover:cursor-not-allowed"
        disabled={!hasPrevPage}
        onClick={() => {
          router.push(`/blog?page=${page - 1}&per_page=${per_page}`);
        }}
      >
        &lt;
      </button>
      <div>
        {page} / {last}
      </div>
      <button
        className="bg-blue-500 p-1 px-4 text-white disabled:hover:cursor-not-allowed"
        disabled={!hasNextPage}
        onClick={() => {
          router.push(`/blog?page=${page + 1}&per_page=${per_page}`);
        }}
      >
        &gt;
      </button>
      <button
        className="bg-blue-500 p-1 px-4 text-white disabled:hover:cursor-not-allowed"
        disabled={!hasNextPage}
        onClick={() => {
          router.push(`/blog?page=${last}&per_page=${per_page}`);
        }}
      >
        &gt;&gt;
      </button>
    </div>
  );
}
