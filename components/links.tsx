import { FC } from 'react'
import Icon from '@/components/icons'
import { links } from '@/lib/links'
import { twMerge } from 'tailwind-merge'
import EmailLink from './emailLink'

interface LinksProps {
 isMobile: boolean
 open: boolean
}

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
   rel='noopener noreferrer'>
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

const Links: FC<LinksProps> = ({ isMobile, open }) => {
 return (
  <div
   className={twMerge(
    !isMobile ? ' flex flex-row justify-end gap-6 lg:gap-8 w-full mb-6' : 'flex flex-col gap-6 items-end fixed right-2 bg-bg-primary p-6 border-2 border-white',
    isMobile && !open ? 'hidden' : 'flex'
   )}>
   {links.map((link) => (
    <Link
     isMobile={isMobile}
     key={link.id}
     title={link.title}
     url={link.url}
     mailTo={link.mailTo}
    />
   ))}
   <EmailLink />
  </div>
 )
}

export default Links
