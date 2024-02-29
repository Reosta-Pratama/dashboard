import React from 'react'
import SoftBtn from '../box';

interface SoftBtnWarningProps {
    title: string;
    addType: "submit" | "reset" | "button" | undefined;
    func?: () => void;
    addClass?: string;
}

export const SoftBtnWarning: React.FC<SoftBtnWarningProps> = ({ title, addType, func, addClass })  => {
  return (
    <SoftBtn
        title={title}
        onclick={func}
        addType={addType}
        addClass={`text-warning bg-warning/20 border-warning/5 hover:bg-warning/10 hover:border-warning/10 focus:ring-warning/20 ${addClass ?? ''}`}></SoftBtn>
  )
}
