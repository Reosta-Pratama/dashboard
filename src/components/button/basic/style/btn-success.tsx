import React from 'react'
import BasicBtn from '../box';

interface BtnSuccessProps {
    title: string;
    addType: "submit" | "reset" | "button" | undefined;
    addClass?: string;
    func?: () => void;
}

export const BtnSuccess: React.FC<BtnSuccessProps> = ({ title, addType, addClass, func })  => {
  return (
    <BasicBtn
        title={title}
        onclick={func}
        addType={addType}
        addClass={`text-slate-900 bg-success hover:bg-success/90 focus:ring-success/20 ${addClass ?? ''}`}></BasicBtn>
  )
}
