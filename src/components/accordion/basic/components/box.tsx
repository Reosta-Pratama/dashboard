import React, { ReactNode } from 'react'
import { useAccordion } from './toggle';

interface AccordionItem {
    title: string;
    description: string;
}

interface AccordionProps {
    data: AccordionItem[];
}

export const Accordion: React.FC<AccordionProps> = ({data}) => {
    const {handleBtnClick} = useAccordion()

  return (
    <ul className='overflow-hidden'>
        {data.map((item, index) => (
        <li
            key={index}
            className='bg-white relative z-10 py-4 first:pt-0 border-b border-solid border-slate-200 last:border-none'>
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
