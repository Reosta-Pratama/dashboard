"use client"

import React, { useEffect, useState } from 'react'

interface ButtonProps {
    number: number;
    desc: string;
}

interface WidgetBtnProps {
    btnWidget?: ButtonProps[];
}

const WidgetBtn: React.FC<WidgetBtnProps> = ({btnWidget = []}) => {
    const [activeIndex, setActiveIndex] = useState(0)

    const handleBtnClick = (index: number) => {
        setActiveIndex(index)
    }

    return (
        <div className='relative'>
            <div className="absolute top-5 left-1/2 -translate-x-1/2 bg-slate-100 w-[69%] h-[3px]"></div>
            <ul className='relative z-[1] flex justify-center px-20'>
                {
                    btnWidget?.map((item, index) => (
                        <li key={index}
                            className='flex flex-col flex-1 items-center gap-3'>
                            <button
                                type='button'
                                onClick={() => handleBtnClick(index)}
                                className={`font-medium flex justify-center items-center
                                    w-10 h-10 px-3 py-2 rounded-full shadow-sm
                                    duration-200 ease-in-out focus:ring-4
                                    ${activeIndex == index
                                        ? "text-white bg-primary hover:bg-primary/90 focus:ring-primary/20" 
                                        : "text-slate-500 bg-secondary hover:bg-secondary/70 focus:ring-secondary"} `}>
                                        {item.number}
                            </button>

                            <span className={`w-32 text-center text-base capitalize mx-auto select-none ${activeIndex ? "font-medium" : ""}`}>
                                {item.desc}
                            </span>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default WidgetBtn