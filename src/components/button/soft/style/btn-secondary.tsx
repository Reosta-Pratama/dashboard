import React from 'react'
import SoftBtn from '../box';

interface SoftBtnSecondaryProps {
    title: string;
    addType: "submit" | "reset" | "button" | undefined;
    func?: () => void;
    addClass?: string;
}

export const SoftBtnSecondary: React.FC<SoftBtnSecondaryProps> = ({ title, addType, func, addClass })  => {
  return (
    <SoftBtn
        title={title}
        onclick={func}
        addType={addType}
        addClass={`text-slate-500 bg-secondary/40 border-secondary/5 hover:bg-secondary/20 hover:border-secondary/90 focus:ring-secondary/20 ${addClass ?? ''}`}></SoftBtn>
  )
}
