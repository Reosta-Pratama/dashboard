import React from 'react'
import BasicBtn from '../box';

interface BtnPendingProps {
    title: string;
    addType: "submit" | "reset" | "button" | undefined;
    addClass?: string;
    func?: () => void;
}

export const BtnPending: React.FC<BtnPendingProps> = ({ title, addType, addClass, func })  => {
  return (
    <BasicBtn
        title={title}
        onclick={func}
        addType={addType}
        addClass={`text-white bg-pending hover:bg-pending/90 focus:ring-pending/20 ${addClass ?? ''}`}></BasicBtn>
  )
}
