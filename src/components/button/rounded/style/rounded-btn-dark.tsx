import React from 'react'
import RoundedBtn from '../../style/rounded-button';

interface RoundedBtnDarkProps {
    title: string;
    addType: "submit" | "reset" | "button" | undefined;
    func?: () => void;
}

export const RoundedBtnDark: React.FC<RoundedBtnDarkProps> = ({ title, addType, func })  => {
  return (
    <RoundedBtn
        title={title}
        onclick={func}
        addType={addType}
        addClass="text-white bg-dark hover:bg-dark/90 focus:ring-dark/20"></RoundedBtn>
  )
}
