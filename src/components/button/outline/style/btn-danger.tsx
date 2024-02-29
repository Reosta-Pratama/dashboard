import React from 'react'
import OutlineBtn from '../box';

interface OutlineBtnDangerProps {
    title: string;
    addType: "submit" | "reset" | "button" | undefined;
    func?: () => void;
    addClass?: string;
}

export const OutlineBtnDanger: React.FC<OutlineBtnDangerProps> = ({ title, addType, func, addClass })  => {
  return (
    <OutlineBtn
        title={title}
        onclick={func}
        addType={addType}
        addClass={`text-danger border-danger hover:bg-danger/10 focus:ring-danger/20 ${addClass ?? ''}`}></OutlineBtn>
  )
}
