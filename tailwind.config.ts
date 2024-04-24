import type { Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "./mdx-components.tsx",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)", ...fontFamily.sans],
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        /// icke: add danger, warning and success semantic colors from nextui
        danger: {
          DEFAULT: "#f31260",
          50: "#310413",
          100: "#610726",
          200: "#920b3a",
          300: "#c20e4d",
          400: "#f31260", // default
          500: "#f54180",
          600: "#f871a0",
          700: "#faa0bf",
          800: "#fdd0df",
          900: "#fee7ef",
        },
        warning: {
          DEFAULT: "#f5a524",
          50: "#312107",
          100: "#62420e",
          200: "#936316",
          300: "#c4841d",
          400: "#f5a524", // default
          500: "#f7b750",
          600: "#f9c97c",
          700: "#fbdba7",
          800: "#fdedd3",
          900: "#fefce8",
        },
        success: {
          DEFAULT: "#17c964",
          50: "#052814",
          100: "#095028",
          200: "#0e793c",
          300: "#12a150",
          400: "#17c964", // default
          500: "#45d483",
          600: "#74dfa2",
          700: "#a2e9c1",
          800: "#d1f4e0",
          900: "#e8faf0",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"), // use prose class to add styles from tailwind/typography
    require("tailwindcss-animate"),
  ],
} satisfies Config;

export default config;
