'use client'
import Image from 'next/image'
import { useCopyToClipboard, useWindowSize } from 'usehooks-ts'

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
  <div className='py-12'>
   <a
    className=' text-text-hl underline clamped'
    href='mailto:jordan@jrobertsweb.dev'>
    jordan@jrobertsweb.dev
   </a>
   <button
    onClick={handleCopy}
    className='ml-auto mt-2 flex gap-2 text-xs md:text-lg px-2 text-text-hl items-center justify-center cursor-pointer border md:border-2 border-text-hl font-secondary opacity-60 hover:opacity-100 focus-within:opacity-100 focus-visible:outline-text-hl'>
    {copied ? 'Copied!' : 'Copy'}
    <Image
     src={'/copy-px-bl.png'}
     width={isMobile ? 12 : 18}
     height={isMobile ? 12 : 18}
     alt='Copy email address to clipboard'
    />
   </button>
  </div>
 )
}

export default Email
