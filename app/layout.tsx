import type { Metadata } from 'next'
import dynamic from 'next/dynamic'
import Image from 'next/image'
import Link from 'next/link'
import QueryProvider from './components/QueryProvider'
import WalletProvider from './components/WalletProvider'
import './fonts'
import './globals.css'

const MenuDrawer = dynamic(() => import('./components/MenuDrawer'))

export const metadata: Metadata = {
  title: 'Simemes',
  description: 'Simemes',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="bg-[url(/bg.jpg)] bg-cover bg-center grow flex flex-col overflow-y-auto h-dvh">
        <QueryProvider>
          <WalletProvider>
            <header
              className={[
                'relative bg-[#FAFDFB] border-b-2 border-[#9A776D] w-full h-14 lg:h-16 shrink-0',
                'after:bg-[#F2EFEA] after:h-5 after:w-full after:absolute after:bottom-0 after:left-0 after:-z-1',
                'flex flex-row items-center px-4 lg:px-10',
                'sticky top-0 z-40',
              ].join(' ')}
            >
              <Link href="/">
                <Image
                  className="w-[163px] h-[60px]"
                  src="/logo.png"
                  alt="simemes"
                  width={326}
                  height={120}
                />
              </Link>
              <div className="grow" />
              <div className="hidden lg:flex flex-row items-center gap-10 capitalize text-[32px]">
                <Link href="#story">story</Link>
                <Link href="#about">about</Link>
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
                    src="/social-discord.png"
                    alt="x"
                    width={96}
                    height={96}
                  />
                </Link>
              </div>
              <div className="lg:hidden z-10">
                <MenuDrawer />
              </div>
            </header>
            {children}
          </WalletProvider>
        </QueryProvider>
      </body>
    </html>
  )
}
