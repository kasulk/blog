"use client";

import { useRouter } from "next/navigation";

type Props = {
  children?: React.ReactNode;
};

export function BackButton({ children = "zurück zur Übersicht" }: Props) {
  const router = useRouter();

  return (
    <div className="flex justify-end">
      <button
        onClick={() => router.back()}
        className="mb-2 flex items-center justify-end space-x-1 hover:text-foreground/80"
      >
        <span>&larr;</span>
        <span className="text-right hover:underline">{children}</span>
      </button>
    </div>
  );
}
