import Link from 'next/link';
import React, { ReactElement } from 'react'

interface ChildDropdownHeadFootProps {
    icon: ReactElement;
    title: string;
    href: string;
    addClass?: string;
    toggleDropdown?: () => void;
}

export const ChildDropdownHeadFoot: React.FC<ChildDropdownHeadFootProps> = ({icon, title, href, addClass, toggleDropdown}) => {
  return (
    <li>
        <Link href={href} 
            onClick={toggleDropdown}
            className={`w-full flex items-center rounded-md gap-2 p-2 whitespace-nowrap capitalize
                duration-300 ease-in-out hover:bg-slate-200 ${addClass ?? ''}`}>
                <span>{icon}</span>
                <span>{title}</span>
        </Link>
    </li>
  )
}
