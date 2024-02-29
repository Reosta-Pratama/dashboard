import React, { ReactNode } from 'react'
import IconBtn from '../box';

interface IconBtnDangerProps {
    title: string;
    addType: "submit" | "reset" | "button" | undefined;
    children: ReactNode;
    func?: () => void;
    addClass?: string;
}

export const IconBtnDanger: React.FC<IconBtnDangerProps> = ({ title, addType, children, func, addClass })  => {
  return (
    <IconBtn
        title={title}
        onclick={func}
        addType={addType}
        addClass={`text-white bg-danger hover:bg-danger/90 focus:ring-danger/20 ${addClass ?? ''}`}>
          {children}
    </IconBtn>
  )
}
