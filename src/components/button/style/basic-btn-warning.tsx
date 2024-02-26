import React from 'react'
import BasicBtn from '../basic-button';

interface BtnWarningProps {
    title: string;
    addType: "submit" | "reset" | "button" | undefined;
}

export const BtnWarning: React.FC<BtnWarningProps> = ({ title, addType })  => {
  return (
    <BasicBtn
        title={title}
        addType={addType}
        addClass="text-slate-900 bg-warning hover:bg-warning/90 focus:ring-warning/20"></BasicBtn>
  )
}
