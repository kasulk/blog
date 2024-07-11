type Props = {
  date: string;
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

function formatDate(dateString: string, includeWeekday: boolean): string {
  const dateObj = new Date(dateString);
  const day = dateObj.getDate();
  const month = months[dateObj.getMonth()];
  const year = dateObj.getFullYear();
  const weekdayString = weekdays[dateObj.getDay()];

  return includeWeekday
    ? `${weekdayString}, ${day}. ${month} ${year}`
    : `${day}. ${month} ${year}`;
}
