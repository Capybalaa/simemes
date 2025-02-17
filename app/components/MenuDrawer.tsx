'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { createPortal } from 'react-dom'

export default function MenuDrawer() {
  const [isOpen, setIsOpen] = useState(false)

  if (typeof document === 'undefined') return null

  return (
    <>
      <button onClick={() => setIsOpen(true)}>
        <Image
          className="w-10 h-10"
          src="/menu.png"
          alt="menu"
          width={80}
          height={80}
        />
      </button>
      {createPortal(
        <div
          className={[
            'max-w-md w-full h-dvh fixed top-0 right-0 transition-transform bg-[#FAFDFB]',
            isOpen ? 'translate-x-0' : 'translate-x-full',
            'flex flex-col z-50',
          ].join(' ')}
        >
          <div className="bg-[#F2EFEA] h-14 px-4 flex flex-row items-center justify-end">
            <button
              className="block xl:hidden"
              onClick={() => setIsOpen(false)}
            >
              <Image
                className="w-10 h-10"
                src="/close.png"
                alt="close"
                width={80}
                height={80}
              />
            </button>
          </div>
          <div className="grow flex flex-col gap-10 justify-center items-center capitalize text-[32px] font-bebas-neue py-10">
            <Image
              className="w-[163px] h-[60px]"
              src="/logo.png"
              alt="simemes"
              width={326}
              height={120}
            />
            <Link href="#story" onClick={() => setIsOpen(false)}>
              story
            </Link>
            <Link href="#about" onClick={() => setIsOpen(false)}>
              about
            </Link>
            <div className="flex flex-row gap-10">
              <Link href="#">
                <Image
                  className="w-12 h-12"
                  src="/social-x.png"
                  alt="x"
                  width={96}
                  height={96}
                />
              </Link>{' '}
              <Link href="#">
                <Image
                  className="w-12 h-12"
                  src="/social-tg.png"
                  alt="x"
                  width={96}
                  height={96}
                />
              </Link>
            </div>

            <div className="grow" />

            <Image
              className="w-[245px] h-[158px]"
              src="/candy.png"
              width={982}
              height={632}
              alt="candy"
            />
          </div>
        </div>,
        document.body
      )}
    </>
  )
}
