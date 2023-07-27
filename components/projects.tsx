import { FC } from 'react'
import { projects } from '@/lib/projects'
import Image from 'next/image'

interface ProjectsProps {}

const Projects: FC<ProjectsProps> = () => {
 return (
  <div className='flex flex-col gap-12'>
   {projects.map((project) => (
    <div
     className=' bg-bg-secondary '
     key={project.title}>
     <div className='border-4 border-white m-8'>
      <Image
       src={project.image}
       alt={`Screenshot of ${project.title}`}
       width={1169}
       height={838}
      />
     </div>
     <div className='p-3'>
      {project.description.map((p, i) => (
       <p
        className='text-xs leading-5 p-4'
        key={i}>
        {project.description[i]}
       </p>
      ))}
     </div>
    </div>
   ))}
  </div>
 )
}

export default Projects
