import React from 'react'
import useTabBoxed from './toggle';

interface TabBtnBoxedProps {
    dataTab: string;
    name: string;
    func?: () => void;
    index: number;
}

export const TabBtnBoxed: React.FC<TabBtnBoxedProps> = ({dataTab, name, func, index}) => {
    const firstIdx = index === 0 ? "bg-primary text-white" : "bg-white text-slate-800";

    const {handleBtnClick} = useTabBoxed()

  return (
    <li className='flex flex-1'>
        <button
            data-tab={dataTab}
            type='button'
            onClick={() => handleBtnClick(dataTab)}
            className={`tab-btn-boxed
                w-full px-5 py-2 rounded-md shadow ${firstIdx}`}>
            <span className='capitalize font-medium'>{name}</span>
        </button>
    </li>
  )
}
