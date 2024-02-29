import React from 'react'
import SizeBtn from '../box';

interface BtnSmallProps {
    title: string;
    addType: "submit" | "reset" | "button" | undefined;
    func?: () => void;
    addClass?: string;
}

export const BtnSmall: React.FC<BtnSmallProps> = ({ title, addType, func, addClass })  => {
  return (
    <SizeBtn
        title={title}
        onclick={func}
        addType={addType}
        addClass={`text-xs text-white bg-primary hover:bg-primary/90 focus:ring-primary/20 px-2 py-1 ${addClass ?? ''}`}></SizeBtn>
  )
}
