import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1A344D",
        accent: "#2B5C8A",
        secondary: "#7899AD",
        "bg-light": "#EBF5FF",
        "text-dark": "#212529",
        "text-muted": "#6C757D",
        // New system colors
        "typo-primary": "var(--color-text-primary)",
        "typo-secondary": "var(--color-text-secondary)",
        "typo-muted": "var(--color-text-muted)",
        "border-base": "var(--color-border)",
        "border-strong": "var(--color-border-strong)",
        "accent-blue": "var(--color-accent)",
      },
      fontFamily: {
        heading: ["var(--font-bilagike)", "var(--font-dm-serif)", "serif"],
        inter: ["var(--font-inter)", "sans-serif"],
        figtree: ["var(--font-figtree)", "sans-serif"],
        body: ["var(--font-inter)", "sans-serif"], // Default body is Inter
      },
      maxWidth: {
        '1440': '1440px',
      },
      padding: {
        'desktop': '240px',
        'tablet': '80px',
        'mobile': '24px',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};
export default config;
