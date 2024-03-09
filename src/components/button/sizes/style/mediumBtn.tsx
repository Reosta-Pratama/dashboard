import React, { ReactElement } from 'react'
import SizeBtn from '../box';

interface BtnMediumProps {
    title: string | ReactElement;
    addType: "submit" | "reset" | "button" | undefined;
    func?: () => void;
    addClass?: string;
}

export const BtnMedium: React.FC<BtnMediumProps> = ({ title, addType, func, addClass })  => {
  return (
    <SizeBtn
        title={title}
        onclick={func}
        addType={addType}
        addClass={`px-3 py-2 ${addClass ?? ''}`}></SizeBtn>
  )
}
