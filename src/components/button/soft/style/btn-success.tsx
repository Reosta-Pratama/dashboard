import React from 'react'
import SoftBtn from '../box';

interface SoftBtnSuccessProps {
    title: string;
    addType: "submit" | "reset" | "button" | undefined;
    func?: () => void;
    addClass?: string;
}

export const SoftBtnSuccess: React.FC<SoftBtnSuccessProps> = ({ title, addType, func, addClass })  => {
  return (
    <SoftBtn
        title={title}
        onclick={func}
        addType={addType}
        addClass={`text-success bg-success/20 border-success/5 hover:bg-success/10 hover:border-success/10 focus:ring-success/20 ${addClass ?? ''}`}></SoftBtn>
  )
}
