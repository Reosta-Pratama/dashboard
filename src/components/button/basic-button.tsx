import React from 'react'

interface BasicBtnProps {
    title: string;
    addType: "submit" | "reset" | "button" | undefined;
    addClass?: string | null;
}

const BasicBtn: React.FC<BasicBtnProps> = ({ title, addType, addClass }) => {
    return (
        <button
            type={addType}
            className={`font-medium capitalize  
            w-24 flex justify-center rounded-md shadow-sm px-3 py-2 
            duration-200 ease-in-out focus:ring-4
            ${addClass ?? ''}`}>
            {title}
        </button>
    )
}

export default BasicBtn
