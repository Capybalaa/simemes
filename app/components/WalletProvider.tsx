'use client'

import { Network } from '@aptos-labs/ts-sdk'
import { AptosWalletAdapterProvider } from '@aptos-labs/wallet-adapter-react'
import { BitgetWallet } from '@bitget-wallet/aptos-wallet-adapter'
import { OKXWallet } from '@okwallet/aptos-wallet-adapter'
import { PropsWithChildren } from 'react'

export default function WalletProvider({ children }: PropsWithChildren) {
  return (
    <AptosWalletAdapterProvider
      autoConnect
      plugins={[new BitgetWallet(), new OKXWallet()]}
      dappConfig={{ network: Network.MAINNET }}
      onError={console.error}
    >
      {children}
    </AptosWalletAdapterProvider>
  )
}
