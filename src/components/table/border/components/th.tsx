import React, { ReactNode } from 'react'

interface BorderThProps {
    addClass?: string | null;
    children: ReactNode;
}

export const BorderTh: React.FC<BorderThProps> = ({addClass, children}) => {
  return (
    <th className={`font-medium capitalize px-5 py-3 border border-b-2 ${addClass || ""}`}>{children}</th>
  )
}
