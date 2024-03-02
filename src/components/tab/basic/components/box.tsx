import React, { Children, ReactNode } from 'react'
import { TabBtn } from './button';

interface TabButton {
    dataTab: string;
    name: string;
}

interface TabProps {
    buttons: TabButton[];
    children: ReactNode;
}

export const Tab: React.FC<TabProps> = ({buttons, children}) => {

  return (
    <div className='tab'>
        <ul className='flex items-center'>
            {
                buttons.map((item, index) => {
                    return (
                        <TabBtn 
                            key={index} 
                            dataTab={item.dataTab} 
                            name={item.name}
                            index={index}>
                        </TabBtn>
                    )
                })
            }
        </ul>

        <div className="p-5 rounded-b-md 
                border-b border-l border-r 
                border-solid border-slate-200">
            {children}
        </div>
    </div>
  )
}
