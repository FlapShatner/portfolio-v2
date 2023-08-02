import { FC } from 'react'
import Image from 'next/image'

interface HeroProps {}

const heroText = "Hi, I'm Jordan"

const Hero: FC<HeroProps> = () => {
 return (
  <div className='flex flex-col items-center w-full gap-0 bg-bg-secondary py-6 md:py-0 md:justify-center md:pr-8 md:gap-12 md:flex-row md:items-start'>
   <Image
    src={'/pixel-pshop.png'}
    alt={"Author's avatar image"}
    width={342}
    height={336}
   />
   <div className='flex flex-col text-center md:text-start'>
    <h1 className='my-6 md:mt-16 md:mb-12 text-2xl md:text-xl lg:text-3xl '>{heroText}</h1>
    <p className='text-xl md:text-lg lg:text-2xl'>A web developer </p>
    <p className='text-base md:text-sm lg:text-lg'>from Springfield, MO</p>
    <p className='mt-7'>
     I make{' '}
     <a
      className='text-text-hl underline hover:text-text-hl-hover'
      href='https://github.com/FlapShatner'>
      things
     </a>{' '}
     for the Internet
    </p>
   </div>
  </div>
 )
}

export default Hero
