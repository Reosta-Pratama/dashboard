import React, { ReactNode } from 'react'
import OnlyIconBtn from '../box';

interface OnlyIconBtnDangerProps {
    addType: "submit" | "reset" | "button" | undefined;
    children: ReactNode;
    func?: () => void;
    addClass?: string;
}

export const OnlyIconBtnDanger: React.FC<OnlyIconBtnDangerProps> = ({ addType, children, func, addClass })  => {
  return (
    <OnlyIconBtn
        addType={addType}
        onclick={func}
        addClass={`text-white bg-danger hover:bg-danger/90 focus:ring-danger/20 ${addClass ?? ''}`}>
          {children}
    </OnlyIconBtn>
  )
}
