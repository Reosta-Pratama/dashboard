import React from 'react'
import OutlineBtn from '../../style/outline-button';

interface OutlineBtnWarningProps {
    title: string;
    addType: "submit" | "reset" | "button" | undefined;
    func?: () => void;
}

export const OutlineBtnWarning: React.FC<OutlineBtnWarningProps> = ({ title, addType, func })  => {
  return (
    <OutlineBtn
        title={title}
        onclick={func}
        addType={addType}
        addClass="text-warning border-warning hover:bg-warning/10 focus:ring-warning/20"></OutlineBtn>
  )
}
