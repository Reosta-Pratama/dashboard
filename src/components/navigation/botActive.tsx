import React from 'react'

interface NavBotProps {
    active: boolean;
}

export const NavBot: React.FC<NavBotProps> = ({active}) => {
  return (
    <div className={`absolute top-full -right-5 pointer-events-none 
        bg-triangle bg-contain w-[30px] h-[30px] scale-105
        duration-300 ease-in-out
        ${active ? "opacity-100" : "opacity-0"}`}>
    </div>
  )
}
