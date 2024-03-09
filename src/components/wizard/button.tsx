"use client"

import React, { useEffect, useState } from 'react'

interface WidgetBtnProps {
    step: number;
    desc: string;
    active?: boolean;
    onclick?: () => void;
}

export const WidgetBtn: React.FC<WidgetBtnProps> = ({step, desc, active, onclick}) => {
    return (
        <li className='flex flex-col flex-1 items-center gap-3'>
            <button
                type='button'
                onClick={onclick}
                className={`font-medium flex justify-center items-center
                    w-10 h-10 px-3 py-2 rounded-full shadow-sm
                    duration-200 ease-in-out focus:ring-4
                    ${active 
                        ? "text-white bg-primary hover:bg-primary/90 focus:ring-primary/20" 
                        : "text-slate-500 bg-secondary hover:bg-secondary/70 focus:ring-secondary"} `}>
                        {step}
            </button>

            <span className={`w-32 text-center text-base capitalize mx-auto select-none ${active ? "font-medium" : ""}`}>
                {desc}
            </span>
        </li>
    )
}
