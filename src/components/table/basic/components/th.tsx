import React, { ReactNode } from 'react'

interface BasicThProps {
    addClass?: string | null;
    children: ReactNode;
}

export const BasicTh: React.FC<BasicThProps> = ({addClass, children}) => {
  return (
    <th className={`font-medium capitalize px-5 py-3 border-b-2 ${addClass || ""}`}>{children}</th>
  )
}
