import React, { ReactNode } from 'react'
import { TabBtnBoxed } from './button';

interface TabButton {
    dataTab: string;
    name: string;
}

interface TabBoxedProps {
    buttons: TabButton[];
    children: ReactNode;
}

export const TabBoxed: React.FC<TabBoxedProps> = ({buttons, children}) => {
  return (
    <div className='tab'>
        <ul className='flex items-center'>
            {
                buttons.map((item, index) => {
                    return (
                        <TabBtnBoxed 
                            key={index} 
                            dataTab={item.dataTab} 
                            name={item.name}
                            index={index}>
                        </TabBtnBoxed>
                    )
                })
            }
        </ul>

        <div className="pt-5">
            {children}
        </div>
    </div>
  )
}
