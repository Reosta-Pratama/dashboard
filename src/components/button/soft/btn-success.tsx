import React from 'react'
import SoftBtn from '../style/soft-button';

interface SoftBtnSuccessProps {
    title: string;
    addType: "submit" | "reset" | "button" | undefined;
}

export const SoftBtnSuccess: React.FC<SoftBtnSuccessProps> = ({ title, addType })  => {
  return (
    <SoftBtn
        title={title}
        addType={addType}
        addClass="text-success bg-success/20 border-success/5 hover:bg-success/10 hover:border-success/10 focus:ring-success/20"></SoftBtn>
  )
}
