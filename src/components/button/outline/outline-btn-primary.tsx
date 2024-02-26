import React from 'react'
import OutlineBtn from '../style/outline-button';

interface OutlineBtnPrimaryProps {
    title: string;
    addType: "submit" | "reset" | "button" | undefined;
}

export const OutlineBtnPrimary: React.FC<OutlineBtnPrimaryProps> = ({ title, addType })  => {
  return (
    <OutlineBtn
        title={title}
        addType={addType}
        addClass="text-primary border-primary hover:bg-primary/10 focus:ring-primary/20"></OutlineBtn>
  )
}
