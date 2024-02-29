import React, { ReactNode } from 'react'
import OnlyIconBtn from '../box';

interface OnlyIconBtnSecondaryProps {
    addType: "submit" | "reset" | "button" | undefined;
    children: ReactNode;
    func?: () => void;
    addClass?: string;
}

export const OnlyIconBtnSecondary: React.FC<OnlyIconBtnSecondaryProps> = ({ addType, children, func, addClass })  => {
  return (
    <OnlyIconBtn
        addType={addType}
        onclick={func}
        addClass={`text-slate-500 bg-secondary hover:bg-secondary/70 focus:ring-secondary ${addClass ?? ''}`}>
          {children}
    </OnlyIconBtn>
  )
}
