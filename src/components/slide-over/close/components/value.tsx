import React, { ReactNode } from 'react'
import useSlideOver from '../../toggle';
import { FiX } from 'react-icons/fi';

interface ValueSlideOverCloseProps {
    children: ReactNode;
    widthSlide: number;
    dataOrder: string;
}

export const ValueSlideOverClose: React.FC<ValueSlideOverCloseProps> = ({children, widthSlide, dataOrder}) => {
   const {handleBtnClick} = useSlideOver()
  return (
    <div data-order={dataOrder} 
        className="slideover 
            fixed z-50 inset-0 w-full h-screen flex justify-end 
            opacity-0 invisible
            transition-all duration-500 ease-in-out">
        <div className='absolute -z-[1] inset-0 w-full h-full bg-black/60 cursor-pointer'></div>      

        <div className="relative bg-white h-full shadow-md p-5 translate-x-60
            transition-all duration-300 ease-linear" 
            style={{ width: widthSlide + "%" }}>
                <div className="absolute top-4 -left-12">
                    <button type='button' 
                        onClick={() => handleBtnClick(dataOrder)}
                        className='text-3xl text-slate-400 hover:animate-ping'>
                            <FiX />
                    </button>
                </div>
            {children}
        </div>
    </div>
  )
}
