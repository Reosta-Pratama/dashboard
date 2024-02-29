import React from 'react'
import OutlineBtn from '../box';

interface OutlineBtnWarningProps {
    title: string;
    addType: "submit" | "reset" | "button" | undefined;
    func?: () => void;
    addClass?: string;
}

export const OutlineBtnWarning: React.FC<OutlineBtnWarningProps> = ({ title, addType, func, addClass })  => {
  return (
    <OutlineBtn
        title={title}
        onclick={func}
        addType={addType}
        addClass={`text-warning border-warning hover:bg-warning/10 focus:ring-warning/20 ${addClass ?? ''}`}></OutlineBtn>
  )
}
