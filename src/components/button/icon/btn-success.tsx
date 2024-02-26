import React, { ReactNode } from 'react'
import IconBtn from '../style/icon-button';

interface IconBtnSuccessProps {
    title: string;
    addType: "submit" | "reset" | "button" | undefined;
    children: ReactNode;
}

export const IconBtnSuccess: React.FC<IconBtnSuccessProps> = ({ title, addType, children })  => {
  return (
    <IconBtn
        title={title}
        addType={addType}
        addClass="text-slate-900 bg-success hover:bg-success/90 focus:ring-success/20">
          {children}
    </IconBtn>
  )
}
