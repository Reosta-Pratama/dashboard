import Divider2 from '@/components/divider/divider-2';
import React, { ReactNode } from 'react'
import { HeaderDropdown } from './header';
import { FooterDropdown } from './footer';

interface DropdownHeadFootProps{
    header: string;
    footer1: {
      title: string;
      href: string;
    };
    footer2: {
      title: string;
      href: string;
    };
    children: ReactNode;
    addClass?: string;
    dataOrder: string;
}

export const DropdownHeadFoot: React.FC<DropdownHeadFootProps> = ({header, footer1, footer2, children, addClass, dataOrder}) => {
  return (
    <div data-order={dataOrder} 
        className={`dropdown z-[1] absolute top-0 right-0 w-fit 
        translate-y-20 opacity-0 invisible
        transition-all duration-300 ease-in-out`}>
        <div className={`bg-white min-w-40 flex flex-col shadow rounded-md p-2 ${addClass}`}>
            <HeaderDropdown header={header}></HeaderDropdown>
            <Divider2></Divider2>
            <ul className="flex flex-col gap-2">
                {children}
            </ul>
            <Divider2></Divider2>
            <FooterDropdown footer1={footer1} footer2={footer2}></FooterDropdown>
        </div>
    </div>
  )
}
