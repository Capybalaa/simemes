"use client";

import Image from "next/image";

export default function Content() {
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
          <button className="rounded-xl bg-black text-[#FFDB34] font-comic p-2 w-24 -my-1">
            Connect
          </button>
        </div>
        <div className="bg-[#FFDB34] text-black text-xl md:text-2xl font-comic border border-black rounded-2xl p-4 flex flex-row justify-between items-center">
          <span>Follow Simemes on X</span>
          <button className="rounded-xl bg-black text-[#FFDB34] font-comic p-2 w-24 -my-1">
            Follow
          </button>
        </div>
        <button className="rounded-2xl bg-black text-xl md:text-2xl text-[#FFDB34] font-comic p-4">
          Verify & Join Waitlist
        </button>
      </div>
    </div>
  );
}
