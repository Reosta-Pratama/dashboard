import React, { ReactNode } from 'react'
import OnlyIconBtn from '../style/only-icon-button';

interface OnlyIconBtnDangerProps {
    addType: "submit" | "reset" | "button" | undefined;
    children: ReactNode;
}

export const OnlyIconBtnDanger: React.FC<OnlyIconBtnDangerProps> = ({ addType, children })  => {
  return (
    <OnlyIconBtn
        addType={addType}
        addClass="text-white bg-danger hover:bg-danger/90 focus:ring-danger/20">
          {children}
    </OnlyIconBtn>
  )
}
