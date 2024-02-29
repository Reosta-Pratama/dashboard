import React, { ReactNode } from 'react'
import IconBtn from '../box';

interface IconBtnSuccessProps {
    title: string;
    addType: "submit" | "reset" | "button" | undefined;
    children: ReactNode;
    func?: () => void;
    addClass?: string;
}

export const IconBtnSuccess: React.FC<IconBtnSuccessProps> = ({ title, addType, children, func, addClass })  => {
  return (
    <IconBtn
        title={title}
        onclick={func}
        addType={addType}
        addClass={`text-slate-900 bg-success hover:bg-success/90 focus:ring-success/20 ${addClass ?? ''}`}>
          {children}
    </IconBtn>
  )
}
