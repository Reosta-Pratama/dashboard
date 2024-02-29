import React, { ReactNode } from 'react'
import IconBtn from '../box';

interface IconBtnDarkProps {
    title: string;
    addType: "submit" | "reset" | "button" | undefined;
    children: ReactNode;
    func?: () => void;
    addClass?: string;
}

export const IconBtnDark: React.FC<IconBtnDarkProps> = ({ title, addType, children, func, addClass })  => {
  return (
    <IconBtn
        title={title}
        onclick={func}
        addType={addType}
        addClass={`text-white bg-dark hover:bg-dark/90 focus:ring-dark/20 ${addClass ?? ''}`}>
          {children}
      </IconBtn>
  )
}
