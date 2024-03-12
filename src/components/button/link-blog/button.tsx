import Link from 'next/link';
import React, { ReactNode } from 'react'

interface BtnBlogProps{
    href: string;
    onMouseEnter?: () => void;
    onMouseLeave?: () => void;
    addClass?: string;
    children: ReactNode;
}

const BtnBlog: React.FC<BtnBlogProps> = ({href, onMouseEnter, onMouseLeave, addClass, children}) => {
  return (
    <Link
        href={href ?? "#"}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        className={`flex justify-center items-center 
            rounded-full  text-xs
            border border-solid border-slate-300
            duration-300 ease-in-out
            ${addClass}`}>
        {children}
    </Link>
  )
}

export default BtnBlog