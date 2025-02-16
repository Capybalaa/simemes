import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import MenuDrawer from './components/MenuDrawer'
import QueryProvider from './components/QueryProvider'
import WalletProvider from './components/WalletProvider'
import './fonts'
import './globals.css'

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
      <body className="flex flex-col">
        <QueryProvider>
          <WalletProvider>
            <header
              className={[
                'relative bg-[#FAFDFB] border-b-2 border-[#9A776D] w-full h-14 xl:h-[100px]',
                'after:bg-[#F2EFEA] after:h-5 after:w-full after:absolute after:bottom-0 after:left-0',
                'flex flex-row items-center px-4 xl:px-10',
                'sticky top-0 z-10',
              ].join(' ')}
            >
              <Image
                className="w-[163px] h-[60px] z-10"
                src="/logo.png"
                alt="simemes"
                width={326}
                height={120}
              />
              <div className="grow" />
              <div className="hidden xl:flex flex-row items-center gap-10 capitalize text-[32px] font-bebas-neue">
                <Link href="/story">story</Link>
                <Link href="/about">about</Link>
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
              <div className="xl:hidden z-10">
                <MenuDrawer />
              </div>
            </header>
            <div className="bg-[url(/bg.jpg)] bg-cover bg-center grow flex flex-col">
              {children}
            </div>
          </WalletProvider>
        </QueryProvider>
      </body>
    </html>
  )
}
