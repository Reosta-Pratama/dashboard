import React, { ReactNode } from 'react'

interface IconBtnProps {
    title: string;
    addType: "submit" | "reset" | "button" | undefined;
    addClass?: string | null;
    children: ReactNode;
    onclick?: () => void;
}

const IconBtn: React.FC<IconBtnProps> = ({ title, addType, addClass, children, onclick }) => {
    return (
        <button
            type={addType}
            onClick={onclick}
            className={`font-medium capitalize  
            w-32 flex justify-center rounded-md shadow-sm px-3 py-2 
            duration-200 ease-in-out focus:ring-4
            ${addClass ?? ''}`}>
            <div className="flex justify-center items-center gap-2">
                {children}
                {title}
            </div>
        </button>
    )
}

export default IconBtn
