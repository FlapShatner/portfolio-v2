import { FC } from 'react'
import { links } from '@/lib/links'

interface LinksProps {}

interface LinkProps {
 title: string
 url: string
}

const Link: FC<LinkProps> = ({ title, url }) => {
 return (
  <a href={url}>
   <div className='text-white border-white border-2 px-2 opacity-70 hover:opacity-100'>{title}</div>
  </a>
 )
}

const Links: FC<LinksProps> = () => {
 return (
  <div className='flex justify-end gap-8 w-full'>
   {links.map((link) => (
    <Link
     key={link.id}
     title={link.title}
     url={link.url}
    />
   ))}
  </div>
 )
}

export default Links
