import { FC } from 'react'
import { projects } from '@/lib/projects'
import Image from 'next/image'

interface ProjectsProps {}

const Projects: FC<ProjectsProps> = () => {
 return (
  <>
   <div className='m-12 border-b-4 border-white w-full'>
    <p className='text-lg text-center leading-5'>Projects</p>
   </div>
   <div className='flex flex-col gap-12 lg:gap-8'>
    {projects.map((project) => (
     <div
      className=' bg-bg-secondary flex flex-col lg:grid lg:grid-cols-3 '
      key={project.title}>
      <div className='border-4 border-white m-8 lg:m-0 lg:col-span-1 '>
       <Image
        src={project.image}
        alt={`Screenshot of ${project.title}`}
        width={1169}
        height={838}
       />
      </div>
      <div className='p-3 lg:col-span-2'>
       {project.description.map((p, i) => (
        <p
         className='text-xs md:text-sm leading-5 p-4'
         key={i}>
         {project.description[i]}
        </p>
       ))}
      </div>
     </div>
    ))}
   </div>
  </>
 )
}

export default Projects
