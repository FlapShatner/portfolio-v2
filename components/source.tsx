'use client'

import { FC } from 'react'
import va from '@vercel/analytics'
import Icon from './icons'
import { Project } from '@/lib/projects'

interface SourceProps {
 project: Project
}

const Source: FC<SourceProps> = ({ project }) => {
 return (
  <a
   className='absolute right-8 bottom-1 flex gap-1 text-text-hl justify-end hover:text-text-hl-hover'
   href={project.srcUrl}
   target='_blank'
   rel='noopener noreferrer'
   onClick={() => {
    va.track('Source link', { project: project.title })
   }}>
   <Icon
    iconName='Github'
    size={24}
   />
   <span className='underline'>Source code</span>
  </a>
 )
}

export default Source
