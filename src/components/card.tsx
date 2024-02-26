"use client"

import React, { ReactNode, useState } from 'react';

interface CardProps {
  title: string;
  children: ReactNode;
}

const Card: React.FC<CardProps> = ({ title, children }) => {
  const id = title.toLowerCase().replace(/\s+/g, '-');
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div className='bg-white shadow-card rounded-[0.6rem] border border-solid border-[#e2e8f0]'>
      <div className="flex justify-between items-center p-5 border-b border-solid border-slate-200">
        <h2 className='text-base font-medium capitalize'>{title}</h2>
        
        <div>
          <label htmlFor={id} className='cursor-pointer flex items-center gap-3'>
            <p className='select-none'>Show example code</p>
            <div className={`relative w-[38px] h-6 rounded-full shadow-sm 
                            border border-solid duration-300 ease-in-out
                            ${isChecked ? 'bg-primary border-primary' : 'bg-white border-slate-200'}`}>
              <div className={`bg-white absolute top-1/2 -translate-y-1/2 mx-[2px]
                            w-5 h-5 rounded-full duration-300 ease-linear
                            ${isChecked ? 'right-0' : 'left-0 shadow-[1px_1px_3px_rgba(0,0,0,.25)]'}`}></div>
            </div>
          </label>

          <input
            id={id}
            type="checkbox"
            className='hidden'
            checked={isChecked}
            onChange={handleCheckboxChange}
          />
        </div>
      </div>

      {children}
    </div>
  );
};

export default Card;
