import Image from 'next/image'

const DronaLogo: React.FC<React.SVGProps<SVGSVGElement>> = (props) => {
  return (
    <Image
      src="dronalogo.png"
      alt="DronaLogo"
      width={48}
      height={48}
      className={`${props.className} brightness-0 invert`}
      style={{ filter: 'brightness(0) invert(27%) sepia(98%) saturate(1960%) hue-rotate(211deg) brightness(97%) contrast(95%)' }}
    />
  )
}

export default DronaLogo

