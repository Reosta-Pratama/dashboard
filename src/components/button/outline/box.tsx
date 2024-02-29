import React from 'react'

interface OutlineBtnProps {
    title: string;
    addType: "submit" | "reset" | "button" | undefined;
    addClass?: string | null;
    onclick?: () => void;
}

const OutlineBtn: React.FC<OutlineBtnProps> = ({ title, addType, addClass, onclick }) => {
    return (
        <button
            type={addType}
            onClick={onclick}
            className={`font-medium capitalize  
            flex justify-center rounded-md shadow-sm 
            border border-solid 
            duration-200 ease-in-out focus:ring-4
            ${addClass ?? ''}`}>
            {title}
        </button>
    )
}

export default OutlineBtn
