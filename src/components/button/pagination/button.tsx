import React, { ReactElement, ReactNode } from 'react'

interface BtnPaginationProps{
    onclick: () => void;
    children: ReactNode;
    active?: boolean;
    addClass?: string;
}

export const BtnPagination: React.FC<BtnPaginationProps> = ({onclick, children, active, addClass}) => {
  return (
    <button
        type='button'
        onClick={onclick}
        className={`min-w-10 min-h-[38px]  rounded-[.6rem] px-3 py-2
            border border-solid 
            text-center text-slate-800
            transition-all duration-300 ease-in-out
            hover:bg-white hover:border-[#e2e8f0] hover:shadow-card
            ${active ? "bg-white border-[#e2e8f0]" : "border-transparent"}
            ${addClass ?? ""}`}>
            {children}
    </button>
  )
}
