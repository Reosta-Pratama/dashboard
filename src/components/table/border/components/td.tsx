import React, { ReactNode } from 'react'

interface BorderTdProps {
    addClass?: string | null;
    children: ReactNode;
}

export const BorderTd: React.FC<BorderTdProps> = ({addClass, children}) => {
  return (
    <td className={`px-5 py-3 border ${addClass || ""}`}>{children}</td>
  )
}
