"use client";

import { AptosConnectButton, useAptosWallet } from "@razorlabs/wallet-kit";

const MODULE_ADDRESS =
  "0xbd43be3bd3dafee68063483988e4c503a9dbff9cd8c1f156529bdb12a1bbbbad";

export default function Content() {
  const { signAndSubmitTransaction, connected } = useAptosWallet();
  return (
    <div className="w-dvw h-dvh relative overflow-hidden">
      <div className="absolute left-28 bottom-0 h-96 w-full bg-[url(/bg.png)] bg-no-repeat bg-contain bg-bottom -z-10" />
      <div className="flex flex-col mx-auto w-96 items-center justify-end h-full">
        <div className="text-2xl font-bold">Sorry, You Got Liquidated…</div>
        <div className="h-4" />
        <AptosConnectButton
          className={
            connected ? "" : "bg-sky-500 rounded hover:bg-sky-600 text-white"
          }
        />
        <div className="h-96" />
        {connected && (
          <button
            className="bg-sky-500 rounded px-8 py-2 hover:bg-sky-600"
            onClick={() => {
              signAndSubmitTransaction({
                payload: {
                  function: `${MODULE_ADDRESS}::movement_offer_letter::mint`,
                  typeArguments: [],
                  functionArguments: [],
                },
              });
            }}
          >
            Mint
          </button>
        )}
        <div className="h-4" />
      </div>
    </div>
  );
}
