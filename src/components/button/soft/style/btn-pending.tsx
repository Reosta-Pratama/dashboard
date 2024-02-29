import React from 'react'
import SoftBtn from '../box';

interface SoftBtnPendingProps {
    title: string;
    addType: "submit" | "reset" | "button" | undefined;
    func?: () => void;
    addClass?: string;
}

export const SoftBtnPending: React.FC<SoftBtnPendingProps> = ({ title, addType, func, addClass })  => {
  return (
    <SoftBtn
        title={title}
        onclick={func}
        addType={addType}
        addClass={`text-pending bg-pending/20 border-pending/5 hover:bg-pending/10 hover:border-pending/10 focus:ring-pending/20 ${addClass ?? ''}`}></SoftBtn>
  )
}
