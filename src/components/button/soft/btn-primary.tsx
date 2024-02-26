import React from 'react'
import SoftBtn from '../style/soft-button';

interface SoftBtnPrimaryProps {
    title: string;
    addType: "submit" | "reset" | "button" | undefined;
}

export const SoftBtnPrimary: React.FC<SoftBtnPrimaryProps> = ({ title, addType })  => {
  return (
    <SoftBtn
        title={title}
        addType={addType}
        addClass="text-primary bg-primary/20 border-primary/5 hover:bg-primary/10 hover:border-primary/10 focus:ring-primary/20"></SoftBtn>
  )
}
