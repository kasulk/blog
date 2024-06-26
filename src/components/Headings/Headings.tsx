import { AutoCopyableHeading } from "./AutoCopyableHeading";

export type HeadingProps = {
  id?: string;
  className?: string;
  autoCopyable?: boolean;
  children: React.ReactNode;
};

export function H1({ id, className = "", children }: HeadingProps) {
  return (
    <h1 id={id} className={`text-3xl sm:text-4xl lg:text-5xl ${className}`}>
      {children}
    </h1>
  );
}

export function H2({
  id,
  className = "",
  autoCopyable = false,
  children,
}: HeadingProps) {
  className = `mb-6 text-2xl sm:text-3xl lg:text-4xl ${className}`;

  return (
    <>
      {autoCopyable ? (
        <AutoCopyableHeading as="h2" id={id} className={className}>
          {children}
        </AutoCopyableHeading>
      ) : (
        <h2 id={id} className={className}>
          {children}
        </h2>
      )}
    </>
  );
}

export function H3({
  id,
  className = "",
  autoCopyable = false,
  children,
}: HeadingProps) {
  className = `text-xl sm:text-2xl lg:text-3xl ${className}`;

  return (
    <>
      {autoCopyable ? (
        <AutoCopyableHeading as="h3" id={id} className={className}>
          {children}
        </AutoCopyableHeading>
      ) : (
        <h3 id={id} className={className}>
          {children}
        </h3>
      )}
    </>
  );
}

export function H4({
  id,
  className = "",
  autoCopyable = false,
  children,
}: HeadingProps) {
  className = `text-lg sm:text-xl lg:text-2xl ${className}`;

  return (
    <>
      {autoCopyable ? (
        <AutoCopyableHeading as="h4" id={id} className={className}>
          {children}
        </AutoCopyableHeading>
      ) : (
        <h4 id={id} className={className}>
          {children}
        </h4>
      )}
    </>
  );
}

export function H5({
  id,
  className = "",
  autoCopyable = false,
  children,
}: HeadingProps) {
  className = `text-base sm:text-lg lg:text-xl ${className}`;

  return (
    <>
      {autoCopyable ? (
        <AutoCopyableHeading as="h5" id={id} className={className}>
          {children}
        </AutoCopyableHeading>
      ) : (
        <h5 id={id} className={className}>
          {children}
        </h5>
      )}
    </>
  );
}

export function H6({
  id,
  className = "",
  autoCopyable = false,
  children,
}: HeadingProps) {
  className = `text-sm sm:text-base lg:text-lg ${className}`;

  return (
    <>
      {autoCopyable ? (
        <AutoCopyableHeading as="h6" id={id} className={className}>
          {children}
        </AutoCopyableHeading>
      ) : (
        <h6 id={id} className={className}>
          {children}
        </h6>
      )}
    </>
  );
}
