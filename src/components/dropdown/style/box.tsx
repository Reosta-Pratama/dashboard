import React, { ReactNode } from 'react'

interface BoxDropdownProps {
  children: ReactNode;
}

export const BoxDropdown: React.FC<BoxDropdownProps> = ({children}) => {
  return (
      <div className="flex justify-center">
        {children}
      </div>
  )
}
