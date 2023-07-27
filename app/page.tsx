import Menu from '@/components/menu'
import Hero from '@/components/hero'
import Projects from '@/components/projects'

export default function Home() {
 return (
  <div className='max-w-7xl w-full m-auto'>
   <main
    className='flex
    min-h-screen 
    flex-col 
    items-center px-2 sm:px-8 py-6'>
    <Menu />
    <Hero />
    <div className='m-12 border-b-4 border-white w-full'>
     <p className='text-lg text-center leading-5'>Projects</p>
    </div>
    <Projects />
   </main>
  </div>
 )
}
