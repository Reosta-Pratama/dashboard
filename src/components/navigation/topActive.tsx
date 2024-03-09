import React from 'react'

interface NavTopProps {
    active: boolean;
}

export const NavTop: React.FC<NavTopProps> = ({active}) => {
  return (
    <div className={`absolute bottom-full -right-5 pointer-events-none 
        bg-triangle bg-contain w-[30px] h-[30px] rotate-90 scale-105
        duration-300 ease-in-out
        ${active ? "opacity-100" : "opacity-0"}`}>
    </div>
  )
}
