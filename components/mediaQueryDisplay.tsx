'use client'

// Install usehooks-ts: npm i usehooks-ts
// Add this to top page.tsx

import { FC } from 'react'
import { useWindowSize } from 'usehooks-ts'
interface MqProps {}

const Mq: FC<MqProps> = () => {
 const { width } = useWindowSize()

 return (
  <div className='fixed left-24 bottom-24 bg-slate-800 p-4 rounded-xl border-2 border-white'>
   <h2>{width < 640 ? 'Mobile' : width < 768 ? 'Sm' : width < 1024 ? 'Md' : width < 1280 ? 'Lg' : width < 1536 ? 'Xl' : '2xl'}</h2>
   <p>{`${width} px`}</p>
  </div>
 )
}

export default Mq
