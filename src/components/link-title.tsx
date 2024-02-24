"use client"
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { FaAngleRight } from 'react-icons/fa6'

const LinkTitle = () => {
    const [title, setTitle] = useState(document.title);
    
    useEffect(() => {   
        const handleRouteChange = () => {
            const pageTitle = document.title;
            setTitle(pageTitle);
        };

        // Menambahkan event listener untuk route changes
        const changeRoute = () => {
            window.addEventListener('popstate', handleRouteChange);
            return () => {
                window.removeEventListener('popstate', handleRouteChange);
            };
        };

        // Memasang event listener saat komponen pertama kali dimuat
        changeRoute();

        // Membersihkan event listener saat komponen unmount
        return () => {
            window.removeEventListener('popstate', handleRouteChange);
        };
    }, []);

    return (
        <ul className="flex items-center capitalize gap-2">
            <li className="text-[rgba(30,64,175,1)]">Apps</li>
            <li className="text-xs text-[#979a9c]">
                <FaAngleRight />
            </li>
            <li className="text-slate-800">
                <Link href="/">
                    {title}
                </Link>
            </li>
        </ul>
    )
}

export default LinkTitle
