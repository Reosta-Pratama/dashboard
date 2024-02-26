import React, { ReactNode } from 'react'
import OnlyIconBtn from '../style/only-icon-button';

interface OnlyIconBtnPendingProps {
    addType: "submit" | "reset" | "button" | undefined;
    children: ReactNode;
}

export const OnlyIconBtnPending: React.FC<OnlyIconBtnPendingProps> = ({ addType, children })  => {
  return (
    <OnlyIconBtn
        addType={addType}
        addClass="text-white bg-pending hover:bg-pending/90 focus:ring-pending/20">
          {children}
    </OnlyIconBtn>
  )
}
