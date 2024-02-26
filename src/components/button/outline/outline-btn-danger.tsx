import React from 'react'
import OutlineBtn from '../style/outline-button';

interface OutlineBtnDangerProps {
    title: string;
    addType: "submit" | "reset" | "button" | undefined;
}

export const OutlineBtnDanger: React.FC<OutlineBtnDangerProps> = ({ title, addType })  => {
  return (
    <OutlineBtn
        title={title}
        addType={addType}
        addClass="text-danger border-danger hover:bg-danger/10 focus:ring-danger/20"></OutlineBtn>
  )
}
