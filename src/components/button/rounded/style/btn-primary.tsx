import React from 'react'
import RoundedBtn from '../box';

interface RoundedBtnPrimaryProps {
    title: string;
    addType: "submit" | "reset" | "button" | undefined;
    func?: () => void;
    addClass?: string;
}

export const RoundedBtnPrimary: React.FC<RoundedBtnPrimaryProps> = ({ title, addType, func, addClass })  => {
  return (
    <RoundedBtn
        title={title}
        onclick={func}
        addType={addType}
        addClass={`text-white bg-primary hover:bg-primary/90 focus:ring-primary/20 ${addClass ?? ''}`}></RoundedBtn>
  )
}
