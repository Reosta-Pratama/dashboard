import React from 'react'

interface OutlineBtnProps {
    title: string;
    addType: "submit" | "reset" | "button" | undefined;
    addClass?: string | null;
}

const OutlineBtn: React.FC<OutlineBtnProps> = ({ title, addType, addClass }) => {
    return (
        <button
            type={addType}
            className={`font-medium capitalize  
            w-24 flex justify-center rounded-md shadow-sm px-3 py-2
            border border-solid 
            duration-200 ease-in-out focus:ring-4
            ${addClass ?? ''}`}>
            {title}
        </button>
    )
}

export default OutlineBtn
