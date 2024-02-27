import React from 'react'
import SoftBtn from '../style/soft-button';

interface SoftBtnSecondaryProps {
    title: string;
    addType: "submit" | "reset" | "button" | undefined;
    func?: () => void;
}

export const SoftBtnSecondary: React.FC<SoftBtnSecondaryProps> = ({ title, addType, func })  => {
  return (
    <SoftBtn
        title={title}
        onclick={func}
        addType={addType}
        addClass="text-slate-500 bg-secondary/40 border-secondary/5 hover:bg-secondary/20 hover:border-secondary/90 focus:ring-secondary/20"></SoftBtn>
  )
}
