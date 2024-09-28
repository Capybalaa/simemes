import { Comic_Neue } from "next/font/google";

export const comic = Comic_Neue({
  subsets: ["latin"],
  variable: "--font-comic",
  weight: "700",
});

export const fontClassNames = [comic.variable];
