import React from 'react'
import SoftBtn from '../box';

interface SoftBtnDangerProps {
    title: string;
    addType: "submit" | "reset" | "button" | undefined;
    func?: () => void;
    addClass?: string;
}

export const SoftBtnDanger: React.FC<SoftBtnDangerProps> = ({ title, addType, func, addClass })  => {
  return (
    <SoftBtn
        title={title}
        onclick={func}
        addType={addType}
        addClass={`text-danger bg-danger/20 border-danger/5 hover:bg-danger/10 hover:border-danger/10 focus:ring-danger/20 ${addClass ?? ''}`}></SoftBtn>
  )
}
