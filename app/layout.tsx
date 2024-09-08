import "@razorlabs/wallet-kit/style.css";
import type { Metadata } from "next";

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
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
