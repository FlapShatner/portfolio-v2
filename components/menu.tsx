'use client'
import React, { useState } from 'react'
import Links from './links'
import Image from 'next/image'
import { useWindowSize } from 'usehooks-ts'
import { FC } from 'react'

interface MenuProps {}

const Menu: FC<MenuProps> = () => {
 const { width } = useWindowSize()

 const [open, setOpen] = useState(false)
 const isMobile = width < 680

 return (
  <div className='w-full max-w-7xl fixed pt-6 pr-8 bg-bg-primary z-10'>
   {isMobile && (
    <div
     onClick={() => setOpen(!open)}
     className='text-white cursor-pointer text-sm mr-4 opacity-70 hover:opacity-100 w-max ml-auto pb-4'>
     <Image
      src={'/burger-pixel2.png'}
      alt={'Burger menu icon'}
      width={56}
      height={56}
     />
    </div>
   )}
   <Links
    isMobile={isMobile}
    open={open}
   />
  </div>
 )
}

export default Menu
