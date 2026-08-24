import type { Config } from "tailwindcss";
const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "15px",
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "960px",
      xl: "1200px",
      ...defaultTheme.screens,
    },
    fontFamily: {
      primary: ["var(--font-spaceGrotesk)", "sans-serif"],
      mono: ["var(--font-jetbrainsMono)", "monospace"],
      ...defaultTheme.fontFamily,
    },
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        muted: "var(--muted)",
        "muted-2": "var(--muted-2)",
        faint: "var(--faint)",
        card: "var(--card)",
        border: "var(--border)",
        "input-border": "var(--input-border)",
        accent: {
          DEFAULT: "var(--accent)",
          hover: "var(--accent-hover)",
          foreground: "var(--accent-foreground)",
          soft: "var(--accent-soft)",
          "soft-border": "var(--accent-soft-border)",
          "soft-text": "var(--accent-soft-text)",
        },
        // legacy aliases still referenced by some components
        primary: "var(--primary)",
        "text-color": "var(--text-color)",
        secondary: "var(--secondary)",
        ...colors,
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
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;
