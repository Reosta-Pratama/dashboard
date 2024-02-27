import React, { ReactNode } from 'react'

interface DropdownProps{
    placement?: string | null;
    isActive?: boolean;
    children: ReactNode;
}

export const Dropdown: React.FC<DropdownProps> = ({placement, isActive, children}) => {
  return (
    <div className={`absolute inset-0 w-fit 
        ${isActive ? 'translate-y-0 opacity-100' : 'translate-y-2 opacity-0'}
        transition-all duration-300 ease-in-out`}>
        <ul className="bg-white w-full flex flex-col shadow rounded-md gap-2 p-2">
            {children}
        </ul>
    </div>
  )
}
