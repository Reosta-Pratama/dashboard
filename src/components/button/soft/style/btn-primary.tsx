import React from 'react'
import SoftBtn from '../box';

interface SoftBtnPrimaryProps {
    title: string;
    addType: "submit" | "reset" | "button" | undefined;
    func?: () => void;
    addClass?: string;
}

export const SoftBtnPrimary: React.FC<SoftBtnPrimaryProps> = ({ title, addType, func, addClass })  => {
  return (
    <SoftBtn
        title={title}
        onclick={func}
        addType={addType}
        addClass={`text-primary bg-primary/20 border-primary/5 hover:bg-primary/10 hover:border-primary/10 focus:ring-primary/20 ${addClass ?? ''}`}></SoftBtn>
  )
}
