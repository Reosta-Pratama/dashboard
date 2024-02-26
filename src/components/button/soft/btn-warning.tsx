import React from 'react'
import SoftBtn from '../style/soft-button';

interface SoftBtnWarningProps {
    title: string;
    addType: "submit" | "reset" | "button" | undefined;
}

export const SoftBtnWarning: React.FC<SoftBtnWarningProps> = ({ title, addType })  => {
  return (
    <SoftBtn
        title={title}
        addType={addType}
        addClass="text-warning bg-warning/20 border-warning/5 hover:bg-warning/10 hover:border-warning/10 focus:ring-warning/20"></SoftBtn>
  )
}
