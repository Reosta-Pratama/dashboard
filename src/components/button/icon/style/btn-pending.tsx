import React, { ReactNode } from 'react'
import IconBtn from '../../style/icon-button';

interface IconBtnPendingProps {
    title: string;
    addType: "submit" | "reset" | "button" | undefined;
    children: ReactNode;
    func?: () => void;
}

export const IconBtnPending: React.FC<IconBtnPendingProps> = ({ title, addType, children, func })  => {
  return (
    <IconBtn
        title={title}
        onclick={func}
        addType={addType}
        addClass="text-white bg-pending hover:bg-pending/90 focus:ring-pending/20">
          {children}
    </IconBtn>
  )
}
