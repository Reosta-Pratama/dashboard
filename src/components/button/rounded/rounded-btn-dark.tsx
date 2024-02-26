import React from 'react'
import RoundedBtn from '../style/rounded-button';

interface RoundedBtnDarkProps {
    title: string;
    addType: "submit" | "reset" | "button" | undefined;
}

export const RoundedBtnDark: React.FC<RoundedBtnDarkProps> = ({ title, addType })  => {
  return (
    <RoundedBtn
        title={title}
        addType={addType}
        addClass="text-white bg-dark hover:bg-dark/90 focus:ring-dark/20"></RoundedBtn>
  )
}
