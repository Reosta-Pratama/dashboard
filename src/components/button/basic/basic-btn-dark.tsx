import React from 'react'
import BasicBtn from '../style/basic-button';

interface BtnDarkProps {
    title: string;
    addType: "submit" | "reset" | "button" | undefined;
}

export const BtnDark: React.FC<BtnDarkProps> = ({ title, addType })  => {
  return (
    <BasicBtn
        title={title}
        addType={addType}
        addClass="text-white bg-dark hover:bg-dark/90 focus:ring-dark/20"></BasicBtn>
  )
}
