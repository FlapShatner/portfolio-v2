'use client'
import { FC } from 'react'
import Icon from './icons'
import va from '@vercel/analytics'

interface OldSiteProps {}

const OldSite: FC<OldSiteProps> = () => {
 const url = 'https://old.jrobertsweb.dev'

 return (
  <a
   href={url}
   className='flex items-center gap-1 text-text-hl underline'
   target='_blank'
   rel='noopener noreferrer'
   onClick={() => {
    va.track('Old site link', { link: 'Old site', url: url })
   }}>
   Old Portfolio
   <Icon
    iconName='Link'
    size={12}
   />
  </a>
 )
}

const FooterSource: FC<OldSiteProps> = () => {
 const url = 'https://github.com/FlapShatner/portfolio-v2'

 return (
  <a
   href={url}
   className='flex gap-1 items-center'
   target='_blank'
   rel='noopener noreferrer'
   onClick={() => {
    va.track('Footer link', { link: 'V2 Source Repo', url: url })
   }}>
   <Icon
    iconName='Github'
    size={28}
   />
   <span className='underline'>Source</span>
  </a>
 )
}

export { OldSite, FooterSource }
