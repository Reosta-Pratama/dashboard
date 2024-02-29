import React from 'react'
import RoundedBtn from '../../style/rounded-button';

interface RoundedBtnWarningProps {
    title: string;
    addType: "submit" | "reset" | "button" | undefined;
    func?: () => void;
}

export const RoundedBtnWarning: React.FC<RoundedBtnWarningProps> = ({ title, addType, func })  => {
  return (
    <RoundedBtn
        title={title}
        onclick={func}
        addType={addType}
        addClass="text-slate-900 bg-warning hover:bg-warning/90 focus:ring-warning/20"></RoundedBtn>
  )
}
