import React, { ReactNode } from 'react'

interface ValueTooltipProps{
    addClass?: string;
    bgColor: string;
    children: ReactNode;
    active?: boolean;
}

export const ValueTooltip: React.FC<ValueTooltipProps> = ({addClass, bgColor, children, active}) => {
  return (
    <div className={`absolute z-40 -top-12 left-1/2 -translate-x-1/2 rounded-md whitespace-nowrap 
        ${addClass}
        ${active == false ? "opacity-0 invisible" : "opacity-100 visible"}
        transition-all duration-300 ease-in-out`}
        style={{ backgroundColor: bgColor }}>
        <div className="absolute top-[80%] left-1/2 rotate-45
            border-[5px] border-solid"
            style={{ borderColor: bgColor}}></div>
        {children}
    </div>
  )
}
