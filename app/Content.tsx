"use client";

import { SuiConnectButton } from "@razorlabs/wallet-kit";
import Image from "next/image";

export default function Content() {
  return (
    <div className="w-dvw h-dvh bg-cover bg-center bg-no-repeat bg-bg-m md:bg-bg-l xl:bg-bg-d ">
      <header className="flex flex-col md:flex-row items-center justify-between px-4 py-2">
        <Image
          className="scale-75 md:scale-90 xl:scale-100"
          src="/logo.png"
          alt="logo"
          width={218}
          height={80}
        />
        <SuiConnectButton>
          <Image src="/button.png" alt="button" width={320} height={70} />
        </SuiConnectButton>
      </header>
    </div>
  );
}
