import React, { ReactNode } from 'react'
import { useModal } from '../../toggle';

interface ValueModalBlankProps {
    children: ReactNode;
    addClass?: string;
    dataOrder: string;
}

export const ValueModalBlank:React.FC<ValueModalBlankProps> = ({children, addClass, dataOrder}) => {
    const {handleBtnClick} = useModal()
  return (
    <div data-order={dataOrder} className='modal fixed z-50 inset-0 opacity-0 invisible
        transition-all duration-300 ease-in-out'>
        <div className="absolute z-10 inset-0 bg-black/60" onClick={() => handleBtnClick(dataOrder)}></div>
        <div className={`relative z-20 bg-white min-w-[460px] 
            shadow-md rounded-md p-10 mx-auto mt-0
            transition-all duration-300 ease-in-out 
            ${addClass}`}>
            {children}
        </div>
    </div>
  )
}
