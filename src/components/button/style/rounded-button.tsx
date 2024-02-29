import React from 'react'

interface RoundedBtnProps {
    title: string;
    addType: "submit" | "reset" | "button" | undefined;
    addClass?: string | null;
    onclick?: () => void;
}

const RoundedBtn: React.FC<RoundedBtnProps> = ({ title, addType, addClass, onclick }) => {
    return (
        <button
            type={addType}
            onClick={onclick}
            className={`font-medium capitalize  
            min-w-24 flex justify-center rounded-full shadow-sm px-3 py-2 
            duration-200 ease-in-out focus:ring-4
            ${addClass ?? ''}`}>
            {title}
        </button>
    )
}

export default RoundedBtn
