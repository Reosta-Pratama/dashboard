import React, { ReactNode } from 'react'
import OnlyIconBtn from '../box';

interface OnlyIconBtnPendingProps {
    addType: "submit" | "reset" | "button" | undefined;
    children: ReactNode;
    func?: () => void;
    addClass?: string;
}

export const OnlyIconBtnPending: React.FC<OnlyIconBtnPendingProps> = ({ addType, children, func, addClass })  => {
  return (
    <OnlyIconBtn
        addType={addType}
        onclick={func}
        addClass={`text-white bg-pending hover:bg-pending/90 focus:ring-pending/20 ${addClass ?? ''}`}>
          {children}
    </OnlyIconBtn>
  )
}
