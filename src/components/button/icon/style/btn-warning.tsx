import React, { ReactNode } from 'react'
import IconBtn from '../box';

interface IconBtnWarningProps {
    title: string;
    addType: "submit" | "reset" | "button" | undefined;
    children: ReactNode;
    func?: () => void;
    addClass?: string;
}

export const IconBtnWarning: React.FC<IconBtnWarningProps> = ({ title, addType, children, func, addClass })  => {
  return (
    <IconBtn
        title={title}
        onclick={func}
        addType={addType}
        addClass={`text-slate-900 bg-warning hover:bg-warning/90 focus:ring-warning/20 ${addClass ?? ''}`}>
          {children}
    </IconBtn>
  )
}
