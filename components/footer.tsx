import { FC } from 'react'
import Icon from './icons'
interface FooterProps {}

const Footer: FC<FooterProps> = () => {
 const year = new Date().getFullYear()
 return (
  <div className='pt-6 text-xs md:text-sm flex justify-between items-center w-full font-secondary'>
   <a
    href='#'
    className='flex items-center gap-1 text-text-hl underline'>
    Old Portfolio
    <Icon
     iconName='Link'
     size={12}
    />
   </a>
   <div className='flex flex-col sm:flex-row sm:gap-1 items-center'>
    <span>Copyright ©</span> <span>{`Jordan Roberts ${year}`}</span>
   </div>
   <a
    href='https://github.com/FlapShatner/portfolio-v2'
    className='flex gap-1 items-center'>
    <Icon
     iconName='Github'
     size={28}
    />
    <span className='underline'>Source</span>
   </a>
  </div>
 )
}

export default Footer
