import React from 'react'
import OutlineBtn from '../style/outline-button';

interface OutlineBtnDarkProps {
    title: string;
    addType: "submit" | "reset" | "button" | undefined;
    func?: () => void;
}

export const OutlineBtnDark: React.FC<OutlineBtnDarkProps> = ({ title, addType, func })  => {
  return (
    <OutlineBtn
        title={title}
        onclick={func}
        addType={addType}
        addClass="text-dark border-dark hover:bg-dark/10 focus:ring-dark/20"></OutlineBtn>
  )
}
