'use client'
import { useCopyToClipboard, useWindowSize } from 'usehooks-ts'
import { twMerge } from 'tailwind-merge'
import { FC, useState } from 'react'

interface EmailProps {}

const Email: FC<EmailProps> = () => {
 const [value, copy] = useCopyToClipboard()
 const { width } = useWindowSize()
 const [copied, setCopied] = useState(false)

 const isMobile = width < 680

 const handleCopy = () => {
  copy('jordan@jrobertsweb.dev')
  setCopied(true)
  setTimeout(() => {
   setCopied(false)
  }, 2000)
 }

 return (
  <div className='pb-12 pt-6 flex flex-col '>
   <span className={twMerge('text-center', copied ? 'opacity-100' : 'opacity-0')}>copied!</span>
   <span
    onClick={handleCopy}
    className='cursor-pointer  text-text-hl underline clamped'>
    jordan@jrobertsweb.dev
   </span>
  </div>
 )
}

export default Email
