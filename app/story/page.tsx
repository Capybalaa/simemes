import Image from 'next/image'

export default function Page() {
  return (
    <div className="flex flex-col-reverse lg:flex-row gap-10 mx-auto py-10 max-w-[1000px] px-10 lg:px-0">
      <Image
        className="max-w-full lg:max-w-[530px]"
        src="/story.png"
        width={1060}
        height={1476}
        alt="story"
      />
      <div className="flex flex-col gap-5">
        <h1 className="text-5xl font-bebas-neue">Meet SIMemes</h1>
        <p className="text-2xl font-bebas-neue">
          Everyone can poop. But it ain’t just poop—it’s the ultimate currency.
          It fuels the economy, turns actions into opportunities. 
        </p>
        <p className="text-2xl font-bebas-neue">BUT…</p>
        <p className="text-2xl font-bebas-neue">
          Everyone’s after your poop. It’s scarce, competition is fierce, and
          every pile matters. After all, nothing is free.
        </p>
        <p className="text-2xl font-bebas-neue">
          Farm, level up and steal to get your golden ticket. Start now, poop
          fast.
        </p>
      </div>
    </div>
  )
}
