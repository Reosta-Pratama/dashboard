import React, { Children, ReactNode } from 'react'
import IconBtn from '../box';

interface IconBtnPrimaryProps {
    title: string;
    addType: "submit" | "reset" | "button" | undefined;
    children: ReactNode;
    func?: () => void;
    addClass?: string;
}

export const IconBtnPrimary: React.FC<IconBtnPrimaryProps> = ({ title, addType, children, func, addClass })  => {
  return (
    <IconBtn
        title={title}
        onclick={func}
        addType={addType}
        addClass={`text-white bg-primary hover:bg-primary/90 focus:ring-primary/20 ${addClass ?? ''}`}>
        {children}
    </IconBtn>
  )
}
