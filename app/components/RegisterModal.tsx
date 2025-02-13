import { WalletConnector } from '@aptos-labs/wallet-adapter-mui-design'
import { useWallet } from '@aptos-labs/wallet-adapter-react'
import { useMutation } from '@tanstack/react-query'
import Image from 'next/image'
import { useState } from 'react'
export interface RegisterModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function RegisterModal({ isOpen, onClose }: RegisterModalProps) {
  const { account, connected, signMessage } = useWallet()

  const [email, setEmail] = useState('')

  const { mutate: joinWaitlist } = useMutation({
    mutationFn: async () => {
      if (!email || !account) return

      const message = `I would like to join the SIMemes waitlist. My email is ${email}. My wallet is ${account.address}`

      const signature = await signMessage({
        message,
        nonce: Date.now().toString(),
      })

      const resp = await fetch(
        'https://waitlist-api-692867198262.us-west1.run.app/waitlist',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            email,
            walletAddress: account.address,
            publicKey: account.publicKey,
            signature: signature.signature,
            message: signature.message,
          }),
        }
      )

      if (!resp.ok) {
        alert('Failed to join waitlist')
        return
      }

      alert('Successfully joined waitlist')
      onClose()
    },
  })

  if (!isOpen) return null

  return (
    <div className="fixed top-0 left-0 w-dvw h-dvh bg-black/40 flex items-center justify-center z-50 backdrop-blur-xs">
      <div className="flex flex-col gap-8 p-10 bg-[#FFDC30] border border-[#52362E] rounded-[20px] relative">
        <button onClick={onClose}>
          <Image
            className="w-8 h-8 absolute top-2 right-2"
            src="/close.png"
            alt="close"
            width={80}
            height={80}
          />
        </button>
        <h1 className="text-[40px] font-bebas-neue">Join SIMemes waitlist</h1>
        <div className="flex flex-col gap-2">
          <label className="text-2xl font-bebas-neue">
            1. Enter your email
          </label>
          <input
            className="bg-[#FAFDFB] border rounded-lg px-5 py-1.5"
            type="email"
            placeholder="Your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-2xl font-bebas-neue">
            2. Connect Aptos Move Wallet
          </label>
          <div className="text-center">
            <WalletConnector />
          </div>
        </div>
        <button
          className="capitalize text-2xl text-white font-bebas-neue bg-[#52362E] rounded-lg px-10 py-3 disabled:opacity-50 cursor-pointer disabled:cursor-not-allowed"
          disabled={!connected || !email}
          onClick={() => joinWaitlist()}
        >
          join waitlist
        </button>
      </div>
    </div>
  )
}
