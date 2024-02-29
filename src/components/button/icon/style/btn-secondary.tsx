import React, { ReactNode } from 'react'
import IconBtn from '../box';

interface IconBtnSecondaryProps {
    title: string;
    addType: "submit" | "reset" | "button" | undefined;
    children: ReactNode;
    func?: () => void;
    addClass?: string;
}

export const IconBtnSecondary: React.FC<IconBtnSecondaryProps> = ({ title, addType, children, func, addClass })  => {
  return (
    <IconBtn
        title={title}
        onclick={func}
        addType={addType}
        addClass={`text-slate-500 bg-secondary hover:bg-secondary/70 focus:ring-secondary ${addClass ?? ''}`}>
          {children}
    </IconBtn>
  )
}
