import React, { ReactNode } from 'react'
import IconBtn from '../style/icon-button';

interface IconBtnDarkProps {
    title: string;
    addType: "submit" | "reset" | "button" | undefined;
    children: ReactNode;
}

export const IconBtnDark: React.FC<IconBtnDarkProps> = ({ title, addType, children })  => {
  return (
    <IconBtn
        title={title}
        addType={addType}
        addClass="text-white bg-dark hover:bg-dark/90 focus:ring-dark/20">
          {children}
      </IconBtn>
  )
}
