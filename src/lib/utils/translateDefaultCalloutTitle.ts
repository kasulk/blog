export function translateDefaultCalloutTitle(title: string): string {
  return (
    {
      caution: "Vorsicht",
      note: "Hinweis",
      important: "Wichtig",
      tip: "Tipp",
      warning: "Achtung",
    }[title] || title
  );
}
