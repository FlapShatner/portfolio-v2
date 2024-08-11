import { FC } from 'react'
import { OldSite, FooterSource } from './footerLinks'
interface FooterProps {}

const Footer: FC<FooterProps> = () => {
 const year = new Date().getFullYear()
 return (
  <div className='pt-6 text-xs md:text-sm flex justify-between items-center w-full font-secondary'>
   {/* <OldSite /> */}
   <div className='flex flex-col sm:flex-row sm:gap-1 items-center'>
    <span>Copyright ©</span> <span>{`Jordan Roberts ${year}`}</span>
   </div>
   <FooterSource />
  </div>
 )
}

export default Footer
