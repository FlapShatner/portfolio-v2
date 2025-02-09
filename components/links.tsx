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

const JrIcon = ({ size, className }: { size: number, className: string }) => {
    return (
        <svg
            className={className}
            width={size}
            height={size}
            xmlns="http://www.w3.org/2000/svg" viewBox="0 0 66.59 66.28"><g ><path fill="#79ad98" d="m41.3 20.79-16.41-8.17V45.6L0 33.03l.06 16.73Q16.57 58 33.08 66.29l8.22-4.06z" /><path fill="#41418a" d="M33.2 0 16.4 8.39l33.23 16.56-16.85 8.5v16.14l17.08 8.51 16.73-8.38-16.65-8.23 16.32-8.26q.02-8.26.01-16.52z" /><path fill="#6060aa" d="m49.94 41.49-17.16-8.03 16.85-8.51 16.63 8.28z" /></g></svg>
    )
}

const Links: FC<LinksProps> = ({ isMobile, open }) => {
    return (
        <div
            className={twMerge(
                !isMobile ? ' flex flex-row justify-end gap-6 lg:gap-8 w-full mb-6' : 'flex flex-col gap-6 items-end fixed right-2 bg-bg-primary p-6 border-2 border-white',
                isMobile && !open ? 'hidden' : 'flex'
            )}>
            <JrIcon size={32} className='mr-auto ml-10' />
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
