import React from 'react'
import OutlineBtn from '../box';

interface OutlineBtnPendingProps {
    title: string;
    addType: "submit" | "reset" | "button" | undefined;
    func?: () => void;
    addClass?: string;
}

export const OutlineBtnPending: React.FC<OutlineBtnPendingProps> = ({ title, addType, func, addClass })  => {
  return (
    <OutlineBtn
        title={title}
        onclick={func}
        addType={addType}
        addClass={`text-pending border-pending hover:bg-pending/10 focus:ring-pending/20 ${addClass ?? ''}`}></OutlineBtn>
  )
}
