import React from 'react'
import OutlineBtn from '../style/outline-button';

interface OutlineBtnSuccessProps {
    title: string;
    addType: "submit" | "reset" | "button" | undefined;
}

export const OutlineBtnSuccess: React.FC<OutlineBtnSuccessProps> = ({ title, addType })  => {
  return (
    <OutlineBtn
        title={title}
        addType={addType}
        addClass="text-success border-success hover:bg-success/10 focus:ring-success/20"></OutlineBtn>
  )
}
