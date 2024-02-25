"use client"

import Link from 'next/link';
import React, { ReactNode, useState } from 'react';
import { FiChevronDown } from 'react-icons/fi';

interface NavigationProps {
    name: string;
    href: string;
    dropdown?: string | null;
    children: ReactNode;
}

const Navigation: React.FC<NavigationProps> = ({ name, href, dropdown, children }) => {
    const [isDropdownOpen, setisDropdownOpen] = useState(false)

    const toggleDropdown = () => {
        setisDropdownOpen(!isDropdownOpen)
    }

    const iconStyle = {
        transform: isDropdownOpen ? 'rotate(180deg)' : 'rotate(0)',
        transition: 'transform 0.3s ease',
    }

  return (
    <li>
        <Link href={href}
            onClick={(e) => {
                if (dropdown !== undefined) {
                    e.preventDefault();
                    toggleDropdown();
                }
            }}
            className='group relative h-12 flex items-center 
                rounded-full pl-5 gap-3 text-white'>
        <span className='text-xl'>{children}</span>
        <div className='flex flex-1 items-center capitalize'>
            {name}
            {dropdown !== undefined && (
                <span className='text-base ml-auto mr-5' style={iconStyle}><FiChevronDown /></span>
            )}
        </div>

        <div className="absolute -z-[1] top-0 left-0 w-[230px] h-full rounded-l-full
            duration-300 ease-in-out group-hover:bg-[#ffffff0d]"></div>
        </Link>
    </li>
  );
}

export default Navigation;
