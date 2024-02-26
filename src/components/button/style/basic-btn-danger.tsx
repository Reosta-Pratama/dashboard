import React from 'react'
import BasicBtn from '../basic-button';

interface BtnDangerProps {
    title: string;
    addType: "submit" | "reset" | "button" | undefined;
}

export const BtnDanger: React.FC<BtnDangerProps> = ({ title, addType })  => {
  return (
    <BasicBtn
        title={title}
        addType={addType}
        addClass="text-white bg-danger hover:bg-danger/90 focus:ring-danger/20"></BasicBtn>
  )
}
