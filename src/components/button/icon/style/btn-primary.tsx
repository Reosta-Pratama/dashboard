import React, { Children, ReactNode } from 'react'
import IconBtn from '../../style/icon-button';

interface IconBtnPrimaryProps {
    title: string;
    addType: "submit" | "reset" | "button" | undefined;
    children: ReactNode;
    func?: () => void;
}

export const IconBtnPrimary: React.FC<IconBtnPrimaryProps> = ({ title, addType, children, func })  => {
  return (
    <IconBtn
        title={title}
        onclick={func}
        addType={addType}
        addClass="text-white bg-primary hover:bg-primary/90 focus:ring-primary/20">
        {children}
    </IconBtn>
  )
}
