import React from 'react'
import RoundedBtn from '../box';

interface RoundedBtnWarningProps {
    title: string;
    addType: "submit" | "reset" | "button" | undefined;
    func?: () => void;
    addClass?: string;
}

export const RoundedBtnWarning: React.FC<RoundedBtnWarningProps> = ({ title, addType, func, addClass })  => {
  return (
    <RoundedBtn
        title={title}
        onclick={func}
        addType={addType}
        addClass={`text-slate-900 bg-warning hover:bg-warning/90 focus:ring-warning/20 ${addClass ?? ''}`}></RoundedBtn>
  )
}
