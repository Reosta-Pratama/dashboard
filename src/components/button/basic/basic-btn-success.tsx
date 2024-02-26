import React from 'react'
import BasicBtn from '../style/basic-button';

interface BtnSuccessProps {
    title: string;
    addType: "submit" | "reset" | "button" | undefined;
}

export const BtnSuccess: React.FC<BtnSuccessProps> = ({ title, addType })  => {
  return (
    <BasicBtn
        title={title}
        addType={addType}
        addClass="text-slate-900 bg-success hover:bg-success/90 focus:ring-success/20"></BasicBtn>
  )
}
