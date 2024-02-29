"use client"

import React, { useState } from 'react'
import { FiFile } from 'react-icons/fi'
import { BtnMedium } from '@/components/button/sizes/style/mediumBtn';
import { BoxDropdown } from '@/components/dropdown/style/box';
import { Dropdown } from '@/components/dropdown/basic/components/box';
import { ChildDropdown } from '@/components/dropdown/basic/components/children';
import { useDropdown } from '@/components/dropdown/style/toggle';

interface BasicDropdownCodeProps {
    active: boolean;
}

export const BasicDropdownCode: React.FC<BasicDropdownCodeProps> = ({active}) => {
    const { isActive, handleBtnClick } = useDropdown();

  return (
    <div className="p-5">
        {active == false 
            ? 
            <BoxDropdown>
                <BtnMedium 
                    title="show dropdown" 
                    addType='button' 
                    func={() => handleBtnClick('basicDropdown')}>
                </BtnMedium>

                <Dropdown 
                    dataOrder='basicDropdown'>
                    <ChildDropdown 
                        title='new dropdown' 
                        href=''
                        toggleDropdown={() => handleBtnClick('basicDropdown')}>
                    </ChildDropdown>
                    <ChildDropdown 
                        title='delete dropdown' 
                        href=''
                        toggleDropdown={() => handleBtnClick('basicDropdown')}>
                    </ChildDropdown>
                </Dropdown>
            </BoxDropdown>
            : <Code/>}
    </div>
  )
}

const dropdownsAsString = () => {
    return `
  <div class="flex justify-center">
      <div class="relative">
          <button
              type="button"
              class="font-medium capitalize
                      flex justify-center rounded-md shadow-sm
                      duration-200 ease-in-out focus:ring-4
                  text-white bg-primary hover:bg-primary/90 focus:ring-primary/20 px-3 py-2">show dropdown</button>
          <div
              class="absolute top-0 right-0 w-fit
                      translate-y-20 opacity-0 invisible
                      transition-all duration-300 ease-in-out">
              <ul class="bg-white w-full flex flex-col shadow rounded-md gap-2 p-2">
                  <li>
                      <a
                          class="w-full flex rounded-md p-2 whitespace-nowrap capitalize
                                  duration-300 ease-in-out hover:bg-slate-200"
                          href="">new dropdown</a>
                  </li>
                  <li>
                      <a
                          class="w-full flex rounded-md p-2 whitespace-nowrap capitalize
                                  duration-300 ease-in-out hover:bg-slate-200"
                          href="">delete dropdown</a>
                  </li>
              </ul>
          </div>
      </div>
  </div>
  `;
  };
  

const Code = () => {
    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
        navigator
            .clipboard
            .writeText(dropdownsAsString())
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
                <code className='text-xs'>
{`
<div class="flex justify-center">
    <div class="relative">
        <button
            type="button"
            class="font-medium capitalize
                    flex justify-center rounded-md shadow-sm
                    duration-200 ease-in-out focus:ring-4
                text-white bg-primary hover:bg-primary/90 focus:ring-primary/20 px-3 py-2">show dropdown</button>
        <div
            class="absolute top-0 right-0 w-fit
                    translate-y-20 opacity-0 invisible
                    transition-all duration-300 ease-in-out">
            <ul class="bg-white w-full flex flex-col shadow rounded-md gap-2 p-2">
                <li>
                    <a
                        class="w-full flex rounded-md p-2 whitespace-nowrap capitalize
                                duration-300 ease-in-out hover:bg-slate-200 undefined"
                        href="">new dropdown</a>
                </li>
                <li>
                    <a
                        class="w-full flex rounded-md p-2 whitespace-nowrap capitalize
                                duration-300 ease-in-out hover:bg-slate-200 undefined"
                        href="">delete dropdown</a>
                </li>
            </ul>
        </div>
    </div>
</div>
`}
                    </code>
                </pre>
            </div>
        </div>
    )
}