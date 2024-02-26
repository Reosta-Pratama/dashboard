import React from 'react'
import SoftBtn from '../style/soft-button';

interface SoftBtnPendingProps {
    title: string;
    addType: "submit" | "reset" | "button" | undefined;
}

export const SoftBtnPending: React.FC<SoftBtnPendingProps> = ({ title, addType })  => {
  return (
    <SoftBtn
        title={title}
        addType={addType}
        addClass="text-pending bg-pending/20 border-pending/5 hover:bg-pending/10 hover:border-pending/10 focus:ring-pending/20"></SoftBtn>
  )
}
