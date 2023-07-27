import { FC } from 'react'
import Image from 'next/image'
import { links } from '@/lib/links'
import { twMerge } from 'tailwind-merge'

interface LinksProps {
 isMobile: boolean
 open: boolean
}

interface LinkProps {
 title: string
 url: string
 isMobile: boolean
}

const Link: FC<LinkProps> = ({ title, url, isMobile }) => {
 return (
  <a href={url}>
   <div
    className={twMerge(
     'text-sm md:text-base items-center flex gap-2 sm:gap-1 md:gap-2 text-white border-white border-2 px-2 opacity-70 hover:opacity-100 ',
     isMobile && 'w-[200px]'
    )}>
    {title}
    <Image
     src={'/link.png'}
     alt={''}
     width={16}
     height={16}
    />
   </div>
  </a>
 )
}

const Links: FC<LinksProps> = ({ isMobile, open }) => {
 return (
  <div
   className={twMerge(
    !isMobile ? ' flex flex-row justify-end gap-8 w-full mb-6' : 'flex flex-col gap-6 items-end absolute right-6 bg-[#242a33] p-6',
    isMobile && !open ? 'hidden' : 'flex'
   )}>
   {links.map((link) => (
    <Link
     isMobile={isMobile}
     key={link.id}
     title={link.title}
     url={link.url}
    />
   ))}
  </div>
 )
}

export default Links
