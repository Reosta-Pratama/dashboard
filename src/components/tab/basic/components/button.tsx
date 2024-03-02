import React from 'react'
import useTab from './toggle';

interface TabBtnProps {
    dataTab: string;
    name: string;
    func?: () => void;
    index: number;
}

export const TabBtn: React.FC<TabBtnProps> = ({dataTab, name, func, index}) => {
    const firstIdx = index === 0 ? "border-b-0 text-slate-800" : "border-t-0 border-l-0 border-r-0";

    const {handleBtnClick} = useTab()

  return (
    <li className='flex flex-1'>
        <button
            data-tab={dataTab}
            type='button'
            onClick={() => handleBtnClick(dataTab)}
            className={`tab-btn 
                w-full px-5 py-2 rounded-t-md 
                border border-solid border-slate-200 ${firstIdx}`}>
            <span className='capitalize font-medium'>{name}</span>
        </button>
    </li>
  )
}
