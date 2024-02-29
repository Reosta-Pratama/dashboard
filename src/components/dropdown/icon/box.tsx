import React, { ReactNode } from 'react'

interface DropdownIconProps{
    children: ReactNode;
    addClass?: string;
    dataOrder: string;
}

export const DropdownIcon: React.FC<DropdownIconProps> = ({children, addClass, dataOrder}) => {
  return (
    <div data-order={dataOrder} 
        className={`dropdown z-[1] absolute top-0 right-0 w-fit 
        translate-y-20 opacity-0 invisible
        transition-all duration-300 ease-in-out`}>
        <ul className={`bg-white min-w-40 flex flex-col shadow rounded-md gap-2 p-2 ${addClass}`}>
            {children}
        </ul>
    </div>
  )
}
