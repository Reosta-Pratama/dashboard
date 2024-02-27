"use client"

import React, { useState } from 'react'
import { FiFile } from 'react-icons/fi'
import { BtnMedium } from '@/components/button/sizes/mediumBtn';
import { BoxDropdown } from '@/components/dropdown/style/box';
import { Dropdown } from '@/components/dropdown/basic/basic';
import { ChildDropdown } from '@/components/dropdown/basic/children';

interface BasicDropdownProps {
    active: boolean;
}

export const BasicDropdown: React.FC<BasicDropdownProps> = ({active}) => {
    const [isActive, setIsActive] = useState(false);
    const toggleDropdown = () => {
        setIsActive(!isActive);
    };

  return (
    <div className="p-5">
        {active == false 
            ? 
            <BoxDropdown>
                <BtnMedium 
                    title="show dropdown" 
                    addType='button' 
                    func={toggleDropdown}>
                </BtnMedium>

                <Dropdown isActive={isActive}>
                    <ChildDropdown 
                        title='new dropdown' 
                        href=''
                        toggleDropdown={toggleDropdown}>
                    </ChildDropdown>
                    <ChildDropdown 
                        title='delete dropdown' 
                        href=''
                        toggleDropdown={toggleDropdown}>
                    </ChildDropdown>
                </Dropdown>
            </BoxDropdown>
            : <Code/>}
    </div>
  )
}

const dropdowns = [
    {
      title: 'Primary',
      addType: 'button' as const,
      addClass: 'text-white bg-primary hover:bg-primary/90 focus:ring-primary/20'
    }
];

const dropdownsAsString = dropdowns
  .map((item) => {
    return `<button type="${item.addType}" class="font-medium capitalize w-24 flex justify-center rounded-md shadow-sm px-3 py-2 duration-200 ease-in-out focus:ring-4 ${item.addClass}"> ${item.title}</button>
`;
  })
.join('');

const Code = () => {
    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
        navigator
            .clipboard
            .writeText(dropdownsAsString)
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

            <div className="bg-[#f8fafc]  overflow-x-scroll rounded-md font-mono">
                <pre className='px-5 py-4'>
                        {
                            dropdowns.map((item, index) => {
                                return (
                                    <code key={index} className='text-xs'>
                                        &lt;<span className='text-[#22863a]'>button</span> {``}
                                        <span className='text-[#005cc5]'>type</span>{`="${item.addType}" `}
                                        <span className='text-[#005cc5]'>class</span>{`="font-medium capitalize w-24 flex justify-center rounded-md shadow-sm px-3 py-2 duration-200 ease-in-out focus:ring-4 ${item.addClass}"`}&gt; 
                                        {` ${item.title} `}
                                        &lt;/<span className='text-[#22863a]'>button</span>&gt; 
                                        <br/>
                                    </code>
                                )
                            })
                        }
                </pre>
            </div>
        </div>
    )
}