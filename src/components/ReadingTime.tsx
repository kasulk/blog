import { getReadingTime } from "@/lib/utils";

type Props = {
  text: string;
  className?: string;
};

export function ReadingTime({ text, className = "" }: Props) {
  return (
    <div className={`text-right ${className}`}>
      Lesedauer: ca. {getReadingTime(text)} min.
    </div>
  );
}
