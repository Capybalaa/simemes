"use client";

import { AptosConnectButton, useAptosWallet } from "@razorlabs/wallet-kit";
import { Inter } from "next/font/google";
import Image from "next/image";
import { useState } from "react";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["800"],
});

const MODULE_ADDRESS =
  "0xbd43be3bd3dafee68063483988e4c503a9dbff9cd8c1f156529bdb12a1bbbbad";

export default function Content() {
  const { signAndSubmitTransaction, connected } = useAptosWallet();
  const [minting, setMinting] = useState(false);
  const [minted, setMinted] = useState(false);
  const connectButton = (
    <AptosConnectButton
      className={
        inter.className + " rounded-xl text-2xl font-extrabold text-white"
      }
      style={
        connected
          ? {}
          : {
              background: "#FFDB34",
              border: "1px solid black",
              textShadow: "0 0 2px black",
            }
      }
    >
      Connect
    </AptosConnectButton>
  );
  return (
    <div className="w-dvw h-dvh relative overflow-hidden flex flex-col">
      <div className="absolute left-28 bottom-0 h-96 w-full bg-[url(/bg.png)] bg-no-repeat bg-contain bg-bottom -z-10" />
      <div className="flex flex-row justify-between p-2">
        <Image src="/logo.png" width={109} height={40} alt="Simemes" />
        {connectButton}
      </div>
      <div className="flex flex-col mx-auto w-96 items-center justify-end flex-grow">
        <div className="text-2xl font-bold">Oops, You Got Liquidated…</div>
        <div className="h-96" />
        {connected ? (
          <button
            className={
              inter.className +
              " bg-[#FFDB34] text-2xl rounded-2xl px-8 py-2 text-white font-extrabold border-2 border-black"
            }
            style={{ textShadow: "0 0 2px black" }}
            onClick={() => {
              setMinting(true);
              signAndSubmitTransaction({
                payload: {
                  function: `${MODULE_ADDRESS}::movement_offer_letter::mint`,
                  typeArguments: [],
                  functionArguments: [],
                },
              })
                .then(() => setMinted(true))
                .finally(() => setMinting(false));
            }}
            disabled={minting || minted}
          >
            {minting ? "Sending..." : minted ? "Sent!" : "Send Your Resume"}
          </button>
        ) : (
          connectButton
        )}
        <div className="h-2" />
      </div>
    </div>
  );
}
