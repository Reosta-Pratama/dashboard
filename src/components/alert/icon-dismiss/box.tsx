import React, { ReactNode } from 'react'

interface BoxAlertIconDismissProps{
    children: ReactNode;
    addClass?: string;
}

export const BoxAlertIconDismiss:React.FC<BoxAlertIconDismissProps> = ({children, addClass}) => {
  return (
    <div className={`${addClass ?? ''} w-full px-5 py-4
        flex justify-between items-center
        border border-solid rounded-md`}>
        {children}
    </div>
  )
}
