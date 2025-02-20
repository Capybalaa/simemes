import Image from 'next/image'
import { useState } from 'react'

enum Step {
  ClickToFlush,
  Follow,
  Followed,
  FlushedAgain,
}

export interface AfterRegisterPopupProps {
  isOpen: boolean
  onClose: () => void
}

export default function AfterRegisterPopup({
  isOpen,
  onClose,
}: AfterRegisterPopupProps) {
  const [step, setStep] = useState(Step.ClickToFlush)

  if (!isOpen) return null

  return (
    <div className="fixed top-0 left-0 w-dvw h-dvh bg-black/40 flex items-center justify-center z-50 backdrop-blur-xs">
      {(step === Step.ClickToFlush || step === Step.Followed) && (
        <button
          className="fixed bottom-0 left-1/2 -translate-x-1/2 flex flex-col items-center w-3/4 cursor-pointer"
          onClick={() =>
            setStep((prev) => {
              if (prev === Step.Followed) return Step.FlushedAgain
              return Step.Follow
            })
          }
        >
          <Image
            src="/click-to-flush.png"
            alt="click to flush"
            width={327}
            height={114}
          />
          <Image
            className="max-w-[440px] w-full"
            src="/toilet-1.png"
            alt="toilet"
            width={880}
            height={1548}
          />
        </button>
      )}
      {step === Step.Follow && (
        <div className="bg-[#FFDC30] border border-[#52362E] rounded-[20px] relative overflow-hidden">
          <div className="flex flex-col gap-8 p-10">
            <h1 className="text-[40px] text-center">You Won</h1>
            <Image src="/reward.png" alt="reward" width={280} height={200} />
            <div className="flex flex-col gap-2">
              <a
                className="capitalize text-white! text-2xl text-center bg-[#52362E] rounded-lg py-2"
                href="https://twitter.com/intent/follow?user_id=1882680412964782080"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setStep(Step.Followed)}
              >
                follow us
              </a>
              <p className="text-lg text-center">
                Don&apos;t like your result?
                <br />
                Follow us to flush again
              </p>
            </div>
          </div>
        </div>
      )}
      {step === Step.FlushedAgain && (
        <div className="bg-[#FFDC30] border border-[#52362E] rounded-[20px] relative overflow-hidden">
          <div className="flex flex-col gap-8 p-10">
            <h1 className="text-[40px] text-center">You Won</h1>
            <Image src="/reward.png" alt="reward" width={280} height={200} />
            <div className="flex flex-col gap-2">
              <button
                className="capitalize text-white! text-2xl text-center bg-[#52362E] rounded-lg py-2 cursor-pointer"
                onClick={onClose}
              >
                FEELS GOOD MAN
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
