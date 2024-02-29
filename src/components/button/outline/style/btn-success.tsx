import React from 'react'
import OutlineBtn from '../box';

interface OutlineBtnSuccessProps {
    title: string;
    addType: "submit" | "reset" | "button" | undefined;
    func?: () => void;
    addClass?: string;
}

export const OutlineBtnSuccess: React.FC<OutlineBtnSuccessProps> = ({ title, addType, func, addClass })  => {
  return (
    <OutlineBtn
        title={title}
        onclick={func}
        addType={addType}
        addClass={`text-success border-success hover:bg-success/10 focus:ring-success/20 ${addClass ?? ''}`}></OutlineBtn>
  )
}
