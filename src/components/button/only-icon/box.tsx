import React, { ReactNode } from 'react'

interface OnlyIconBtnProps {
    addType: "submit" | "reset" | "button" | undefined;
    addClass?: string | null;
    children: ReactNode;
    onclick?: () => void;
}

const OnlyIconBtn: React.FC<OnlyIconBtnProps> = ({ addType, addClass, children, onclick }) => {
    return (
        <button
            type={addType}
            onClick={onclick}
            className={`text-xl font-medium capitalize  
            flex justify-center rounded-md shadow-sm 
            duration-200 ease-in-out focus:ring-4
            ${addClass ?? ''}`}>
            <div className="flex justify-center items-center gap-2">
                {children}
            </div>
        </button>
    )
}

export default OnlyIconBtn
