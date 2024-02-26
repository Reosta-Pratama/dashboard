import React, { ReactNode } from 'react'
import OnlyIconBtn from '../style/only-icon-button';

interface OnlyIconBtnSuccessProps {
    addType: "submit" | "reset" | "button" | undefined;
    children: ReactNode;
}

export const OnlyIconBtnSuccess: React.FC<OnlyIconBtnSuccessProps> = ({ addType, children })  => {
  return (
    <OnlyIconBtn
        addType={addType}
        addClass="text-slate-900 bg-success hover:bg-success/90 focus:ring-success/20">
          {children}
    </OnlyIconBtn>
  )
}
