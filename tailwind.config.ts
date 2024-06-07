import type { Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

const config = {
  darkMode: ["class"],
  content: ["./src/**/*.{ts,tsx}"],
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
      // Binding element 'theme' implicitly has an 'any' type.
      // => tw-bug-workaround: https://github.com/tailwindlabs/tailwindcss-typography/issues/335
      typography: (theme: any) => ({
        DEFAULT: {
          css: {
            a: {
              textDecoration: "none",
              "&:hover": {
                textDecoration: "underline",
              },
            },
            pre: {
              color: theme("colors.foreground"),
              backgroundColor: theme("colors.muted.DEFAULT"),
            },
            code: {
              color: theme("colors.foreground"),
              backgroundColor: theme("colors.muted.DEFAULT"),
              padding: theme("borderRadius.sm"),
              paddingBottom: 0,
              borderRadius: theme("borderRadius.sm"),
              // remove tw-typography (prose) auto-backticks from code-elements
              "::before": {
                content: "none",
              },
              "::after": {
                content: "none",
              },
            },
            blockquote: {
              margin: "0 1rem",
            },
          },
        },
      }),
      fontFamily: {
        sans: ["var(--font-sans)", ...fontFamily.sans],
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        foreground: "hsl(var(--foreground))",
        background: "hsl(var(--background))",
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
          50: "#fee7ef",
          100: "#fdd0df",
          200: "#faa0bf",
          300: "#f871a0",
          400: "#f54180",
          500: "#f31260", // default
          600: "#c20e4d",
          700: "#920b3a",
          800: "#610726",
          900: "#310413",
        },
        warning: {
          DEFAULT: "#f5a524",
          50: "#fefce8",
          100: "#fdedd3",
          200: "#fbdba7",
          300: "#f9c97c",
          400: "#f7b750",
          500: "#f5a524", // default
          600: "#c4841d",
          700: "#936316",
          800: "#62420e",
          900: "#312107",
        },
        success: {
          DEFAULT: "#17c964",
          50: "#e8faf0",
          100: "#d1f4e0",
          200: "#a2e9c1",
          300: "#74dfa2",
          400: "#45d483",
          500: "#17c964", // default
          600: "#12a150",
          700: "#0e793c",
          800: "#095028",
          900: "#052814",
        },
      },
      backgroundImage: {
        gradient: "var(--bg-gradient)",
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
      listStyleType: {
        "contains-task-list": "none",
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"), // use prose class to add styles from tailwind/typography
    require("tailwindcss-animate"),
  ],
} satisfies Config;

export default config;
