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
  return (
    <div
      className="w-dvw h-dvh bg-no-repeat bg-bottom relative bg-175% sm:bg-150% md:bg-125% lg:bg-100%"
      style={{ backgroundImage: "url(/mint/bg.png)" }}
    >
      <header className="flex flex-col sm:flex-row justify-between px-8 py-4">
        <Image
          className="h-[60px] w-[163px]"
          src="/logo.png"
          width={218}
          height={80}
          alt="Simemes"
        />
        <AptosConnectButton
          style={
            connected
              ? {}
              : {
                  backgroundImage: "url(/mint/connect-button.png)",
                  width: "280px",
                  height: "60px",
                  fontSize: "0px",
                }
          }
        />
      </header>
      <div className="absolute w-fit left-1/2 -translate-x-1/2 bottom-6">
        {!connected && (
          <AptosConnectButton
            style={
              connected
                ? {}
                : {
                    backgroundImage: "url(/mint/send-button.png)",
                    width: "280px",
                    height: "60px",
                    fontSize: "0px",
                  }
            }
          />
        )}
        {connected && (
          <button
            style={{
              backgroundImage: "url(/mint/send-button.png)",
              width: "280px",
              height: "60px",
              fontSize: "0px",
            }}
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
          />
        )}
      </div>
    </div>
  );
}
