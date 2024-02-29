import React from 'react'
import RoundedBtn from '../../style/rounded-button';

interface RoundedBtnDangerProps {
    title: string;
    addType: "submit" | "reset" | "button" | undefined;
    func?: () => void;
}

export const RoundedBtnDanger: React.FC<RoundedBtnDangerProps> = ({ title, addType, func })  => {
  return (
    <RoundedBtn
        title={title}
        onclick={func}
        addType={addType}
        addClass="text-white bg-danger hover:bg-danger/90 focus:ring-danger/20"></RoundedBtn>
  )
}
