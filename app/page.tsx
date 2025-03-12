'use client'

import { useQuery } from '@tanstack/react-query'
import Image from 'next/image'
import { useState } from 'react'
import AfterRegisterPopup from './components/AfterRegisterPopup'
import Milestone from './components/Milestone'
import RegisterModal from './components/RegisterModal'

export default function Home() {
  const [isRegisterModalOpen, setIsRegisterModalOpen] = useState(false)
  const [isAfterRegisterPopupOpen, setIsAfterRegisterPopupOpen] =
    useState(false)

  const { data: { count = 0 } = {} } = useQuery({
    queryKey: [
      'https://waitlist-api-692867198262.us-west1.run.app/waitlist/count',
    ],
    queryFn: async ({ queryKey }) => {
      const resp = await fetch(queryKey[0])
      if (!resp.ok) {
        throw new Error('Failed to fetch waitlist count')
      }
      return resp.json() as Promise<{ count: number }>
    },
  })

  return (
    <div className="flex flex-col gap-20">
      <div className="min-h-dvh relative flex flex-col items-center justify-center lg:pt-0">
        <Image
          className={[
            'w-[566px] h-[353px] absolute -right-20 -bottom-20',
            'origin-bottom-right',
            'scale-50 lg:scale-100',
          ].join(' ')}
          src="/puddles.png"
          width={1132}
          height={706}
          alt="puddles"
        />
        <Image
          className={[
            'w-[411px] h-[490px] absolute top-1/2 -translate-y-1/2',
            '-right-20 lg:right-10',
            'origin-right',
            'scale-50 lg:scale-75',
          ].join(' ')}
          src="/toilet.png"
          width={822}
          height={980}
          alt="toilet"
        />
        <Image
          className={[
            'w-[491px] h-[316px] absolute top-10',
            '-left-6 lg:left-2/7 lg:-translate-x-1/2',
            'origin-top-left',
            'scale-50 lg:scale-75',
          ].join(' ')}
          src="/candy.png"
          width={982}
          height={632}
          alt="candy"
        />
        <div className="py-10 z-10">
          <Milestone
            value={count}
            steps={[
              { value: 10_000, label: '10K', bonus: 'Pebble x50' },
              { value: 50_000, label: '50K', bonus: 'Poop x1M' },
              {
                value: 100_000,
                label: '100K',
                bonus: 'SIMemes buddy limited edition',
              },
              { value: 250_000, label: '250K', bonus: 'Chest vouchers x20' },
              { value: 500_000, label: '500K', bonus: '1% SIMemes token allocation' },
            ]}
          />
        </div>
        <div className="p-4 lg:p-10 lg:absolute lg:left-0 lg:bottom-20 mb-54 lg:mb-0 scale-75">
          <h2 className="text-2xl lg:text-5xl mb-2">
            What happens in SIMemes <br />
            Stay in SIMemes
          </h2>
          <button
            className="bg-[url(/button-y.png)] bg-auto bg-center bg-no-repeat border-2 border-black rounded-lg w-full lg:w-[521px] h-[52px] lg:h-[100px] cursor-pointer"
            onClick={() => setIsRegisterModalOpen(true)}
          >
            <span
              className="text-3xl text-white uppercase"
              style={{
                WebkitTextStroke: '1px #000',
                textShadow: '0 2px 0px #000',
              }}
            >
              join waitlist
            </span>
          </button>
        </div>
        <RegisterModal
          isOpen={isRegisterModalOpen}
          onClose={() => setIsRegisterModalOpen(false)}
          onSuccess={() => setIsAfterRegisterPopupOpen(true)}
        />
        <AfterRegisterPopup
          isOpen={isAfterRegisterPopupOpen}
          onClose={() => setIsAfterRegisterPopupOpen(false)}
        />
      </div>
      <div id="story" className="relative min-h-dvh">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-10 mx-auto py-10 max-w-[1000px] px-10">
          <Image
            className="absolute -top-30 -left-60 scale-75"
            src="/footprint-bg.png"
            width={937}
            height={375}
            alt="footprint-bg"
          />
          <Image
            className="absolute bottom-40 -right-20 scale-75 origin-right"
            src="/footprint-bg.png"
            width={937}
            height={375}
            alt="footprint-bg"
          />
          <Image
            className="absolute -bottom-40 -left-80 -z-10 scale-75"
            src="/puddles-1.png"
            width={905}
            height={565}
            alt="puddles"
          />
          <Image
            className="max-w-full lg:max-h-[640px]"
            src="/story.png"
            width={1060}
            height={1476}
            alt="story"
          />
          <div className="flex flex-col gap-5">
            <h1 className="text-5xl">Meet SIMemes</h1>
            <p className="text-2xl">
              Everyone can poop. But it ain&apos;t just poop—it&apos;s the
              ultimate currency. It fuels the economy, turns actions into
              opportunities. 
            </p>
            <p className="text-2xl">BUT…</p>
            <p className="text-2xl">
              Everyone&apos;s after your poop. It&apos;s scarce, competition is
              fierce, and every pile matters. After all, nothing is free.
            </p>
            <p className="text-2xl">
              Farm, level up and steal to get your golden ticket. Start now,
              poop fast.
            </p>
          </div>
        </div>
      </div>
      <div id="about" className="relative min-h-dvh">
        <Image
          className="absolute -bottom-40 -right-40 -z-10 scale-50 origin-bottom-right"
          src="/puddles.png"
          width={1132}
          height={706}
          alt="puddles"
        />
        <div className="flex flex-col gap-5 mx-auto p-10 max-w-[1000px]">
          <h1 className="text-5xl">What is SIMemes?</h1>
          <p className="text-2xl">
            SIMemes is an AI-driven, meme-powered social IDLE game that blends
            strategy, humor, and social interaction. It&apos;s a place where
            collecting poop, defending resources, and leveling up collide with
            the boundless creativity of memes.{' '}
          </p>
          <p className="text-2xl">
            Think of Farmville meets Tinder with a sprinkle of memes, all
            wrapped in a world where every poop matters. The earlier you join,
            the more you stand to gain. 
          </p>
          <div className="flex flex-col lg:flex-row gap-5 *:w-full *:flex *:flex-col *:gap-5">
            <div>
              <Image
                className="w-full"
                src="/about-0.png"
                width={640}
                height={480}
                alt="about"
              />
              <h2 className="text-2xl h-16">Poop AI (?)</h2>

              <p className="text-lg">
                <span className="bg-current">
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;&nbsp;
                </span>
                —he&apos;s the ultimate portal between players and the game.
              </p>
              <p className="text-lg">
                He manages and adapts from{' '}
                <span className="bg-current">
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                </span>{' '}
                and partial token management,{' '}
                <span className="bg-current">
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                </span>
              </p>
              <p className="text-lg">This is what we called community first.</p>
            </div>
            <div>
              <Image
                className="w-full"
                src="/about-1.png"
                width={640}
                height={480}
                alt="about"
              />
              <h2 className="text-2xl h-16">Fortune favors the wise</h2>
              <p className="text-lg">
                Every chest, every resource is your chance at fortune—your
                golden era. it&apos;s all yours for the taking.
              </p>
              <p className="text-lg">
                Riches are free, but so is danger. In SIMemes, fortune favors
                the wise, not just the bold.
              </p>
              <p className="text-lg">
                Will you protect your chest, or let it slip away?
              </p>
            </div>
            <div>
              <Image
                className="w-full"
                src="/about-2.png"
                width={640}
                height={480}
                alt="about"
              />
              <h2 className="text-2xl h-16">
                Friend today
                <br />
                Rivals tomorrow
              </h2>
              <p className="text-lg">
                Steal what you can, protect what&apos;s yours, and betray while
                you can. 
              </p>
              <p className="text-lg">
                You are never safe on things you never own.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="min-h-dvh flex flex-col items-center justify-center">
        <Image
          className="w-full lg:w-[535px] scale-75"
          src="/toilet3.png"
          alt="toilet"
          width={535}
          height={628}
        />
        <div className="flex flex-col lg:flex-row items-center justify-center gap-40 mx-auto p-0 lg:p-10 max-w-[1000px]">
          <div className="flex flex-col gap-4 w-100 shrink-0">
            <button
              className="bg-[url(/button-y.png)] bg-auto bg-center bg-no-repeat border-2 border-black rounded-lg w-full lg:w-[521px] h-[52px] lg:h-[100px] cursor-pointer  scale-75"
              onClick={() => setIsRegisterModalOpen(true)}
            >
              <span
                className="text-3xl text-white uppercase"
                style={{
                  WebkitTextStroke: '1px #000',
                  textShadow: '0 2px 0px #000',
                }}
              >
                join waitlist
              </span>
            </button>
            <p className="text-xs text-center">
              COPYRIGHT © 2025 SIMemes ALL RIGHTS RESERVED ®
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
