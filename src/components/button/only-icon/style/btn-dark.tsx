import React, { ReactNode } from 'react'
import OnlyIconBtn from '../box';

interface OnlyIconBtnDarkProps {
    addType: "submit" | "reset" | "button" | undefined;
    children: ReactNode;
    func?: () => void;
}

export const OnlyIconBtnDark: React.FC<OnlyIconBtnDarkProps> = ({ addType, children, func })  => {
  return (
    <OnlyIconBtn
        addType={addType}
        onclick={func}
        addClass="text-white bg-dark hover:bg-dark/90 focus:ring-dark/20">
          {children}
      </OnlyIconBtn>
  )
}
