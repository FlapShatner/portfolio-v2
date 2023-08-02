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
  <div className='py-12'>
   <a
    className=' text-text-hl underline clamped'
    href='mailto:jordan@jrobertsweb.dev'>
    jordan@jrobertsweb.dev
   </a>
   <button
    onClick={handleCopy}
    className='ml-auto mt-2 flex gap-2 w-48 text-lg text-text-hl items-center justify-center cursor-pointer p-1 border-2 border-text-hl font-secondary opacity-60 hover:opacity-100 focus-within:opacity-100 focus-visible:outline-text-hl'>
    {copied ? 'Copied!' : 'Copy address'}
    <Image
     src={'/copy-px-bl.png'}
     width={20}
     height={20}
     alt='Copy email address to clipboard'
    />
   </button>
  </div>
 )
}

export default Email
