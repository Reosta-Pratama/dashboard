import React from 'react'
import BasicBtn from '../box';

interface BtnSecondaryProps {
    title: string;
    addType: "submit" | "reset" | "button" | undefined;
    addClass?: string;
    func?: () => void;
}

export const BtnSecondary: React.FC<BtnSecondaryProps> = ({ title, addType, addClass, func })  => {
  return (
    <BasicBtn
        title={title}
        onclick={func}
        addType={addType}
        addClass={`text-slate-500 bg-secondary hover:bg-secondary/70 focus:ring-secondary ${addClass ?? ''}`}></BasicBtn>
  )
}
