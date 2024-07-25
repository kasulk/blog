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

  const boxClass = "flex text-xs sm:text-sm";
  const badgeClass =
    "flex items-center justify-center sm:w-[50px] w-[40px] sm:py-0 sm:px-4";
  const hideIfNoPrev = !hasPrevPage ? "invisible" : "";
  const hideIfNoNext = !hasNextPage ? "invisible" : "";

  function getNewSearchParams(newPage: number): string {
    return `${pathname}?page=${newPage}&per_page=${per_page}`;
  }

  return (
    <div className="flex items-center justify-center">
      {numBlogPosts > 10 && (
        <div className="flex h-0 w-full flex-wrap justify-center gap-[2%] sm:gap-4">
          <div className={`${boxClass} order-1 sm:order-1 ${hideIfNoPrev}`}>
            <CategoryBadge
              className={badgeClass}
              onClick={() => router.push(getNewSearchParams(1))}
            >
              {hasPrevPage && (
                <span className="sr-only">Gehe zur ersten Seite</span>
              )}
              <PinLeftIcon />
            </CategoryBadge>
          </div>
          <div className={`${boxClass} order-2 sm:order-2 ${hideIfNoPrev}`}>
            <CategoryBadge
              className={badgeClass}
              onClick={() => router.push(getNewSearchParams(page - 1))}
            >
              {hasPrevPage && (
                <span className="sr-only">Gehe eine Seite zurück</span>
              )}
              <ChevronLeftIcon />
            </CategoryBadge>
          </div>
          <div
            className={`${boxClass} order-5 mt-1 w-full items-center justify-center px-4 sm:order-3 sm:mt-auto sm:w-auto sm:max-w-sm`}
          >
            <div className="flex items-center justify-center p-1 px-4 sm:w-auto">
              <div className="flex w-[60px] items-center justify-center">
                {page} / {numPages}
              </div>
            </div>
          </div>
          <div className={`${boxClass} order-3 sm:order-4 ${hideIfNoNext}`}>
            <CategoryBadge
              className={badgeClass}
              onClick={() => router.push(getNewSearchParams(page + 1))}
            >
              {hasNextPage && (
                <span className="sr-only">Gehe eine Seite vor</span>
              )}
              <ChevronRightIcon />
            </CategoryBadge>
          </div>
          <div className={`${boxClass} order-4 sm:order-5 ${hideIfNoNext}`}>
            <CategoryBadge
              className={badgeClass}
              onClick={() => router.push(getNewSearchParams(numPages))}
            >
              {hasNextPage && (
                <span className="sr-only">Gehe zur letzten Seite</span>
              )}
              <PinRightIcon />
            </CategoryBadge>
          </div>
        </div>
      )}
    </div>
  );
}
