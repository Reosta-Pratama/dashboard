import React from 'react'
import BasicBtn from '../../style/basic-button';

interface BtnSecondaryProps {
    title: string;
    addType: "submit" | "reset" | "button" | undefined;
    func?: () => void;
}

export const BtnSecondary: React.FC<BtnSecondaryProps> = ({ title, addType, func })  => {
  return (
    <BasicBtn
        title={title}
        onclick={func}
        addType={addType}
        addClass="text-slate-500 bg-secondary hover:bg-secondary/70 focus:ring-secondary"></BasicBtn>
  )
}
