import React from 'react'
import OutlineBtn from '../../style/outline-button';

interface OutlineBtnSuccessProps {
    title: string;
    addType: "submit" | "reset" | "button" | undefined;
    func?: () => void;
}

export const OutlineBtnSuccess: React.FC<OutlineBtnSuccessProps> = ({ title, addType, func })  => {
  return (
    <OutlineBtn
        title={title}
        onclick={func}
        addType={addType}
        addClass="text-success border-success hover:bg-success/10 focus:ring-success/20"></OutlineBtn>
  )
}
