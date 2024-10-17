"use client";

import {
  AptosWalletProvider,
  RazorSuiWallet,
  SuiWalletProvider,
} from "@razorlabs/wallet-kit";
import { SessionProvider } from "next-auth/react";
import NightlyWallet from "./NightlyWallet";

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <SessionProvider>
      <AptosWalletProvider defaultWallets={[RazorSuiWallet, NightlyWallet]}>
        <SuiWalletProvider>{children}</SuiWalletProvider>
      </AptosWalletProvider>
    </SessionProvider>
  );
}
