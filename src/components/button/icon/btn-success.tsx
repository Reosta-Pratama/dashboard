import React, { ReactNode } from 'react'
import IconBtn from '../style/icon-button';

interface IconBtnSuccessProps {
    title: string;
    addType: "submit" | "reset" | "button" | undefined;
    children: ReactNode;
    func?: () => void;
}

export const IconBtnSuccess: React.FC<IconBtnSuccessProps> = ({ title, addType, children, func })  => {
  return (
    <IconBtn
        title={title}
        onclick={func}
        addType={addType}
        addClass="text-slate-900 bg-success hover:bg-success/90 focus:ring-success/20">
          {children}
    </IconBtn>
  )
}
