import React from 'react'
import BasicBtn from '../../style/basic-button';

interface BtnPrimaryProps {
    title: string;
    addType: "submit" | "reset" | "button" | undefined;
    func?: () => void;
}

export const BtnPrimary: React.FC<BtnPrimaryProps> = ({ title, addType, func })  => {
  return (
    <BasicBtn
        title={title}
        onclick={func}
        addType={addType}
        addClass="text-white bg-primary hover:bg-primary/90 focus:ring-primary/20"></BasicBtn>
  )
}
