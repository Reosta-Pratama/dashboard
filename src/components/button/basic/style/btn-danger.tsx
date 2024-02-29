import React from 'react'
import BasicBtn from '../box';

interface BtnDangerProps {
    title: string;
    addType: "submit" | "reset" | "button" | undefined;
    addClass?: string;
    func?: () => void;
}

export const BtnDanger: React.FC<BtnDangerProps> = ({ title, addType, addClass, func })  => {
  return (
    <BasicBtn
        title={title}
        onclick={func}
        addType={addType}
        addClass={`text-white bg-danger hover:bg-danger/90 focus:ring-danger/20 ${addClass ?? ''}`}></BasicBtn>
  )
}
