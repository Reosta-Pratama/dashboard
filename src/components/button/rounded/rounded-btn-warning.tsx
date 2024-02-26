import React from 'react'
import RoundedBtn from '../style/rounded-button';

interface RoundedBtnWarningProps {
    title: string;
    addType: "submit" | "reset" | "button" | undefined;
}

export const RoundedBtnWarning: React.FC<RoundedBtnWarningProps> = ({ title, addType })  => {
  return (
    <RoundedBtn
        title={title}
        addType={addType}
        addClass="text-slate-900 bg-warning hover:bg-warning/90 focus:ring-warning/20"></RoundedBtn>
  )
}
