"use client";

import { ElementType, useState } from "react";
import { usePathname } from "next/navigation";
import { createId } from "@/lib/utils";
import { Link2Icon } from "@radix-ui/react-icons";

type HeadingProps = {
  id?: string;
  className?: string;
  children: React.ReactNode;
};

type CopyableHeadingProps = HeadingProps & {
  as: ElementType;
};

export function H1({ id, className = "", children }: HeadingProps) {
  return (
    <h1 id={id} className={`text-3xl sm:text-4xl lg:text-5xl ${className}`}>
      {children}
    </h1>
  );
}

export function H2({ id, className = "", children }: HeadingProps) {
  return (
    <CopyableHeading
      as="h2"
      id={id}
      className={`mb-6 mt-0 text-2xl sm:text-3xl lg:text-4xl ${className}`}
    >
      {children}
    </CopyableHeading>
  );
}

export function H3({ id, className = "", children }: HeadingProps) {
  return (
    <CopyableHeading
      as="h3"
      id={id}
      className={`text-xl sm:text-2xl lg:text-3xl ${className}`}
    >
      {children}
    </CopyableHeading>
  );
}

export function H4({ id, className = "", children }: HeadingProps) {
  return (
    <CopyableHeading
      as="h4"
      id={id}
      className={`text-lg sm:text-xl lg:text-2xl ${className}`}
    >
      {children}
    </CopyableHeading>
  );
}

export function H5({ id, className = "", children }: HeadingProps) {
  return (
    <CopyableHeading
      as="h5"
      id={id}
      className={`text-base sm:text-lg lg:text-xl ${className}`}
    >
      {children}
    </CopyableHeading>
  );
}

export function H6({ id, className = "", children }: HeadingProps) {
  return (
    <CopyableHeading
      as="h6"
      id={id}
      className={`text-sm sm:text-base lg:text-lg ${className}`}
    >
      {children}
    </CopyableHeading>
  );
}

function CopyableHeading({
  id,
  className,
  children,
  as: Tag,
}: CopyableHeadingProps) {
  const [tooltip, setTooltip] = useState("");
  const pathname = usePathname();
  id = id || createId(children);

  function handleCopy() {
    const link = `${window.location.origin}${pathname}#${id}`;
    navigator.clipboard.writeText(link).then(() => {
      setTooltip("Link kopiert!");
      setTimeout(() => setTooltip(""), 1000);
    });
  }

  return (
    <div
      className="group cursor-pointer"
      onClick={handleCopy}
      title="Link kopieren"
    >
      <Tag id={id} className={`flex items-center space-x-[0.5em] ${className}`}>
        <span>{children}</span>
        <Link2Icon className="h-[1em] w-[1em] opacity-0 transition-opacity duration-500 hover:text-accent group-hover:opacity-100" />
        <Tooltip tooltip={tooltip} />
      </Tag>
    </div>
  );
}

function Tooltip({ tooltip }: { tooltip: string }) {
  return (
    tooltip && (
      <span className="whitespace-nowrap text-sm text-accent">{tooltip}</span>
    )
  );
}
