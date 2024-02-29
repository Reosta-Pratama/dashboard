"use client"

import React, { useState } from 'react'
import { FiFile } from 'react-icons/fi'
import { BoxCode } from '../../show-code/box';
import { AccordionBoxed } from './components/box';

interface CodeBoxAccordionProps {
    active: boolean;
}

const accordion = [
    {
        title: 'Accordion 1',
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 1'
    }, {
        title: 'Accordion 2',
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 2'
    }, {
        title: 'Accordion 3',
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 3'
    }, {
        title: 'Accordion 4',
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 4'
    }, {
        title: 'Accordion 5',
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 5'
    }
];

export const CodeBoxAccordion: React.FC<CodeBoxAccordionProps> = ({active}) => {
  return (
    <div className="p-5">
        {active == false 
            ? 
            <AccordionBoxed data={accordion}></AccordionBoxed>
            : <Code/>}
    </div>
  )
}

const accordionAsString = `
  <ul className='flex flex-col gap-3 overflow-hidden'>
    ${accordion.map((item, index) => `
      <li
        key=${index}
        className='bg-white relative z-10 p-4 overflow-hidden
        border border-solid border-slate-200'
      >
        <div>
          <button
            type="button"
            onClick={() => handleBtnClick(index)}
            data-order=${index}
            className='btnAccordion w-full font-medium text-left duration-300 ease-in-out'
          >
            ${item.title}
          </button>
        </div>
        <div
          data-order=${index}
          className='accordion collapse transition-all duration-300 ease-in-out'
          style='height: 0px'
        >
          <p className='text-slate-600 leading-[1.625]'>
            ${item.description}
          </p>
        </div>
      </li>
    `).join('')}
  </ul>
`;

const Code = () => {
    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
        navigator
            .clipboard
            .writeText(accordionAsString)
            .then(() => {
                setCopied(true);
                setTimeout(() => {
                    setCopied(false);
                }, 2000);
            })
            .catch((err) => {
                console.error('Failed to copy:', err);
            });
    };

    return (
        <div className="flex flex-col gap-3">
            <button className='w-fit flex items-center shadow-sm gap-2 py-1 px-2
                border border-solid border-secondary rounded-md'
                onClick={handleCopy}>
                <span className='text-base'><FiFile /></span>
                <span className='text-slate-500 font-medium'>{copied ? 'Copied!' : 'Copy example code'}</span>
            </button>


            <BoxCode>
                <pre className='px-5 py-4'>
                    <code>
                        {`
<ul class = "flex flex-col gap-3 overflow-hidden" > <li
    class="bg-white relative z-10 p-4 overflow-hidden   border border-solid border-slate-200">
    <div>
        <button
            type="button"
            data-order="0"
            class="btnAccordion w-full font-medium text-left duration-300 ease-in-out">Accordion 1</button>
    </div>
    <div
        data-order="0"
        class="accordion transition-all duration-300 ease-in-out mt-0 collapse"
        style="height: 0px;">
        <p class="text-slate-600 leading-[1.625]">Lorem Ipsum is simply dummy text of
            the printing and typesetting industry. Lorem Ipsum has been the standard dummy
            text ever since the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book. 1</p>
    </div>
</li>
<li
    class="bg-white relative z-10 p-4 overflow-hidden   border border-solid border-slate-200">
    <div>
        <button
            type="button"
            data-order="1"
            class="btnAccordion w-full font-medium text-left duration-300 ease-in-out text-primary">Accordion 2</button>
    </div>
    <div
        data-order="1"
        class="accordion transition-all duration-300 ease-in-out mt-3 visible"
        style="height: 91px;">
        <p class="text-slate-600 leading-[1.625]">Lorem Ipsum is simply dummy text of
            the printing and typesetting industry. Lorem Ipsum has been the standard dummy
            text ever since the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book. 2</p>
    </div>
</li>
<li
    class="bg-white relative z-10 p-4 overflow-hidden   border border-solid border-slate-200">
    <div>
        <button
            type="button"
            data-order="2"
            class="btnAccordion w-full font-medium text-left duration-300 ease-in-out">Accordion 3</button>
    </div>
    <div
        data-order="2"
        class="accordion transition-all duration-300 ease-in-out mt-0 collapse"
        style="height: 0px;">
        <p class="text-slate-600 leading-[1.625]">Lorem Ipsum is simply dummy text of
            the printing and typesetting industry. Lorem Ipsum has been the standard dummy
            text ever since the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book. 3</p>
    </div>
</li>
<li
    class="bg-white relative z-10 p-4 overflow-hidden   border border-solid border-slate-200">
    <div>
        <button
            type="button"
            data-order="3"
            class="btnAccordion w-full font-medium text-left duration-300 ease-in-out">Accordion 4</button>
    </div>
    <div
        data-order="3"
        class="accordion transition-all duration-300 ease-in-out mt-0 collapse"
        style="height: 0px;">
        <p class="text-slate-600 leading-[1.625]">Lorem Ipsum is simply dummy text of
            the printing and typesetting industry. Lorem Ipsum has been the standard dummy
            text ever since the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book. 4</p>
    </div>
</li>
<li
    class="bg-white relative z-10 p-4 overflow-hidden   border border-solid border-slate-200">
    <div>
        <button
            type="button"
            data-order="4"
            class="btnAccordion w-full font-medium text-left duration-300 ease-in-out">Accordion 5</button>
    </div>
    <div
        data-order="4"
        class="accordion collapse transition-all duration-300 ease-in-out mt-0"
        style="height:0px">
        <p class="text-slate-600 leading-[1.625]">Lorem Ipsum is simply dummy text of
            the printing and typesetting industry. Lorem Ipsum has been the standard dummy
            text ever since the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book. 5</p>
    </div>
</li>
</ul>`}                    </code>
                </pre>
            </BoxCode>
        </div>
    )
}