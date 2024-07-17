type Props = {
  date: string | Date;
  weekday?: boolean;
};

export function DateFormatter({ date, weekday = false }: Props) {
  return <>{formatDate(date, weekday)}</>;
}

const months: string[] = [
  "Januar",
  "Februar",
  "März",
  "April",
  "Mai",
  "Juni",
  "Juli",
  "August",
  "September",
  "Oktober",
  "November",
  "Dezember",
];

const weekdays: string[] = [
  "Sonntag",
  "Montag",
  "Dienstag",
  "Mittwoch",
  "Donnerstag",
  "Freitag",
  "Samstag",
];

function formatDate(date: string | Date, includeWeekday: boolean): string {
  const dateObj = typeof date === "string" ? new Date(date) : date;
  const day = dateObj.getDate();
  const month = months[dateObj.getMonth()];
  const year = dateObj.getFullYear();
  const weekdayString = weekdays[dateObj.getDay()];

  return includeWeekday
    ? `${weekdayString}, ${day}. ${month} ${year}`
    : `${day}. ${month} ${year}`;
}
