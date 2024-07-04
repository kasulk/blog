import { getReadingTime } from "@/lib/utils";

type Props = {
  text: string;
  className?: string;
};

export function ReadingTime({ text, className = "" }: Props) {
  return (
    <span className={`flex justify-end ${className}`}>
      <span className="hidden sm:flex">Lesedauer: ca.&nbsp;</span>
      <span>{getReadingTime(text)} min.</span>
    </span>
  );
}
