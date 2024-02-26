import React from 'react'
import SizeBtn from '../style/sizes-buttons';

interface BtnMediumProps {
    title: string;
    addType: "submit" | "reset" | "button" | undefined;
}

export const BtnMedium: React.FC<BtnMediumProps> = ({ title, addType })  => {
  return (
    <SizeBtn
        title={title}
        addType={addType}
        addClass="text-white bg-primary hover:bg-primary/90 focus:ring-primary/20 px-3 py-2"></SizeBtn>
  )
}
