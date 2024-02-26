import React from 'react'
import BasicBtn from '../style/basic-button';

interface BtnSecondaryProps {
    title: string;
    addType: "submit" | "reset" | "button" | undefined;
}

export const BtnSecondary: React.FC<BtnSecondaryProps> = ({ title, addType })  => {
  return (
    <BasicBtn
        title={title}
        addType={addType}
        addClass="text-slate-500 bg-secondary hover:bg-secondary/70 focus:ring-secondary"></BasicBtn>
  )
}
