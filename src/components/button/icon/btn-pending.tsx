import React, { ReactNode } from 'react'
import IconBtn from '../style/icon-button';

interface IconBtnPendingProps {
    title: string;
    addType: "submit" | "reset" | "button" | undefined;
    children: ReactNode;
}

export const IconBtnPending: React.FC<IconBtnPendingProps> = ({ title, addType, children })  => {
  return (
    <IconBtn
        title={title}
        addType={addType}
        addClass="text-white bg-pending hover:bg-pending/90 focus:ring-pending/20">
          {children}
    </IconBtn>
  )
}
