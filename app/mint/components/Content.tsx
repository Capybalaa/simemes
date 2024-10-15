"use client";

import { AptosConnectButton, useAptosWallet } from "@razorlabs/wallet-kit";
import Image from "next/image";
import { useState } from "react";

const MODULE_ADDRESS =
  "0xbd43be3bd3dafee68063483988e4c503a9dbff9cd8c1f156529bdb12a1bbbbad";

export default function Content() {
  const { signAndSubmitTransaction, connected } = useAptosWallet();
  const [minting, setMinting] = useState(false);
  const [minted, setMinted] = useState(false);
  const connectButton = (
    <AptosConnectButton
      style={
        connected
          ? {}
          : {
              width: 128,
              color: "#F9D93D",
              border: "1px solid #F9D93D",
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
            className="bg-[#F9D93D] text-2xl rounded-2xl px-8 py-2 text-black font-extrabold border-2 border-black"
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
