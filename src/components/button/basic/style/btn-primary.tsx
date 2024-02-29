import React from 'react'
import BasicBtn from '../box';

interface BtnPrimaryProps {
    title: string;
    addType: "submit" | "reset" | "button" | undefined;
    addClass?: string;
    func?: () => void;
}

export const BtnPrimary: React.FC<BtnPrimaryProps> = ({ title, addType, addClass, func })  => {
  return (
    <BasicBtn
        title={title}
        onclick={func}
        addType={addType}
        addClass={`text-white bg-primary hover:bg-primary/90 focus:ring-primary/20 ${addClass ?? ''}`}></BasicBtn>
  )
}
