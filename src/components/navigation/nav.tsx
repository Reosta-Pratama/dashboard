"use client"

import Link from 'next/link';
import React, { ReactNode, useEffect, useRef, useState } from 'react';
import { FiActivity, FiChevronDown } from 'react-icons/fi';
import DropNav from './dropNav';
import { NavTop } from './topActive';
import { NavBot } from './botActive';
import { usePathname } from 'next/navigation';
import { useLinkDrop } from './toggle';

interface NavigationProps {
    name: string;
    href: string;
    dropdown?: string | null;
    droplink?: Array<Array<string>> | null;
    children: ReactNode;
    currentLink: boolean;
}

const Navigation: React.FC<NavigationProps> = ({ name, href, dropdown, droplink, children, currentLink }) => {
    const { isDropdownOpen, dropdownHeight, dropdownRef, toggleDropdown, iconStyle } = useLinkDrop();
    const pathname = usePathname();

    return (
        <li>
            <Link
                href={href}
                onClick={(e) => {
                    if (dropdown !== undefined) {
                        e.preventDefault()
                        toggleDropdown(name)
                    }
                }}
                className='group relative h-12 flex items-center
                        rounded-full pl-5 gap-3'>
                <span className={`text-xl duration-300 ease-in-out 
                    ${currentLink ? "text-primary" : "text-white"}`}>{children}</span>

                <div className={`flex flex-1 items-center capitalize select-none
                    duration-300 ease-in-out 
                    ${currentLink ? "text-slate-800" : "text-white"}`}>
                    {name} 
                    {dropdown !== undefined && (
                        <span className='text-base ml-auto mr-5' style={iconStyle}><FiChevronDown/></span>
                    )}
                </div>

                <div
                    className={`absolute -z-[1] top-0 left-0 
                        w-[230px] h-full rounded-l-full
                        duration-300 ease-in-out 
                        ${currentLink ? "bg-slate-100" : "group-hover:bg-[#ffffff0d]"}`}>
                </div>
                
                <NavTop active={currentLink}></NavTop>
                <NavBot active={currentLink}></NavBot>
            </Link>

            <ul
                ref={dropdownRef}
                data-nav={name}
                className={`dropdown-link 
                bg-[#0000001a] flex flex-col rounded-lg gap-1  
                    duration-300 ease-in-out overflow-hidden`}
                style={{ height: 0 }}>
                {
                    droplink
                        ?.map((item, index) => (
                        <li key={index}>
                            <Link href={item[1]} 
                                className={`h-12 flex items-center rounded-full pl-5 gap-3
                                ${pathname === item[1] ? "text-white" : "text-[#ffffffb3]"}`}>
                                <span className='text-xl'><FiActivity/></span>
                                <span className='flex flex-1 items-center capitalize'>
                                    {item[0]}
                                </span>
                            </Link>
                        </li>
                    ))
                }
            </ul>
        </li>
  );
}

export default Navigation;
