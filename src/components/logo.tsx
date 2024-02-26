import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Logo = () => {
    return (
        <Link
            href='/'
            className="h-[67px] flex items-center gap-3 pl-5
                border-b border-[#ffffff14]">
            <Image
                src="/img/logo.png"
                alt="Logo apps"
                width={24}
                height={24}
                loading="lazy"></Image>
            <h1 className="text-lg text-white capitalize">admin</h1>
        </Link>
    )
}

export default Logo