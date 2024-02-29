"use client"

import React, { useState } from 'react'
import { FiActivity, FiAirplay, FiFile } from 'react-icons/fi'
import { BtnMedium } from '@/components/button/sizes/mediumBtn';
import { BoxDropdown } from '@/components/dropdown/style/box';
import { useDropdown } from '@/components/dropdown/style/toggle';
import { DropdownHeadFoot } from '@/components/dropdown/header-footer/box';
import { ChildDropdownHeadFoot } from '@/components/dropdown/header-footer/children';

interface HeadFootDropdownCodeProps {
    active: boolean;
}

export const HeadFootDropdownCode: React.FC<HeadFootDropdownCodeProps> = ({active}) => {
    const { isActive, handleBtnClick } = useDropdown();

  return (
    <div className="p-5">
        {active == false 
            ? 
            <BoxDropdown>
                <BtnMedium 
                    title="show dropdown" 
                    addType='button' 
                    func={() => handleBtnClick('headfootDropdown')}>
                </BtnMedium>

                <DropdownHeadFoot 
                    header='export options'
                    footer1={{ title: "Settings", href: "/" }}
                    footer2={{ title: "view profile", href: "/" }}
                    dataOrder='headfootDropdown'
                    addClass='w-60'>
                    <ChildDropdownHeadFoot 
                        icon={<FiActivity />}
                        title='new dropdown' 
                        href=''
                        toggleDropdown={() => handleBtnClick('headfootDropdown')}>
                    </ChildDropdownHeadFoot>
                    <ChildDropdownHeadFoot 
                        icon={<FiAirplay />}
                        title='delete dropdown' 
                        href=''
                        toggleDropdown={() => handleBtnClick('headfootDropdown')}>
                    </ChildDropdownHeadFoot>
                </DropdownHeadFoot>
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
            data-order="headfootDropdown"
            class="dropdown absolute top-0 right-0 w-fit transition-all duration-300 ease-in-out translate-y-10 opacity-100 visible">
            <div class="bg-white min-w-40 flex flex-col shadow rounded-md p-2 w-60">
                <h2 class="font-medium capitalize p-2">export options</h2>
                <span class="bg-slate-200 w-full h-[1px] my-2"></span>
                <ul class="flex flex-col gap-2">
                    <li>
                        <a
                            class="w-full flex items-center rounded-md gap-2 p-2 whitespace-nowrap capitalize
duration-300 ease-in-out hover:bg-slate-200 undefined"
                            href="">
                            <span>
                                <svg
                                    stroke="currentColor"
                                    fill="none"
                                    stroke-width="2"
                                    viewBox="0 0 24 24"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    height="1em"
                                    width="1em"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
                                </svg>
                            </span>
                            <span>new dropdown</span>
                        </a>
                    </li>
                    <li>
                        <a
                            class="w-full flex items-center rounded-md gap-2 p-2 whitespace-nowrap capitalize
duration-300 ease-in-out hover:bg-slate-200 undefined"
                            href="">
                            <span>
                                <svg
                                    stroke="currentColor"
                                    fill="none"
                                    stroke-width="2"
                                    viewBox="0 0 24 24"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    height="1em"
                                    width="1em"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M5 17H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-1"></path>
                                    <polygon points="12 15 17 21 7 21 12 15"></polygon>
                                </svg>
                            </span>
                            <span>delete dropdown</span>
                        </a>
                    </li>
                </ul>
                <span class="bg-slate-200 w-full h-[1px] my-2"></span>
                <div class="flex justify-between p-2">
                    <a
                        class="bg-primary hover:bg-primary/90 focus:ring-primary/20   flex justify-center rounded-md shadow-sm px-2 py-1    duration-200 ease-in-out focus:ring-4"
                        href="/">
                        <span class="text-white font-medium capitalize">Settings</span>
                    </a>
                    <a
                        class="bg-secondary hover:bg-secondary/70 focus:ring-secondary   flex justify-center rounded-md shadow-sm px-2 py-1    duration-200 ease-in-out focus:ring-4"
                        href="/">
                        <span class="text-slate-500 font-medium capitalize">view profile</span>
                    </a>
                </div>
            </div>
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
            data-order="headfootDropdown"
            class="dropdown absolute top-0 right-0 w-fit transition-all duration-300 ease-in-out translate-y-10 opacity-100 visible">
            <div class="bg-white min-w-40 flex flex-col shadow rounded-md p-2 w-60">
                <h2 class="font-medium capitalize p-2">export options</h2>
                <span class="bg-slate-200 w-full h-[1px] my-2"></span>
                <ul class="flex flex-col gap-2">
                    <li>
                        <a
                            class="w-full flex items-center rounded-md gap-2 p-2 whitespace-nowrap capitalize
duration-300 ease-in-out hover:bg-slate-200 undefined"
                            href="">
                            <span>
                                <svg
                                    stroke="currentColor"
                                    fill="none"
                                    stroke-width="2"
                                    viewBox="0 0 24 24"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    height="1em"
                                    width="1em"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
                                </svg>
                            </span>
                            <span>new dropdown</span>
                        </a>
                    </li>
                    <li>
                        <a
                            class="w-full flex items-center rounded-md gap-2 p-2 whitespace-nowrap capitalize
duration-300 ease-in-out hover:bg-slate-200 undefined"
                            href="">
                            <span>
                                <svg
                                    stroke="currentColor"
                                    fill="none"
                                    stroke-width="2"
                                    viewBox="0 0 24 24"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    height="1em"
                                    width="1em"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M5 17H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-1"></path>
                                    <polygon points="12 15 17 21 7 21 12 15"></polygon>
                                </svg>
                            </span>
                            <span>delete dropdown</span>
                        </a>
                    </li>
                </ul>
                <span class="bg-slate-200 w-full h-[1px] my-2"></span>
                <div class="flex justify-between p-2">
                    <a
                        class="bg-primary hover:bg-primary/90 focus:ring-primary/20   flex justify-center rounded-md shadow-sm px-2 py-1    duration-200 ease-in-out focus:ring-4"
                        href="/">
                        <span class="text-white font-medium capitalize">Settings</span>
                    </a>
                    <a
                        class="bg-secondary hover:bg-secondary/70 focus:ring-secondary   flex justify-center rounded-md shadow-sm px-2 py-1    duration-200 ease-in-out focus:ring-4"
                        href="/">
                        <span class="text-slate-500 font-medium capitalize">view profile</span>
                    </a>
                </div>
            </div>
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