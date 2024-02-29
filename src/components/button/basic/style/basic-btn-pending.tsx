import React from 'react'
import BasicBtn from '../../style/basic-button';

interface BtnPendingProps {
    title: string;
    addType: "submit" | "reset" | "button" | undefined;
    func?: () => void;
}

export const BtnPending: React.FC<BtnPendingProps> = ({ title, addType, func })  => {
  return (
    <BasicBtn
        title={title}
        onclick={func}
        addType={addType}
        addClass="text-white bg-pending hover:bg-pending/90 focus:ring-pending/20"></BasicBtn>
  )
}
