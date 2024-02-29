import React from 'react'
import BasicBtn from '../box';

interface BtnWarningProps {
    title: string;
    addType: "submit" | "reset" | "button" | undefined;
    addClass?: string;
    func?: () => void;
}

export const BtnWarning: React.FC<BtnWarningProps> = ({ title, addType, addClass, func })  => {
  return (
    <BasicBtn
        title={title}
        onclick={func}
        addType={addType}
        addClass={`text-slate-900 bg-warning hover:bg-warning/90 focus:ring-warning/20 ${addClass ?? ''}`}></BasicBtn>
  )
}
