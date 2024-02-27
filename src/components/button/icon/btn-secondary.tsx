import React, { ReactNode } from 'react'
import IconBtn from '../style/icon-button';

interface IconBtnSecondaryProps {
    title: string;
    addType: "submit" | "reset" | "button" | undefined;
    children: ReactNode;
    func?: () => void;
}

export const IconBtnSecondary: React.FC<IconBtnSecondaryProps> = ({ title, addType, children, func })  => {
  return (
    <IconBtn
        title={title}
        onclick={func}
        addType={addType}
        addClass="text-slate-500 bg-secondary hover:bg-secondary/70 focus:ring-secondary">
          {children}
    </IconBtn>
  )
}
