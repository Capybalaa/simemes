import Image from 'next/image'

export interface FootprintProps {
  active?: boolean
}

export default function Footprint({ active }: FootprintProps) {
  if (active) {
    return (
      <Image
        className="w-7 h-5"
        src="/footprint-solid.png"
        alt="footprint"
        width={56}
        height={40}
      />
    )
  }

  return (
    <Image
      className="w-7 h-5"
      src="/footprint-outline.png"
      alt="footprint"
      width={56}
      height={40}
    />
  )
}
