"use client"

import React, { ReactNode, useState } from 'react'
import { WidgetBtn } from '../wizard/button';

interface ButtonItem {
    number: number;
    desc: string;
}

interface CardProps {
    addClass?: string;
    btnWidget: ButtonItem[];
    children: ReactNode;
}

export const Card: React.FC<CardProps> = ({addClass, btnWidget, children}) => {
    const [activeIndex, setActiveIndex] = useState(0)

    const handleBtnClick = (index: number) => {
        setActiveIndex(index)
    }

  return (
    <div className={`bg-white shadow-card rounded-[0.6rem] 
        border border-solid border-[#e2e8f0] 
        transition-all duration-300 ease-in-out ${addClass ?? ""}`}>
        <div className='relative flex flex-col gap-10'>
            <div className="absolute top-5 left-1/2 -translate-x-1/2 bg-slate-100 w-[69%] h-[3px]"></div>
            <ul className='relative z-[1] flex justify-center px-20'>
                {
                    btnWidget.map((item, index) => (
                        <WidgetBtn
                            key={index}
                            step={item.number}
                            desc={item.desc}
                            active={activeIndex === index}
                            onclick={() => handleBtnClick(index)}>
                        </WidgetBtn>
                    ))
                }
            </ul>

            {children}
        </div>
    </div>
  )
}
