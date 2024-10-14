"use client";

import { AptosWalletProvider, SuiWalletProvider } from "@razorlabs/wallet-kit";
import { SessionProvider } from "next-auth/react";

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <SessionProvider>
      <AptosWalletProvider>
        <SuiWalletProvider>{children}</SuiWalletProvider>
      </AptosWalletProvider>
    </SessionProvider>
  );
}
