import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      backgroundImage: {
        "bg-d": "url(/bg-d.png)",
        "bg-l": "url(/bg-l.png)",
        "bg-m": "url(/bg-m.png)",
        button: "url(/button.png)",
      },
    },
  },
  plugins: [],
};
export default config;
