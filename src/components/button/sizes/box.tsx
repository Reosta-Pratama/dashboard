import React, { ReactElement } from 'react'

interface SizeBtnProps {
    title: string | ReactElement;
    addType: "submit" | "reset" | "button" | undefined;
    addClass?: string | null;
    onclick?: () => void;
}

const SizeBtn: React.FC<SizeBtnProps> = ({ title, addType, addClass, onclick }) => {
    return (
        <button
            type={addType}
            onClick={onclick}
            className={`font-medium capitalize  
                flex justify-center rounded-md shadow-sm
                duration-200 ease-in-out focus:ring-4
            ${addClass ?? ''}`}>
            {title}
        </button>
    )
}

export default SizeBtn
