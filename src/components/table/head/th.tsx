import React, { ReactNode } from 'react'

interface HeadThProps {
    addClass?: string | null;
    children: ReactNode;
}

export const HeadTh: React.FC<HeadThProps> = ({addClass, children}) => {
  return (
    <th className={`font-medium capitalize px-5 py-3 border-b-2 ${addClass || ""}`}>{children}</th>
  )
}
