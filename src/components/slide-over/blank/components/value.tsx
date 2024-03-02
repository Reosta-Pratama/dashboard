import React, { ReactNode } from 'react'
import useSlideOver from '../../toggle';

interface ValueSlideOverProps {
    children: ReactNode;
    widthSlide: number;
    dataOrder: string;
}

export const ValueSlideOver: React.FC<ValueSlideOverProps> = ({children, widthSlide, dataOrder}) => {
   const {handleBtnClick} = useSlideOver()
  return (
    <div data-order={dataOrder} 
        className="slideover 
            fixed z-50 inset-0 w-full h-screen flex justify-end 
            opacity-0 invisible
            transition-all duration-500 ease-in-out">
        <div
            className='absolute -z-[1] inset-0 w-full h-full bg-black/60 cursor-pointer'
            onClick={() => handleBtnClick(dataOrder)}></div>      

        <div className="bg-white h-full shadow-md p-5 translate-x-60
            transition-all duration-300 ease-linear" 
            style={{ width: widthSlide + "%" }}>
            {children}
        </div>
    </div>
  )
}
