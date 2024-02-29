import React from 'react'
import OutlineBtn from '../box';

interface OutlineBtnPrimaryProps {
    title: string;
    addType: "submit" | "reset" | "button" | undefined;
    func?: () => void;
    addClass?: string;
}

export const OutlineBtnPrimary: React.FC<OutlineBtnPrimaryProps> = ({ title, addType, func, addClass })  => {
  return (
    <OutlineBtn
        title={title}
        onclick={func}
        addType={addType}
        addClass={`text-primary border-primary hover:bg-primary/10 focus:ring-primary/20 ${addClass ?? ''}`}></OutlineBtn>
  )
}
