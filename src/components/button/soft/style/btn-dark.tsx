import React from 'react'
import SoftBtn from '../box';

interface SoftBtnDarkProps {
    title: string;
    addType: "submit" | "reset" | "button" | undefined;
    func?: () => void;
    addClass?: string;
}

export const SoftBtnDark: React.FC<SoftBtnDarkProps> = ({ title, addType, func, addClass })  => {
  return (
    <SoftBtn
        title={title}
        onclick={func}
        addType={addType}
        addClass={`text-dark bg-dark/20 border-dark/5 hover:bg-dark/10 hover:border-dark/10 focus:ring-dark/20 ${addClass ?? ''}`}></SoftBtn>
  )
}
