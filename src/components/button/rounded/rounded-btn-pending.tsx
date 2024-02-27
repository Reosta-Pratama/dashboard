import React from 'react'
import RoundedBtn from '../style/rounded-button';

interface RoundedBtnPendingProps {
    title: string;
    addType: "submit" | "reset" | "button" | undefined;
    func?: () => void;
}

export const RoundedBtnPending: React.FC<RoundedBtnPendingProps> = ({ title, addType, func })  => {
  return (
    <RoundedBtn
        title={title}
        onclick={func}
        addType={addType}
        addClass="text-white bg-pending hover:bg-pending/90 focus:ring-pending/20"></RoundedBtn>
  )
}
