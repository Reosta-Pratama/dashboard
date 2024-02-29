import React from 'react'
import RoundedBtn from '../box';

interface RoundedBtnSecondaryProps {
    title: string;
    addType: "submit" | "reset" | "button" | undefined;
    func?: () => void;
    addClass?: string;
}

export const RoundedBtnSecondary: React.FC<RoundedBtnSecondaryProps> = ({ title, addType, func, addClass })  => {
  return (
    <RoundedBtn
        title={title}
        onclick={func}
        addType={addType}
        addClass={`text-slate-500 bg-secondary hover:bg-secondary/70 focus:ring-secondary ${addClass ?? ''}`}></RoundedBtn>
  )
}
