'use client'
import Image from 'next/image'
import { useCopyToClipboard } from 'usehooks-ts'

import { FC, useState } from 'react'

interface EmailProps {}

const Email: FC<EmailProps> = () => {
 const [value, copy] = useCopyToClipboard()
 const [copied, setCopied] = useState(false)

 const handleCopy = () => {
  copy('jordan@jrobertsweb.dev')
  setCopied(true)
  setTimeout(() => {
   setCopied(false)
  }, 2000)
 }

 return (
  <div className='py-12 items-center gap-3 flex '>
   <a
    className=' text-text-hl  underline clamped'
    href='mailto:jordan@jrobertsweb.dev'>
    jordan@jrobertsweb.dev
   </a>
   <div
    onClick={handleCopy}
    className='flex-col flex text-xs text-text-hl items-center justify-end cursor-pointer p-1 border-2 border-transparent hover:border-text-hl rounded-lg'>
    <Image
     src={'/copy-px-bl.png'}
     width={20}
     height={20}
     alt='Copy email address to clipboard'
    />
    {copied ? 'Done!' : 'Copy'}
   </div>
  </div>
 )
}

export default Email
