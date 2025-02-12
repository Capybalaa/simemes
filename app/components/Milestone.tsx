import Footprint from './Footprint'

export interface MilestoneProps {
  value: number
  steps: number[]
}

export default function Milestone({ value, steps }: MilestoneProps) {
  return (
    <div className="flex flex-col xl:flex-row gap-1 xl:gap-5 items-center *:shrink-0">
      {steps.map((step, index) => {
        const active = step <= value
        const next = steps[index + 1] || 0
        const isLast = index === steps.length - 1
        const isNextActive = next <= value
        const isbetweenNext = (step + next) / 2 <= value
        return [
          <div
            key={['step', step].join(':')}
            className={[
              `w-16 h-16 xl:w-20 xl:h-20 rounded-full bg-[#141314]/50 border-[3px]`,
              active
                ? 'text-[#30FF0E] border-[#30FF0E]'
                : 'text-white border-[#717171]',
              'flex flex-col items-center justify-center font-bebas-neue',
            ].join(' ')}
          >
            <span className="text-sm leading-4">PRICE</span>
            <span className="text-xl">${step}</span>
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
