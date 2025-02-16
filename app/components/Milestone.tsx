import Image from 'next/image'
import Footprint from './Footprint'

export interface MilestoneProps {
  value: number
  steps: { value: number; label: string; bonus?: string }[]
}

export default function Milestone({ value, steps }: MilestoneProps) {
  return (
    <div className="flex flex-col xl:flex-row gap-1 xl:gap-5 items-center *:shrink-0">
      {steps.map((step, index) => {
        const active = step.value <= value
        const next = steps[index + 1] || 0
        const isLast = index === steps.length - 1
        const isNextActive = next.value <= value
        const isbetweenNext = (step.value + next.value) / 2 <= value
        const isOdd = index % 2 === 1
        return [
          <div
            key={['step', step].join(':')}
            className={[
              `relative w-16 h-16 xl:w-20 xl:h-20 rounded-full bg-[#141314]/50 border-[3px]`,
              active
                ? 'text-[#30FF0E] border-[#30FF0E]'
                : 'text-white border-[#717171]',
              'flex flex-col items-center justify-center font-bebas-neue',
            ].join(' ')}
          >
            <span className="text-xl">{step.label}</span>
            {step.bonus && (
              <div
                className={[
                  'absolute flex flex-row items-center gap-2 bg-black/50 rounded-full p-2',
                  'xl:left-1/2 xl:-translate-x-1/2',
                  isOdd ? 'right-18 xl:-top-16' : 'left-18 xl:-bottom-16',
                ].join(' ')}
              >
                <div className="w-4 xl:w-7 h-4 xl:h-7">
                  <Image
                    src={
                      active
                        ? '/circle-check-green.png'
                        : '/circle-check-gray.png'
                    }
                    alt="check"
                    width={28}
                    height={28}
                  />
                </div>
                <span
                  className={[
                    'text-xs xl:text-sm font-bebas-neue whitespace-nowrap',
                    active ? 'text-[#30FF0E]' : 'text-[#B0B0B0]',
                  ].join(' ')}
                >
                  {step.bonus}
                </span>
              </div>
            )}
          </div>,
          !isLast && (
            <Footprint
              key={['step', step, 0].join(':')}
              active={isbetweenNext}
            />
          ),
          !isLast && (
            <Footprint
              key={['step', step, 1].join(':')}
              active={isNextActive}
            />
          ),
        ]
      })}
    </div>
  )
}
