import React from 'react'
import RoundedBtn from '../style/rounded-button';

interface RoundedBtnPendingProps {
    title: string;
    addType: "submit" | "reset" | "button" | undefined;
}

export const RoundedBtnPending: React.FC<RoundedBtnPendingProps> = ({ title, addType })  => {
  return (
    <RoundedBtn
        title={title}
        addType={addType}
        addClass="text-white bg-pending hover:bg-pending/90 focus:ring-pending/20"></RoundedBtn>
  )
}
