import React, { ReactNode } from 'react'

interface SmallThProps {
    addClass?: string | null;
    children: ReactNode;
}

export const SmallTh: React.FC<SmallThProps> = ({addClass, children}) => {
  return (
    <th className={`font-medium capitalize px-4 py-2 border-b-2 ${addClass || ""}`}>{children}</th>
  )
}
