import React, { ReactNode } from 'react'

interface BoxAlertBasicProps{
    children: ReactNode;
    addClass?: string;
}

export const BoxAlertBasic:React.FC<BoxAlertBasicProps> = ({children, addClass}) => {
  return (
    <div className={`${addClass} w-full px-5 py-4
        border border-solid rounded-md`}>
        {children}
    </div>
  )
}
