import Image from 'next/image'

export default function Page() {
  return (
    <div className="flex flex-col gap-5 mx-auto p-10 max-w-[1000px]">
      <h1 className="text-5xl font-bebas-neue">What is SIMemes?</h1>
      <p className="text-2xl font-bebas-neue">
        SIMemes is an AI-driven, meme-powered social IDLE game that blends
        strategy, humor, and social interaction. It’s a place where collecting
        poop, defending resources, and leveling up collide with the boundless
        creativity of memes.{' '}
      </p>
      <p className="text-2xl font-bebas-neue">
        Think of Farmville meets Tinder with a sprinkle of memes, all wrapped in
        a world where every poop matters. The earlier you join, the more you
        stand to gain. 
      </p>
      <div className="flex flex-col lg:flex-row gap-5 *:w-full *:flex *:flex-col *:gap-5">
        <div>
          <Image
            className="w-full"
            src="/about-0.png"
            width={640}
            height={480}
            alt="about"
          />
          <h2 className="text-2xl font-bebas-neue">Poop AI (?)</h2>
          <p className="text-lg font-bebas-neue">
            (PoopAI isn’t just another AI NPC)—he’s the ultimate portal between
            players and the game.
          </p>
          <p className="text-lg font-bebas-neue">
            He manages and adapts from (real-time updates to exclusive events)
            and partial token management, (all powered by user feedback on
            social media.)
          </p>
          <p className="text-lg font-bebas-neue">
            This is what we called community first.
          </p>
        </div>
        <div>
          <Image
            className="w-full"
            src="/about-1.png"
            width={640}
            height={480}
            alt="about"
          />
          <h2 className="text-2xl font-bebas-neue">Gameplay</h2>
          <p className="text-lg font-bebas-neue">
            Every chest, every resource is your chance at fortune—your golden
            era. it’s all yours for the taking.
          </p>
          <p className="text-lg font-bebas-neue">
            Riches are free, but so is danger. In SIMemes, fortune favors the
            wise, not just the bold.
          </p>
          <p className="text-lg font-bebas-neue">
            Will you protect your chest, or let it slip away?
          </p>
        </div>
        <div>
          <Image
            className="w-full"
            src="/about-2.png"
            width={640}
            height={480}
            alt="about"
          />
          <h2 className="text-2xl font-bebas-neue">
            Friend today, Rivals tomorrow
          </h2>
          <p className="text-lg font-bebas-neue">
            Steal what you can, protect what’s yours, and betray while you can. 
          </p>
          <p className="text-lg font-bebas-neue">
            You are never safe on things you never own.
          </p>
        </div>
      </div>
    </div>
  )
}
