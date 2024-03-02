import Divider2 from '@/components/divider/divider-2';
import React, { ReactNode } from 'react'
import { HeaderDropdown } from '../../header-footer/components/header';

interface DropdownHeadIconProps{
    header: string;
    children: ReactNode;
    addClass?: string;
    dataOrder: string;
}

export const DropdownHeadIcon: React.FC<DropdownHeadIconProps> = ({header, children, addClass, dataOrder}) => {
  return (
    <div data-order={dataOrder} 
        className={`dropdown absolute z-[1] top-0 right-0 w-fit 
        translate-y-20 opacity-0 invisible
        transition-all duration-300 ease-in-out`}>
        <div className={`bg-white min-w-40 flex flex-col shadow rounded-md p-2 ${addClass ?? ''}`}>
            <HeaderDropdown header={header}></HeaderDropdown>
            <Divider2></Divider2>
            <ul className="flex flex-col gap-2">
                {children}
            </ul>
        </div>
    </div>
  )
}
