import React, { ReactNode } from 'react'
import useAccordion from '../../basic/components/toggle';

interface AccordionItem {
    title: string;
    description: string;
}

interface AccordionBoxedProps {
    data: AccordionItem[];
}

export const AccordionBoxed: React.FC<AccordionBoxedProps> = ({data}) => {
    const {handleBtnClick} = useAccordion()

  return (
    <ul className='flex flex-col gap-3 overflow-hidden'>
        {data.map((item, index) => (
        <li
            key={index}
            className='bg-white relative z-10 p-4 overflow-hidden
                border border-solid border-slate-200'>
            <div>
                <button type="button"
                    onClick={() => handleBtnClick(index)}
                    data-order={index}
                    className='btnAccordion w-full font-medium text-left duration-300 ease-in-out'>
                    {item.title}
                </button>
            </div>

            <div data-order={index} 
                className='accordion collapse
                    transition-all duration-300 ease-in-out'
                style={{ height: '0px' }}>
                    <p className='text-slate-600 leading-[1.625]'>{item.description}</p>
            </div>
        </li>
        ))}
    </ul>
  )
}
