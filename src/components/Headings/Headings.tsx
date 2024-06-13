import { CopyableHeading } from "./CopyableHeading";

export type HeadingProps = {
  id?: string;
  className?: string;
  children: React.ReactNode;
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
