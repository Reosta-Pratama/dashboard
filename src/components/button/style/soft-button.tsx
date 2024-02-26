import React from 'react'

interface SoftBtnProps {
    title: string;
    addType: "submit" | "reset" | "button" | undefined;
    addClass?: string | null;
}

const SoftBtn: React.FC<SoftBtnProps> = ({ title, addType, addClass }) => {
    return (
        <button
            type={addType}
            className={`font-medium capitalize  
            w-24 flex justify-center rounded-full shadow-sm px-3 py-2
            border border-solid 
            duration-200 ease-in-out focus:ring-4
            ${addClass ?? ''}`}>
            {title}
        </button>
    )
}

export default SoftBtn
