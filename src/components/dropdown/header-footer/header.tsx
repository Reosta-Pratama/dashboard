import React from 'react'

interface HeaderDropdownProps{
    header: string;
}

export const HeaderDropdown: React.FC<HeaderDropdownProps> = ({header}) => {
  return (
    <h2 className='font-medium capitalize p-2'>{header}</h2>
  )
}
