import React, { ReactNode } from 'react'
import OnlyIconBtn from '../box';

interface OnlyIconBtnSuccessProps {
    addType: "submit" | "reset" | "button" | undefined;
    children: ReactNode;
    func?: () => void;
}

export const OnlyIconBtnSuccess: React.FC<OnlyIconBtnSuccessProps> = ({ addType, children, func })  => {
  return (
    <OnlyIconBtn
        addType={addType}
        onclick={func}
        addClass="text-slate-900 bg-success hover:bg-success/90 focus:ring-success/20">
          {children}
    </OnlyIconBtn>
  )
}
