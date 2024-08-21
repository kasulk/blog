type Props = {
  time: number;
  className?: string;
};

export function ReadingTime({ time, className = "" }: Props) {
  return (
    time && (
      <span className={`flex justify-end ${className}`}>
        <span className="hidden sm:flex">Lesedauer: ca.&nbsp;</span>
        <span>{time} min.</span>
      </span>
    )
  );
}
