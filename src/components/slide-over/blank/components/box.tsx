import React, { ReactNode } from 'react'

interface SlideOverProps {
    children: ReactNode;
    addClass?: string;
}

export const SlideOver:React.FC<SlideOverProps> = ({children, addClass}) => {
  return (
    <div className={`${addClass ?? ''} w-full`}>
        {children}
    </div>
  )
}
