import React from 'react'
import SizeBtn from '../style/sizes-buttons';

interface BtnLargeProps {
    title: string;
    addType: "submit" | "reset" | "button" | undefined;
}

export const BtnLarge: React.FC<BtnLargeProps> = ({ title, addType })  => {
  return (
    <SizeBtn
        title={title}
        addType={addType}
        addClass="text-lg text-white bg-primary hover:bg-primary/90 focus:ring-primary/20 px-4 py-3"></SizeBtn>
  )
}
