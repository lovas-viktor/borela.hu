import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts}",
  ],
  theme: {
    extend: {
      colors: {
        /* Primary — Safety Blue */
        primary: "#1A48C2",
        "primary-hover": "#1338A0",
        "primary-dark": "#0D2570",
        "primary-light": "#E4EEFF",
        "on-primary": "#FFFFFF",

        /* Neutral Surface — Warm Paper */
        background: "#fbf9f4",
        surface: "#F4F2ED",
        "surface-alt": "#EAE7DF",
        "surface-dark": "#141414",
        "on-surface-dark": "#F4F2ED",

        /* Ink */
        ink: "#0A0A0A",
        "ink-secondary": "#4A4A4A",
        "ink-tertiary": "#6E716E",

        /* Borders */
        border: "#C8C5BE",
        "border-strong": "#A8A5A0",
        "border-dark": "#2A2A2A",
      },
      fontFamily: {
        sans: ["var(--font-public-sans)", "Public Sans", "system-ui", "sans-serif"],
        mono: ["var(--font-jetbrains-mono)", "JetBrains Mono", "ui-monospace", "monospace"],
      },
      letterSpacing: {
        "brand-tight": "-0.05em",
        headline: "-0.02em",
        "mono-label": "0.06em",
      },
      borderRadius: {
        none: "0px",
        DEFAULT: "2px",
        sm: "2px",
        md: "2px",
        lg: "2px",
      },
    },
  },
  plugins: [],
};

export default config;
