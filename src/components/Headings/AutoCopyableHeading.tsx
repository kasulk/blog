"use client";

import type { ElementType } from "react";
import type { HeadingProps } from "@/components/Headings";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { Link2Icon } from "@radix-ui/react-icons";
import { createId } from "@/lib/utils";

type AutoCopyableHeadingProps = HeadingProps & {
  as: ElementType;
};

export function AutoCopyableHeading({
  id,
  className,
  children,
  as: Tag,
}: AutoCopyableHeadingProps) {
  const [confirmation, setConfirmation] = useState("");
  const pathname = usePathname();
  id = id || createId(children);

  function handleCopy() {
    const link = `${window.location.origin}${pathname}#${id}`;
    navigator.clipboard.writeText(link).then(() => {
      setConfirmation("Link kopiert!");
      setTimeout(() => setConfirmation(""), 1000);
    });
  }

  return (
    <div
      className="group cursor-pointer"
      onClick={handleCopy}
      title="Link kopieren"
    >
      <Tag
        id={id}
        className={`flex items-center space-x-[0.5em] hover:text-foreground/75 ${className}`}
      >
        <span>{children}</span>
        <Link2Icon className="h-[1em] w-[1em] text-foreground/65 opacity-0 transition-opacity duration-500 hover:text-danger-600 group-hover:opacity-100" />
        <CopyConfirmation confirmation={confirmation} />
      </Tag>
    </div>
  );
}

function CopyConfirmation({ confirmation }: { confirmation: string }) {
  return (
    confirmation && (
      <span className="whitespace-nowrap text-sm text-accent">
        {confirmation}
      </span>
    )
  );
}
