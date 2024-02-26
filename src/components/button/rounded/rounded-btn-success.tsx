import React from 'react'
import RoundedBtn from '../style/rounded-button';

interface RoundedBtnSuccessProps {
    title: string;
    addType: "submit" | "reset" | "button" | undefined;
}

export const RoundedBtnSuccess: React.FC<RoundedBtnSuccessProps> = ({ title, addType })  => {
  return (
    <RoundedBtn
        title={title}
        addType={addType}
        addClass="text-slate-900 bg-success hover:bg-success/90 focus:ring-success/20"></RoundedBtn>
  )
}
