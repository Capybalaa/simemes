"use client";

import { signIn, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Content() {
  const { status } = useSession();
  const [isFollowed, setFollowed] = useState(false);
  const [isVerified, setVerified] = useState(false);

  return (
    <div
      className="min-h-dvh mx-auto md:max-w-xl bg-no-repeat bg-bottom bg-contain p-10 flex flex-col gap-10"
      style={{ backgroundImage: "url(/all2.png)" }}
    >
      <Image
        src="/Simemes_logo_White.png"
        width={6707}
        height={2147}
        alt="logo"
      />
      <div className="flex flex-col gap-6">
        <div className="bg-[#FFDB34] text-black text-xl md:text-2xl font-comic border border-black rounded-2xl p-4 flex flex-row justify-between items-center">
          <span>Connect X</span>
          <button
            className="rounded-xl bg-black text-[#FFDB34] font-comic p-2 w-28 md:w-32 -my-1"
            onClick={() => signIn("twitter", {})}
            disabled={status === "authenticated"}
          >
            {status === "authenticated" ? "Connected" : "Connect"}
          </button>
        </div>
        <div className="bg-[#FFDB34] text-black text-xl md:text-2xl font-comic border border-black rounded-2xl p-4 flex flex-row justify-between items-center">
          <span>Follow Simemes on X</span>
          <Link
            className="rounded-xl bg-black text-[#FFDB34] font-comic p-2 w-28 md:w-32 -my-1 text-center"
            href="https://x.com/simemesxyz"
            target="_blank"
            onClick={() => setFollowed(true)}
          >
            {isFollowed ? "Followed" : "Follow"}
          </Link>
        </div>
        <button
          className="rounded-2xl bg-black text-xl md:text-2xl text-[#FFDB34] font-comic p-4 disabled:cursor-not-allowed"
          onClick={() => setVerified(true)}
          disabled={status !== "authenticated" || !isFollowed}
        >
          {isVerified ? "Joined" : "Verify & Join Waitlist"}
        </button>
      </div>
    </div>
  );
}
