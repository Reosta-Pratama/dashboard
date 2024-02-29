import React from 'react'
import OutlineBtn from '../box';

interface OutlineBtnDarkProps {
    title: string;
    addType: "submit" | "reset" | "button" | undefined;
    func?: () => void;
    addClass?: string;
}

export const OutlineBtnDark: React.FC<OutlineBtnDarkProps> = ({ title, addType, func, addClass })  => {
  return (
    <OutlineBtn
        title={title}
        onclick={func}
        addType={addType}
        addClass={`text-dark border-dark hover:bg-dark/10 focus:ring-dark/20 ${addClass ?? ''}`}></OutlineBtn>
  )
}
