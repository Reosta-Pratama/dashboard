import { BtnPrimary } from '@/components/button/basic/style/btn-primary'
import { LinkBtnPrimary } from '@/components/button/link/style/btn-primary';
import { LinkBtnSecondary } from '@/components/button/link/style/btn-secondary';
import Link from 'next/link';
import React from 'react'

interface FooterDropdownProps {
    footer1: {
        title: string;
        href: string;
    };
    footer2: {
        title: string;
        href: string;
    };
}

export const FooterDropdown: React.FC<FooterDropdownProps> = ({footer1, footer2}) => {
  return (
    <div className='flex justify-between p-2'>
        <Link
            href={footer1.href}
            className="bg-primary hover:bg-primary/90 focus:ring-primary/20
                flex justify-center rounded-md shadow-sm px-2 py-1 
                duration-200 ease-in-out focus:ring-4">
                <span className='text-white font-medium capitalize'>{footer1.title}</span>
        </Link>

        <Link
            href={footer2.href}
            className="bg-secondary hover:bg-secondary/70 focus:ring-secondary
                flex justify-center rounded-md shadow-sm px-2 py-1 
                duration-200 ease-in-out focus:ring-4">
                <span className='text-slate-500 font-medium capitalize'>{footer2.title}</span>
        </Link>
    </div>
  )
}
