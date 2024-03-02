import React, { ReactNode } from 'react'

interface GridProps{
    children: ReactNode;
    addClass?: string;
}

export const Grid: React.FC<GridProps> = ({children, addClass}) => {
  return (
    <div className={`grid grid-cols-2 gap-5 ${addClass}`}>
        {children}
    </div>
  )
}
