import React from 'react'

interface BasicBtnProps {
    title: string;
    addType: "submit" | "reset" | "button" | undefined;
    addClass?: string;
    onclick?: () => void;
}

const BasicBtn: React.FC<BasicBtnProps> = ({ title, addType, addClass, onclick }) => {
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

export default BasicBtn
