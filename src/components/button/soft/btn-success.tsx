import React from 'react'
import SoftBtn from '../style/soft-button';

interface SoftBtnSuccessProps {
    title: string;
    addType: "submit" | "reset" | "button" | undefined;
    func?: () => void;
}

export const SoftBtnSuccess: React.FC<SoftBtnSuccessProps> = ({ title, addType, func })  => {
  return (
    <SoftBtn
        title={title}
        onclick={func}
        addType={addType}
        addClass="text-success bg-success/20 border-success/5 hover:bg-success/10 hover:border-success/10 focus:ring-success/20"></SoftBtn>
  )
}
