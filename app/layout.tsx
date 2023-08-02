import './globals.css'
import type { Metadata } from 'next'
import { Press_Start_2P, Fira_Code } from 'next/font/google'

const ps = Press_Start_2P({ subsets: ['latin-ext'], weight: ['400'], variable: '--ps' })
const fira = Fira_Code({ subsets: ['latin-ext'], weight: ['400'], variable: '--fira' })

export const metadata: Metadata = {
 title: 'Jordan Roberts',
 description: 'My project portfolio',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
 return (
  <html lang='en'>
   <body className={`${ps.variable} ${fira.variable} `}>{children}</body>
  </html>
 )
}
