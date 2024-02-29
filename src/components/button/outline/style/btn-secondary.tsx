import React from 'react'
import OutlineBtn from '../box';

interface OutlineBtnSecondaryProps {
    title: string;
    addType: "submit" | "reset" | "button" | undefined;
    func?: () => void;
    addClass?: string;
}

export const OutlineBtnSecondary: React.FC<OutlineBtnSecondaryProps> = ({ title, addType, func, addClass })  => {
  return (
    <OutlineBtn
        title={title}
        onclick={func}
        addType={addType}
        addClass={`text-slate-500 border-secondary hover:bg-secondary/40 focus:ring-secondary ${addClass ?? ''}`}></OutlineBtn>
  )
}
