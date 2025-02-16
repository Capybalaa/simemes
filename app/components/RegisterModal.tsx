import { WalletConnector } from '@aptos-labs/wallet-adapter-mui-design'
import { useWallet } from '@aptos-labs/wallet-adapter-react'
import { useMutation } from '@tanstack/react-query'
import Image from 'next/image'
import { useEffect, useMemo, useState } from 'react'
export interface RegisterModalProps {
  isOpen: boolean
  onClose: () => void
  onSuccess: () => void
}

const emailRegex =
  /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/

export default function RegisterModal({
  isOpen,
  onClose,
  onSuccess,
}: RegisterModalProps) {
  const { account, connected, signMessage } = useWallet()

  const [email, setEmail] = useState('')

  const [isSuccess, setIsSuccess] = useState(false)

  const isValidEmail = useMemo(
    () => email.length === 0 || emailRegex.test(email),
    [email]
  )

  const { mutate: joinWaitlist } = useMutation({
    mutationFn: async () => {
      if (!email || !account) return

      const message = `I would like to join the SIMemes waitlist. My email is ${email}. My wallet is ${account.address}`

      const signature = await signMessage({
        address: true,
        application: true,
        chainId: true,
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
            signature: signature.signature.toString(),
            message: signature.fullMessage,
          }),
        }
      )

      if (!resp.ok) {
        alert('Failed to join waitlist')
        return
      }

      setIsSuccess(true)
    },
  })

  useEffect(() => {
    if (isSuccess) {
      onSuccess()
    }
  }, [isSuccess, onSuccess])

  if (!isOpen) return null

  return (
    <div className="fixed top-0 left-0 w-dvw h-dvh bg-black/40 flex items-center justify-center z-50 backdrop-blur-xs">
      <div className="bg-[#FFDC30] border border-[#52362E] rounded-[20px] relative overflow-hidden">
        <button className="absolute top-2 right-2" onClick={onClose}>
          <Image
            className="w-8 h-8"
            src="/close.png"
            alt="close"
            width={80}
            height={80}
          />
        </button>
        {!isSuccess && (
          <div className="flex flex-col gap-8 p-10">
            <h1 className="text-[40px] font-bebas-neue">
              Join SIMemes waitlist
            </h1>
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
              {!isValidEmail && (
                <p className="text-red-600 text-sm">*Error handle</p>
              )}
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
        )}
        {isSuccess && (
          <div className="flex flex-col gap-2">
            <Image
              className="max-w-[435px] w-full"
              src="/registered.png"
              width={870}
              height={480}
              alt="registered"
            />
            <div className="flex flex-col gap-10 px-10 pb-10">
              <h1 className="text-[40px] font-bebas-neue">
                You&apos;re on the waitlist!
              </h1>
              <div className="flex flex-col gap-4">
                <input
                  className="bg-[#FAFDFB] border rounded-lg px-5 py-1.5"
                  placeholder={email || 'email'}
                  disabled
                />
                <input
                  className="bg-[#FAFDFB] border rounded-lg px-5 py-1.5"
                  placeholder={`${account?.address.slice(0, 6)}...${account?.address.slice(-4)}`}
                  disabled
                />
              </div>
              <button
                className="text-2xl text-white font-bebas-neue bg-[#52362E] rounded-lg px-10 py-3 disabled:opacity-50 cursor-pointer disabled:cursor-not-allowed"
                onClick={() => joinWaitlist()}
              >
                Flush the toilet now
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
