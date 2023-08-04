'use client'

import { FC } from 'react'
import va from '@vercel/analytics'
import Icon from './icons'
import { twMerge } from 'tailwind-merge'

interface LinkProps {
 title: string
 url: string
 isMobile: boolean
 mailTo: boolean
}

const Link: FC<LinkProps> = ({ title, url, isMobile }) => {
 return (
  <a
   href={url}
   target='_blank'
   rel='noopener noreferrer'
   onClick={() => {
    va.track('Nav link', { link: title, url: url })
   }}>
   <div
    className={twMerge(
     'text-lg md:text-xl items-center flex gap-2 sm:gap-1 md:gap-2 text-white border-white border-2 px-2 opacity-70 hover:opacity-100 bg-bg-secondary font-secondary',
     isMobile && 'w-[300px] justify-center py-2'
    )}>
    <Icon
     iconName={title}
     size={24}
    />
    {title}
    <Icon
     iconName='Link'
     size={18}
    />
   </div>
  </a>
 )
}

export default Link
