import Menu from '@/components/menu'
import Hero from '@/components/hero'
import Projects from '@/components/projects'
import Email from '@/components/email'
import Contact from '@/components/contact'
import Footer from '@/components/footer'

export default function Home() {
 return (
  <div className='max-w-7xl w-full m-auto relative'>
   <main className='flex justify-center '>
    <Menu />
    <div className='flex min-h-screen flex-col items-center px-2 sm:px-8 pb-6 font-primary pt-20'>
     <Hero />
     <Projects />
     <Email />
     <Contact />
     <Footer />
    </div>
   </main>
  </div>
 )
}
