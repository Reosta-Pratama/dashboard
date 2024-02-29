import React, { ReactNode } from 'react'

interface BasicTdProps {
    addClass?: string | null;
    children: ReactNode;
}

export const BasicTd: React.FC<BasicTdProps> = ({addClass, children}) => {
  return (
    <td className={`px-5 py-3 border-b ${addClass || ""}`}>{children}</td>
  )
}
