import React from 'react'
import BasicBtn from '../style/basic-button';

interface BtnPendingProps {
    title: string;
    addType: "submit" | "reset" | "button" | undefined;
}

export const BtnPending: React.FC<BtnPendingProps> = ({ title, addType })  => {
  return (
    <BasicBtn
        title={title}
        addType={addType}
        addClass="text-white bg-pending hover:bg-pending/90 focus:ring-pending/20"></BasicBtn>
  )
}
