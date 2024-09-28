"use client";

import { SuiWalletProvider } from "@razorlabs/wallet-kit";
import { SessionProvider } from "next-auth/react";

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <SessionProvider>
      <SuiWalletProvider>{children}</SuiWalletProvider>
    </SessionProvider>
  );
}
