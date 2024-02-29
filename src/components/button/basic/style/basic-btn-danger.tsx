import React from 'react'
import BasicBtn from '../../style/basic-button';

interface BtnDangerProps {
    title: string;
    addType: "submit" | "reset" | "button" | undefined;
    func?: () => void;
}

export const BtnDanger: React.FC<BtnDangerProps> = ({ title, addType, func })  => {
  return (
    <BasicBtn
        title={title}
        onclick={func}
        addType={addType}
        addClass="text-white bg-danger hover:bg-danger/90 focus:ring-danger/20"></BasicBtn>
  )
}
