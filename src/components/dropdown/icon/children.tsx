import Link from 'next/link';
import React, { ReactElement } from 'react'

interface ChildDropdownIconProps {
    title: string;
    icon: ReactElement;
    href: string;
    addClass?: string;
    toggleDropdown?: () => void;
}

export const ChildDropdownIcon: React.FC<ChildDropdownIconProps> = ({title, icon, href, addClass, toggleDropdown}) => {
  return (
    <li>
        <Link href={href} 
            onClick={toggleDropdown}
            className={`w-full flex items-center 
                rounded-md gap-2 p-2 whitespace-nowrap capitalize
                duration-300 ease-in-out hover:bg-slate-200 ${addClass}`}>
                <span>{icon}</span>
                <span>{title}</span>
        </Link>
    </li>
  )
}
