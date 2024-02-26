import Link from 'next/link';
import React from 'react'

interface LinkBtnProps {
    title: string;
    href: string;
    addClass?: string | null;
}

const LinkBtn: React.FC<LinkBtnProps> = ({ title, href, addClass  }) => {
    return (
        <Link
            href={href}
            className={`font-medium capitalize  
            w-24 flex justify-center rounded-md shadow-sm px-3 py-2 
            duration-200 ease-in-out focus:ring-4
            ${addClass ?? ''}`}>
            {title}
        </Link>
    )
}

export default LinkBtn
