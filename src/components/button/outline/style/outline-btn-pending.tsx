import React from 'react'
import OutlineBtn from '../../style/outline-button';

interface OutlineBtnPendingProps {
    title: string;
    addType: "submit" | "reset" | "button" | undefined;
    func?: () => void;
}

export const OutlineBtnPending: React.FC<OutlineBtnPendingProps> = ({ title, addType, func })  => {
  return (
    <OutlineBtn
        title={title}
        onclick={func}
        addType={addType}
        addClass="text-pending border-pending hover:bg-pending/10 focus:ring-pending/20"></OutlineBtn>
  )
}
