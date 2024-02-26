import React, { ReactNode } from 'react'
import OnlyIconBtn from '../style/only-icon-button';

interface OnlyIconBtnWarningProps {
    addType: "submit" | "reset" | "button" | undefined;
    children: ReactNode;
}

export const OnlyIconBtnWarning: React.FC<OnlyIconBtnWarningProps> = ({ addType, children })  => {
  return (
    <OnlyIconBtn
        addType={addType}
        addClass="text-slate-900 bg-warning hover:bg-warning/90 focus:ring-warning/20">
          {children}
    </OnlyIconBtn>
  )
}
