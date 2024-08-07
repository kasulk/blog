import { getMonthAndYearFromDate } from "@/lib/utils";

type Props = {
  lastUpdated: Date | null;
};

export function AffiliateLinkListItemDate({ lastUpdated }: Props) {
  return (
    <div className="flex justify-end text-sm">
      <span>Stand: {getMonthAndYearFromDate(lastUpdated)}</span>
    </div>
  );
}
