import "@razorlabs/wallet-kit/style.css";
import type { Metadata } from "next";

import { fontClassNames } from "./fonts";
import "./globals.css";
import Providers from "./Providers";

export const metadata: Metadata = {
  title: "Simemes",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={fontClassNames.join(" ")}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
