import React, { ReactNode } from 'react'
import OnlyIconBtn from '../box';

interface OnlyIconBtnSuccessProps {
    addType: "submit" | "reset" | "button" | undefined;
    children: ReactNode;
    func?: () => void;
    addClass?: string;
}

export const OnlyIconBtnSuccess: React.FC<OnlyIconBtnSuccessProps> = ({ addType, children, func, addClass })  => {
  return (
    <OnlyIconBtn
        addType={addType}
        onclick={func}
        addClass={`text-slate-900 bg-success hover:bg-success/90 focus:ring-success/20 ${addClass ?? ''}`}>
          {children}
    </OnlyIconBtn>
  )
}
