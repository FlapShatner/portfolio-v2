import { FC } from 'react'
import { projects } from '@/lib/projects'
import Image from 'next/image'
import Icon from '@/components/icons'

interface ProjectsProps {}

const Projects: FC<ProjectsProps> = () => {
 return (
  <>
   <div className='m-12 border-b-4 border-white w-full'>
    <p className='text-lg text-center leading-5'>Projects</p>
   </div>
   <div className='flex flex-col gap-12 lg:gap-8 font-secondary'>
    {projects.map((project) => (
     <div
      className='relative bg-bg-secondary flex flex-col lg:grid lg:grid-cols-3 '
      key={project.title}>
      <div className='border-4 border-white m-8 lg:m-0 lg:col-span-1 relative '>
       <a
        href={project.liveUrl}
        target='_blank'
        rel='noopener noreferrer'>
        <div className='absolute flex justify-center items-center top-0 left-0 w-full h-full bg-bg-primary opacity-0 hover:opacity-70 text-3xl'>Visit</div>
        <Image
         src={project.image}
         alt={`Screenshot of ${project.title}`}
         width={1169}
         height={838}
        />
       </a>
      </div>
      <div className='lg:col-span-2 pt-4 pb-4 md:pb-4'>
       {project.description.map((p, i) => (
        <p
         className='text-base sm:text-lg lg:text-base xl:text-xl px-8 pb-2'
         key={i}>
         {project.description[i]}
        </p>
       ))}
       <a
        className='absolute right-8 bottom-1 flex gap-1 text-text-hl justify-end hover:text-text-hl-hover'
        href={project.srcUrl}
        target='_blank'
        rel='noopener noreferrer'>
        <Icon
         iconName='Github'
         size={24}
        />
        <span className='underline'>Source code</span>
       </a>
      </div>
     </div>
    ))}
   </div>
  </>
 )
}

export default Projects
