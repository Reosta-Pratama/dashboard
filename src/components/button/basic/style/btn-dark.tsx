import React from 'react'
import BasicBtn from '../box';

interface BtnDarkProps {
    title: string;
    addType: "submit" | "reset" | "button" | undefined;
    addClass?: string;
    func?: () => void;
}

export const BtnDark: React.FC<BtnDarkProps> = ({ title, addType, addClass, func })  => {
  return (
    <BasicBtn
        title={title}
        onclick={func}
        addType={addType}
        addClass={`text-white bg-dark hover:bg-dark/90 focus:ring-dark/20 ${addClass ?? ''}`}></BasicBtn>
  )
}
