import React, { Children, ReactNode } from 'react'
import OnlyIconBtn from '../box';

interface OnlyIconBtnPrimaryProps {
    addType: "submit" | "reset" | "button" | undefined;
    children: ReactNode;
    func?: () => void;
}

export const OnlyIconBtnPrimary: React.FC<OnlyIconBtnPrimaryProps> = ({ addType, children, func })  => {
  return (
    <OnlyIconBtn
        addType={addType}
        onclick={func}
        addClass="text-white bg-primary hover:bg-primary/90 focus:ring-primary/20">
        {children}
    </OnlyIconBtn>
  )
}
