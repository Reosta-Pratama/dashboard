import React from 'react'
import SoftBtn from '../../style/soft-button';

interface SoftBtnDangerProps {
    title: string;
    addType: "submit" | "reset" | "button" | undefined;
    func?: () => void;
}

export const SoftBtnDanger: React.FC<SoftBtnDangerProps> = ({ title, addType, func })  => {
  return (
    <SoftBtn
        title={title}
        onclick={func}
        addType={addType}
        addClass="text-danger bg-danger/20 border-danger/5 hover:bg-danger/10 hover:border-danger/10 focus:ring-danger/20"></SoftBtn>
  )
}