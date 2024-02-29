import React from 'react'
import RoundedBtn from '../box';

interface RoundedBtnDarkProps {
    title: string;
    addType: "submit" | "reset" | "button" | undefined;
    func?: () => void;
    addClass?: string;
}

export const RoundedBtnDark: React.FC<RoundedBtnDarkProps> = ({ title, addType, func, addClass })  => {
  return (
    <RoundedBtn
        title={title}
        onclick={func}
        addType={addType}
        addClass={`text-white bg-dark hover:bg-dark/90 focus:ring-dark/20 ${addClass ?? ''}`}></RoundedBtn>
  )
}
