import React, { ReactNode } from 'react'

interface SmallTdProps {
    addClass?: string | null;
    children: ReactNode;
}

export const SmallTd: React.FC<SmallTdProps> = ({addClass, children}) => {
  return (
    <td className={`px-4 py-2 border-b ${addClass || ""}`}>{children}</td>
  )
}
