import Link from 'next/link';
import React from 'react'

interface ChildDropdownProps {
    title: string;
    href: string;
    addClass?: string;
    toggleDropdown?: () => void;
}

export const ChildDropdown: React.FC<ChildDropdownProps> = ({title, href, addClass, toggleDropdown}) => {
  return (
    <li>
        <Link href={href} 
            onClick={toggleDropdown}
            className={`w-full flex rounded-md p-2 whitespace-nowrap capitalize
            duration-300 ease-in-out hover:bg-slate-200 ${addClass}`}>
                {title}
        </Link>
    </li>
  )
}
