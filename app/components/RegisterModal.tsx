import '@aptos-labs/wallet-adapter-ant-design/dist/index.css'
import Image from 'next/image'

export interface RegisterModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function RegisterModal({ isOpen, onClose }: RegisterModalProps) {
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
          />
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-2xl font-bebas-neue">
            2. Connect Aptos Move Wallet
          </label>
          <div className="text-center">
            <button className="capitalize text-2xl text-white font-bebas-neue bg-[#52362E] rounded-lg w-fit px-5 py-1.5 cursor-pointer">
              connect
            </button>
          </div>
        </div>
        <button
          className="capitalize text-2xl text-white font-bebas-neue bg-[#52362E] rounded-lg px-10 py-3 disabled:opacity-50 cursor-pointer disabled:cursor-not-allowed"
          disabled
        >
          join waitlist
        </button>
      </div>
    </div>
  )
}
