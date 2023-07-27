import Menu from '@/components/menu'
import Hero from '@/components/hero'
import Projects from '@/components/projects'
import Email from '@/components/email'

export default function Home() {
 return (
  <div className='max-w-7xl w-full m-auto'>
   <main className='flex min-h-screen flex-col items-center px-2 sm:px-8 py-6'>
    <Menu />
    <Hero />
    <Projects />
    <Email />
   </main>
  </div>
 )
}
