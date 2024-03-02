import React, { ReactNode } from 'react'

interface SlideOverCloseProps {
    children: ReactNode;
    addClass?: string;
}

export const SlideOverClose:React.FC<SlideOverCloseProps> = ({children, addClass}) => {
  return (
    <div className={`${addClass ?? ''} w-full`}>
        {children}
    </div>
  )
}
