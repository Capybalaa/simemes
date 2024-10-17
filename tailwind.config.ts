import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "bg-d": "url(/bg-d.png)",
        "bg-l": "url(/bg-l.png)",
        "bg-m": "url(/bg-m.png)",
        button: "url(/button.png)",
      },
      backgroundSize: {
        "100%": "100%",
        "125%": "125%",
        "150%": "150%",
        "175%": "175%",
        "200%": "200%",
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        comic: ["var(--font-comic)", "sans-serif"],
        inter: ["var(--font-inter)", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
