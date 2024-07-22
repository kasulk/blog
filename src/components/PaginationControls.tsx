"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { CategoryBadge } from "./CategoryBadge";
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  PinLeftIcon,
  PinRightIcon,
} from "@radix-ui/react-icons";

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

  const buttonClass = "sm:py-0 sm:px-4 disabled:hover:cursor-not-allowed";
  const boxClass = "flex text-xs sm:text-sm";

  function getNewSearchParams(newPage: number): string {
    return `${pathname}?page=${newPage}&per_page=${per_page}`;
  }

  return (
    <div className="flex items-center justify-center">
      {numBlogPosts > 10 && (
        <div className="flex h-0 w-full flex-wrap justify-center gap-[2%] sm:gap-4">
          <div className={`${boxClass} order-1 sm:order-1 `}>
            <CategoryBadge
              className={buttonClass}
              disabled={!hasPrevPage}
              onClick={() => router.push(getNewSearchParams(1))}
            >
              <PinLeftIcon />
            </CategoryBadge>
          </div>
          <div className={`${boxClass} order-2 sm:order-2`}>
            <CategoryBadge
              className={buttonClass}
              disabled={!hasPrevPage}
              onClick={() => router.push(getNewSearchParams(page - 1))}
            >
              <ChevronLeftIcon />
            </CategoryBadge>
          </div>
          <div
            className={`${boxClass} order-5 mt-1 w-full items-center justify-center px-4 sm:order-3 sm:mt-auto sm:w-auto sm:max-w-sm`}
          >
            <div className="p-1 px-4">
              {page} / {numPages}
            </div>
          </div>
          <div className={`${boxClass} order-3 sm:order-4`}>
            <CategoryBadge
              className={buttonClass}
              disabled={!hasNextPage}
              onClick={() => router.push(getNewSearchParams(page + 1))}
            >
              <ChevronRightIcon />
            </CategoryBadge>
          </div>
          <div className={`${boxClass} order-4 sm:order-5`}>
            <CategoryBadge
              className={buttonClass}
              disabled={!hasNextPage}
              onClick={() => router.push(getNewSearchParams(numPages))}
            >
              <PinRightIcon />
            </CategoryBadge>
          </div>
        </div>
      )}
    </div>
  );
}
