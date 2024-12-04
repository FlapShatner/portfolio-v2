import { FC } from 'react'
import { projects } from '@/lib/projects'
import { twMerge } from 'tailwind-merge'
import Image from 'next/image'
import Icon from '@/components/icons'
import Tags from './tags'
import Source from './source'
import ProjectImage from './projectImage'

interface ProjectsProps {}

const Projects: FC<ProjectsProps> = () => {
 return (
  <>
   <div className='mt-24 border-b-4 border-white w-full'>
    <p className='text-xl text-center leading-5'>Projects</p>
   </div>
   <div className='flex items-center justify-center mb-24 '>
    <Icon
     iconName='Down'
     size={36}
    />
    <Icon
     iconName='Down'
     size={36}
    />

    <Icon
     iconName='Down'
     size={36}
    />
    <Icon
     iconName='Down'
     size={36}
    />
   </div>
   <div className='flex flex-col gap-16 font-secondary'>
    {projects.map((project) => (
     <div
      className='relative bg-bg-secondary flex flex-col lg:grid lg:grid-cols-4  '
      key={project.title}>
      <div
       style={{ backgroundColor: project.bg && project.bg }}
       className='border-4 border-white m-8 lg:m-0 lg:col-span-2 relative'>
       <ProjectImage project={project} />
      </div>
      <div className='lg:col-span-2 pt-4 pb-4 md:pb-4'>
       {project.description.map((p, i) => (
        <p
         className='text-base sm:text-lg lg:text-base min-[1160px]:text-xl px-8 pb-2'
         key={i}>
         {project.description[i]}
        </p>
       ))}
       <Tags tags={project.tags} />
       <Source project={project} />
      </div>
     </div>
    ))}
   </div>
  </>
 )
}

export default Projects
