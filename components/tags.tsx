import { FC } from 'react'

interface TagsProps {
 tags: string[]
}

const Tags: FC<TagsProps> = ({ tags }) => {
 return (
  <div className='flex flex-wrap gap-2 p-8'>
   {tags.map((tag, index) => (
    <span
     key={index}
     className='text-base lg:max-xl:text-[14px] font-black text-bg-primary bg-text-hl px-1'>
     {tag}
    </span>
   ))}
  </div>
 )
}

export default Tags
