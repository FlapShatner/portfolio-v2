import { FC } from 'react'
import Image from 'next/image'
import HeroLink from './heroLink'

interface HeroProps {}

const heroText = "Hi, I'm Jordan"

const Hero: FC<HeroProps> = () => {
 return (
  <div className='flex flex-col items-center w-full gap-0 bg-bg-secondary py-6 md:py-0 md:justify-around md:flex-row md:items-start'>
   <Image
    src={'/pixel-pshop.png'}
    alt={"Author's avatar image"}
    width={342}
    height={336}
   />
   <div className='flex flex-col text-center md:text-start'>
    <h1 className='my-6 md:mt-16 md:mb-12 text-2xl lg:text-4xl '>{heroText}</h1>
    <p className='text-xl md:text-lg lg:text-2xl'>A web developer </p>
    <p className='text-base md:text-sm lg:text-lg'>from Springfield, MO</p>
    <p className='mt-7'>
     I make <HeroLink /> for the Internet
    </p>
   </div>
  </div>
 )
}

export default Hero
