import React from 'react'

interface SizeBtnProps {
    title: string;
    addType: "submit" | "reset" | "button" | undefined;
    addClass?: string | null;
}

const SizeBtn: React.FC<SizeBtnProps> = ({ title, addType, addClass }) => {
    return (
        <button
            type={addType}
            className={`font-medium capitalize  
                flex justify-center rounded-md shadow-sm
                duration-200 ease-in-out focus:ring-4
            ${addClass ?? ''}`}>
            {title}
        </button>
    )
}

export default SizeBtn
