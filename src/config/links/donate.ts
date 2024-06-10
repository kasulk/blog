export const donate = [
  {
    name: "PayPal",
    description: "",
    url: "https://www.paypal.com/donate/?hosted_button_id=ZQ5D3AFXDA36L",
    icon: "",
  },
  {
    name: "Buy Me a Coffee",
    description: "",
    url: "https://buymeacoffee.com/schokoladenpo",
    icon: "🥐",
  },
] as const;

export type DonateLink = (typeof donate)[number];
