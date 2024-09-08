"use client";

import { SuiWalletProvider } from "@razorlabs/wallet-kit";

export default function Providers({ children }: { children: React.ReactNode }) {
  return <SuiWalletProvider>{children}</SuiWalletProvider>;
}
