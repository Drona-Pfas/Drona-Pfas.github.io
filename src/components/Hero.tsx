'use client'

import Image from 'next/image'
import { useRouter } from 'next/navigation'
import CombinedDronaLogo from './CombinedDronaLogo'

export default function Hero() {
  const router = useRouter()

  const handleDroneClick = () => {
    router.push('/meet-our-drone')
  }

  return (
    <section className="relative h-screen w-screen flex flex-col items-center justify-between bg-[#E5E7E6]">
      <div className="z-10 text-center mt-8">
        <CombinedDronaLogo className="mb-4" />
        <p className="text-2xl md:text-4xl text-[#0065FA] font-semibold mt-2 [text-shadow:_0_0_30px_rgba(0,101,250,0.5)]">
          Rethink Clean.
        </p>
      </div>
      <div
        className="w-full flex-grow flex flex-col items-center justify-center cursor-pointer"
        onClick={handleDroneClick}
      >
        <div className="w-full h-[80vh] relative -mt-24">
          <Image
            src="drone.png"
            alt="Drona Drone Model"
            fill
            sizes="(max-width: 768px) 100vw, 80vw"
            className="object-contain"
            priority
          />
          <div className="absolute bottom-0 left-0 right-0">
            <p className="text-center text-[#0065FA] text-lg">Click the drone to explore.</p>
          </div>
        </div>
      </div>
      <div className="h-8"></div>
    </section>
  )
}
