import Image from 'next/image'
import Footprint from './Footprint'

export interface MilestoneProps {
  value: number
  steps: { value: number; label: string; bonus?: string }[]
}

export default function Milestone({ value, steps }: MilestoneProps) {
  return (
    <div className="flex flex-col lg:flex-row gap-1 lg:gap-5 items-center *:shrink-0">
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
              `relative w-16 h-16 lg:w-25 lg:h-25 lg:pt-5 rounded-full bg-[#141314]/50 border-[3px]`,
              active
                ? 'text-[#30FF0E] border-[#30FF0E]'
                : 'text-white border-[#717171]',
              'flex flex-col items-center justify-center',
            ].join(' ')}
          >
            <span className="hidden lg:inline-block text-xs leading-2 tracking-tighter">
              REGISTRATION
            </span>
            <span className="text-xl">{step.label}</span>
            {step.bonus && (
              <div
                className={[
                  'absolute flex flex-row items-center gap-2 bg-black/50 rounded-full p-2',
                  'lg:left-1/2 lg:-translate-x-1/2',
                  isOdd
                    ? 'right-16 lg:-top-16 lg:right-auto'
                    : 'left-16 lg:-bottom-16',
                ].join(' ')}
              >
                <div className="w-4 lg:w-7 h-4 lg:h-7">
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
                    'text-xs lg:text-sm whitespace-nowrap',
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
