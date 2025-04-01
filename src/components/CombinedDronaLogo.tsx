import React from 'react'
import Image from 'next/image'

interface CombinedDronaLogoProps {
  className?: string
}

const CombinedDronaLogo: React.FC<CombinedDronaLogoProps> = ({ className = '' }) => {
  return (
    <div className={`flex flex-col items-center ${className}`}>
      <div className="flex items-center justify-center">

        <span className="relative text-7xl font-bold" style={{ color: '#0065FA', textShadow: '0 0 30px rgba(0,101,250,0.5)' }}>
          Drona
        </span>
      </div>
    </div>
  )
}

export default CombinedDronaLogo

