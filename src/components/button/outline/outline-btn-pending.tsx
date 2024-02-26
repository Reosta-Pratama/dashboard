import React from 'react'
import OutlineBtn from '../style/outline-button';

interface OutlineBtnPendingProps {
    title: string;
    addType: "submit" | "reset" | "button" | undefined;
}

export const OutlineBtnPending: React.FC<OutlineBtnPendingProps> = ({ title, addType })  => {
  return (
    <OutlineBtn
        title={title}
        addType={addType}
        addClass="text-pending border-pending hover:bg-pending/10 focus:ring-pending/20"></OutlineBtn>
  )
}
