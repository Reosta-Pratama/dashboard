import React from 'react'
import RoundedBtn from '../style/rounded-button';

interface RoundedBtnDangerProps {
    title: string;
    addType: "submit" | "reset" | "button" | undefined;
}

export const RoundedBtnDanger: React.FC<RoundedBtnDangerProps> = ({ title, addType })  => {
  return (
    <RoundedBtn
        title={title}
        addType={addType}
        addClass="text-white bg-danger hover:bg-danger/90 focus:ring-danger/20"></RoundedBtn>
  )
}
