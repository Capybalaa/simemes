import Image from 'next/image'
import Milestone from './components/Milestone'

export default function Home() {
  return (
    <div className="grow relative flex flex-col items-center justify-center">
      <Image
        className={[
          'w-[566px] h-[353px] absolute right-0 bottom-0',
          'origin-bottom-right',
          'scale-50 xl:scale-100',
        ].join(' ')}
        src="/puddles.png"
        width={1132}
        height={706}
        alt="puddles"
      />
      <Image
        className={[
          'w-[411px] h-[490px] absolute top-1/2 -translate-y-1/2',
          '-right-20 xl:right-10',
          'origin-right',
          'scale-50 xl:scale-100',
        ].join(' ')}
        src="/toilet.png"
        width={822}
        height={980}
        alt="toilet"
      />
      <Image
        className={[
          'w-[491px] h-[316px] absolute top-10',
          '-left-6 xl:left-10',
          'origin-top-left',
          'scale-50 xl:scale-100',
        ].join(' ')}
        src="/candy.png"
        width={982}
        height={632}
        alt="candy"
      />
      <div className="py-10">
        <Milestone value={2500} steps={[1000, 2000, 3000, 4000, 5000]} />
      </div>
      <div className="p-4 xl:p-10 xl:absolute xl:left-0 xl:bottom-0 mb-54 xl:mb-0">
        <h2 className="font-bebas-neue text-3xl xl:text-5xl mb-2">
          What happens in SIMemes <br />
          Stay in SIMemes
        </h2>
        <button className="bg-[url(/button-y.png)] bg-contain bg-center bg-no-repeat w-full xl:w-[521px] h-[52px] xl:h-[100px]">
          <span
            className="font-bebas-neue text-3xl text-white"
            style={{
              WebkitTextStroke: '1px #000',
              textShadow: '0 2px 0px #000',
            }}
          >
            join waitlist
          </span>
        </button>
      </div>
    </div>
  )
}
