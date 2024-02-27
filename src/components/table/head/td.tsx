import React, { ReactNode } from 'react'

interface HeadTdProps {
    addClass?: string | null;
    children: ReactNode;
}

export const HeadTd: React.FC<HeadTdProps> = ({addClass, children}) => {
  return (
    <td className={`px-5 py-3 border-b ${addClass || ""}`}>{children}</td>
  )
}
