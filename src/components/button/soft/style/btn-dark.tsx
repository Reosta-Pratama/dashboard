import React from 'react'
import SoftBtn from '../../style/soft-button';

interface SoftBtnDarkProps {
    title: string;
    addType: "submit" | "reset" | "button" | undefined;
    func?: () => void;
}

export const SoftBtnDark: React.FC<SoftBtnDarkProps> = ({ title, addType, func })  => {
  return (
    <SoftBtn
        title={title}
        onclick={func}
        addType={addType}
        addClass="text-dark bg-dark/20 border-dark/5 hover:bg-dark/10 hover:border-dark/10 focus:ring-dark/20"></SoftBtn>
  )
}
