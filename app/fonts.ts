import { Comic_Neue, Inter } from "next/font/google";

export const comic = Comic_Neue({
  subsets: ["latin"],
  variable: "--font-comic",
  weight: "700",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "800", "900"],
});

export const fontClassNames = [comic.variable, inter.variable];
