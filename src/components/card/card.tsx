"use client"

import React, { ReactNode, useState } from 'react'

interface CardProps {
    addClass?: string;
    children: ReactNode;
}

export const Card: React.FC<CardProps> = ({addClass, children}) => {
  return (
    <div className={`bg-white shadow-card rounded-[0.6rem] 
        border border-solid border-[#e2e8f0] 
        transition-all duration-300 ease-in-out ${addClass ?? ""}`}>
        <div className='relative flex flex-col gap-10'>
            {children}
        </div>
    </div>
  )
}
