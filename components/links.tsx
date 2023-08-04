import { FC } from 'react'
import Icon from '@/components/icons'
import { links } from '@/lib/links'
import { twMerge } from 'tailwind-merge'
import EmailLink from './emailLink'
import Link from './link'

interface LinksProps {
 isMobile: boolean
 open: boolean
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
