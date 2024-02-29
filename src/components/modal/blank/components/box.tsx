import React, { ReactNode } from 'react'

interface ModalBlankProps {
    children: ReactNode;
    addClass?: string;
}

export const ModalBlank:React.FC<ModalBlankProps> = ({children, addClass}) => {
  return (
    <div className={`${addClass} w-full`}>
        {children}
    </div>
  )
}
