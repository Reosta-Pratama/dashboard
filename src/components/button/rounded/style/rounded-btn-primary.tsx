import React from 'react'
import RoundedBtn from '../../style/rounded-button';

interface RoundedBtnPrimaryProps {
    title: string;
    addType: "submit" | "reset" | "button" | undefined;
    func?: () => void;
}

export const RoundedBtnPrimary: React.FC<RoundedBtnPrimaryProps> = ({ title, addType, func })  => {
  return (
    <RoundedBtn
        title={title}
        onclick={func}
        addType={addType}
        addClass="text-white bg-primary hover:bg-primary/90 focus:ring-primary/20"></RoundedBtn>
  )
}
