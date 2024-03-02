import React, { ReactNode } from 'react'
import { TabBtnLink } from './button';

interface TabButton {
    dataTab: string;
    name: string;
}

interface TabLinkProps {
    buttons: TabButton[];
    children: ReactNode;
}

export const TabLink: React.FC<TabLinkProps> = ({buttons, children}) => {
  return (
    <div className='tab'>
        <ul className='flex items-center'>
            {
                buttons.map((item, index) => {
                    return (
                        <TabBtnLink 
                            key={index} 
                            dataTab={item.dataTab} 
                            name={item.name}
                            index={index}>
                        </TabBtnLink>
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
