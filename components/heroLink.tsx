'use client'
import { FC } from 'react'
import va from '@vercel/analytics'

interface HeroLinkProps {}

const HeroLink: FC<HeroLinkProps> = () => {
 const url = 'https://github.com/FlapShatner'

 return (
  <a
   className='text-text-hl underline hover:text-text-hl-hover'
   href={url}
   onClick={() => {
    va.track('Hero link', { link: 'things', url: url })
   }}>
   things
  </a>
 )
}

export default HeroLink
