import React from 'react'
import SizeBtn from '../../style/sizes-buttons';

interface BtnSmallProps {
    title: string;
    addType: "submit" | "reset" | "button" | undefined;
    func?: () => void;
}

export const BtnSmall: React.FC<BtnSmallProps> = ({ title, addType, func })  => {
  return (
    <SizeBtn
        title={title}
        onclick={func}
        addType={addType}
        addClass="text-xs text-white bg-primary hover:bg-primary/90 focus:ring-primary/20 px-2 py-1"></SizeBtn>
  )
}
