import React from 'react'
import OutlineBtn from '../style/outline-button';

interface OutlineBtnSecondaryProps {
    title: string;
    addType: "submit" | "reset" | "button" | undefined;
}

export const OutlineBtnSecondary: React.FC<OutlineBtnSecondaryProps> = ({ title, addType })  => {
  return (
    <OutlineBtn
        title={title}
        addType={addType}
        addClass="text-slate-500 border-secondary hover:bg-secondary/40 focus:ring-secondary"></OutlineBtn>
  )
}
