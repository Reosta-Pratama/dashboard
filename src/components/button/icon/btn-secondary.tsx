import React, { ReactNode } from 'react'
import IconBtn from '../style/icon-button';

interface IconBtnSecondaryProps {
    title: string;
    addType: "submit" | "reset" | "button" | undefined;
    children: ReactNode;
}

export const IconBtnSecondary: React.FC<IconBtnSecondaryProps> = ({ title, addType, children })  => {
  return (
    <IconBtn
        title={title}
        addType={addType}
        addClass="text-slate-500 bg-secondary hover:bg-secondary/70 focus:ring-secondary">
          {children}
    </IconBtn>
  )
}