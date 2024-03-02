import React from 'react'
import useTabLink from './toggle';

interface TabBtnLinkProps {
    dataTab: string;
    name: string;
    func?: () => void;
    index: number;
}

export const TabBtnLink: React.FC<TabBtnLinkProps> = ({dataTab, name, func, index}) => {
    const firstIdx = index === 0 ? "border-primary text-slate-800" : "border-transparent";

    const {handleBtnClick} = useTabLink()

  return (
    <li className='flex flex-1'>
        <button
            data-tab={dataTab}
            type='button'
            onClick={() => handleBtnClick(dataTab)}
            className={`tab-btn-link
                w-full px-5 py-2 
                border-b-2 border-solid 
                ${firstIdx}`}>
            <span className='capitalize font-medium'>{name}</span>
        </button>
    </li>
  )
}
