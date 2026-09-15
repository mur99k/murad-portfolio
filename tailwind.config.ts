import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        charcoal: "#1B1815",
        espresso: "#3C2E26",
        ivory: "#F2ECE0",
        paper: "#F8F4EA",
        dust: "#96A9B6",
        gold: "#B49468",
        hair: "#D9CFBE",
        muted: "#6B6154",
      },
      fontFamily: {
        display: ["Bodoni Moda", "serif"],
        body: ["Archivo", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
        arabicDisplay: ["Aref Ruqaa", "serif"],
        arabicBody: ["Amiri", "serif"],
      },
      spacing: {
        "s-1": "4px",
        "s-2": "8px",
        "s-3": "12px",
        "s-4": "16px",
        "s-5": "24px",
        "s-6": "32px",
        "s-7": "48px",
        "s-8": "64px",
        "s-9": "96px",
        "s-10": "128px",
        "s-11": "160px",
        "s-12": "200px",
      },
    },
  },
  plugins: [],
};
export default config;
