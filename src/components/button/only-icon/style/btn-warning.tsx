import React, { ReactNode } from 'react'
import OnlyIconBtn from '../box';

interface OnlyIconBtnWarningProps {
    addType: "submit" | "reset" | "button" | undefined;
    children: ReactNode;
    func?: () => void;
    addClass?: string;
}

export const OnlyIconBtnWarning: React.FC<OnlyIconBtnWarningProps> = ({ addType, children, func, addClass })  => {
  return (
    <OnlyIconBtn
        addType={addType}
        onclick={func}
        addClass={`text-slate-900 bg-warning hover:bg-warning/90 focus:ring-warning/20 ${addClass ?? ''}`}>
          {children}
    </OnlyIconBtn>
  )
}
