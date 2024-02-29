import React from 'react'
import RoundedBtn from '../box';

interface RoundedBtnPendingProps {
    title: string;
    addType: "submit" | "reset" | "button" | undefined;
    func?: () => void;
    addClass?: string;
}

export const RoundedBtnPending: React.FC<RoundedBtnPendingProps> = ({ title, addType, func, addClass })  => {
  return (
    <RoundedBtn
        title={title}
        onclick={func}
        addType={addType}
        addClass={`text-white bg-pending hover:bg-pending/90 focus:ring-pending/20 ${addClass ?? ''}`}></RoundedBtn>
  )
}
