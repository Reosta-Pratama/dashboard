import React from 'react'
import BasicBtn from '../../style/basic-button';

interface BtnSuccessProps {
    title: string;
    addType: "submit" | "reset" | "button" | undefined;
    func?: () => void;
}

export const BtnSuccess: React.FC<BtnSuccessProps> = ({ title, addType, func })  => {
  return (
    <BasicBtn
        title={title}
        onclick={func}
        addType={addType}
        addClass="text-slate-900 bg-success hover:bg-success/90 focus:ring-success/20"></BasicBtn>
  )
}
