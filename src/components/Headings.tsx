type HeadingProps = {
  className?: string;
  children: React.ReactNode;
};

export function H1({ className, children }: HeadingProps) {
  return (
    <h1 className={`text-3xl sm:text-4xl lg:text-5xl ${className}`}>
      {children}
    </h1>
  );
}

export function H2({ className, children }: HeadingProps) {
  return (
    <h2 className={`mb-6 text-2xl sm:text-3xl lg:text-4xl ${className}`}>
      {children}
    </h2>
  );
}

export function H3({ className, children }: HeadingProps) {
  return (
    <h3 className={`text-xl sm:text-2xl lg:text-3xl ${className}`}>
      {children}
    </h3>
  );
}

export function H4({ className, children }: HeadingProps) {
  return (
    <h4 className={`text-lg sm:text-xl lg:text-2xl ${className}`}>
      {children}
    </h4>
  );
}
