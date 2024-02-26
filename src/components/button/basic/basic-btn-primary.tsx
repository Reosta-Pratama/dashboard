import React from 'react'
import BasicBtn from '../style/basic-button';

interface BtnPrimaryProps {
    title: string;
    addType: "submit" | "reset" | "button" | undefined;
}

export const BtnPrimary: React.FC<BtnPrimaryProps> = ({ title, addType })  => {
  return (
    <BasicBtn
        title={title}
        addType={addType}
        addClass="text-white bg-primary hover:bg-primary/90 focus:ring-primary/20"></BasicBtn>
  )
}
