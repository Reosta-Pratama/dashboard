import React, { Children, ReactNode } from 'react'
import OnlyIconBtn from '../box';

interface OnlyIconBtnPrimaryProps {
    addType: "submit" | "reset" | "button" | undefined;
    children: ReactNode;
    func?: () => void;
    addClass?: string;
}

export const OnlyIconBtnPrimary: React.FC<OnlyIconBtnPrimaryProps> = ({ addType, children, func, addClass })  => {
  return (
    <OnlyIconBtn
        addType={addType}
        onclick={func}
        addClass={`text-white bg-primary hover:bg-primary/90 focus:ring-primary/20 ${addClass ?? ''}`}>
        {children}
    </OnlyIconBtn>
  )
}
