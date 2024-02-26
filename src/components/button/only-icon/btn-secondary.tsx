import React, { ReactNode } from 'react'
import OnlyIconBtn from '../style/only-icon-button';

interface OnlyIconBtnSecondaryProps {
    addType: "submit" | "reset" | "button" | undefined;
    children: ReactNode;
}

export const OnlyIconBtnSecondary: React.FC<OnlyIconBtnSecondaryProps> = ({ addType, children })  => {
  return (
    <OnlyIconBtn
        addType={addType}
        addClass="text-slate-500 bg-secondary hover:bg-secondary/70 focus:ring-secondary">
          {children}
    </OnlyIconBtn>
  )
}
