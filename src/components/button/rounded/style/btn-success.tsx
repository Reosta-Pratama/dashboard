import React from 'react'
import RoundedBtn from '../box';

interface RoundedBtnSuccessProps {
    title: string;
    addType: "submit" | "reset" | "button" | undefined;
    func?: () => void;
    addClass?: string;
}

export const RoundedBtnSuccess: React.FC<RoundedBtnSuccessProps> = ({ title, addType, func, addClass })  => {
  return (
    <RoundedBtn
        title={title}
        onclick={func}
        addType={addType}
        addClass={`text-slate-900 bg-success hover:bg-success/90 focus:ring-success/20 ${addClass ?? ''}`}></RoundedBtn>
  )
}
