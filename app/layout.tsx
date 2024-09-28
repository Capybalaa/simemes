import "@razorlabs/wallet-kit/style.css";
import type { Metadata } from "next";

import dynamic from "next/dynamic";
import { fontClassNames } from "./fonts";
import "./globals.css";

const Providers = dynamic(() => import("./Providers"), { ssr: false });

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
