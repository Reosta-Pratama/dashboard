import React from 'react'
import SizeBtn from '../box';

interface BtnLargeProps {
    title: string;
    addType: "submit" | "reset" | "button" | undefined;
    func?: () => void;
    addClass?: string;
}

export const BtnLarge: React.FC<BtnLargeProps> = ({ title, addType, func, addClass })  => {
  return (
    <SizeBtn
        title={title}
        onclick={func}
        addType={addType}
        addClass={`text-lg text-white bg-primary hover:bg-primary/90 focus:ring-primary/20 px-4 py-3 ${addClass ?? ''}`}></SizeBtn>
  )
}
