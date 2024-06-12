const umlautMap: { [key: string]: string } = {
  ä: "ae",
  ö: "oe",
  ü: "ue",
  Ä: "Ae",
  Ö: "Oe",
  Ü: "Ue",
  ß: "ss",
};

export function replaceUmlauts(str: string): string {
  return str
    .split("")
    .map((char) => umlautMap[char] || char)
    .join("");
}
