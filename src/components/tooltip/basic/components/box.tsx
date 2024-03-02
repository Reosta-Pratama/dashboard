import React, { ReactNode } from 'react'

interface TooltipProps {
    children: ReactNode;
    addClass?: string;
}

export const Tooltip:React.FC<TooltipProps> = ({children, addClass}) => {
  return (
    <div className={`${addClass ?? ''} w-full`}>
        <div className='relative'>
            {children}
        </div>
    </div>
  )
}
