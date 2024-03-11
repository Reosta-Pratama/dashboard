"use client"

import React, { useState } from 'react'
import { FiFile } from 'react-icons/fi'
import { Tooltip } from './components/box';
import { ValueTooltip } from './components/value';
import { useTooltipBasic } from './toggle';

interface CodeBasicTooltipProps {
    active: boolean;
}

export const CodeBasicTooltip: React.FC<CodeBasicTooltipProps> = ({active}) => {
    const { isActive, handleHover, handleLeave } = useTooltipBasic()

  return (
    <div className="p-5">
        {active == false 
            ? 
            <Tooltip addClass='flex justify-center'>
                <button type="button" 
                    onMouseEnter={() => handleHover('basic')}
                    onMouseLeave={() => handleLeave('basic')}
                    className="font-medium capitalize  
                            flex justify-center rounded-md shadow-sm 
                            duration-200 ease-in-out focus:ring-4
                            text-white bg-primary hover:bg-primary/90 focus:ring-primary/20 min-w-24 px-3 py-2">
                        show tooltip
                </button>
                <ValueTooltip addClass='px-5 py-2' bgColor='#00293B' active={isActive('basic')}>
                    <span className='text-white'>This is awesome tooltip example!</span>
                </ValueTooltip>
            </Tooltip>
            : <Code/>}
    </div>
  )
}

const tooltipsAsString = () => {
    return `
<div class="flex justify-center w-full">
    <div class="relative">
        <button
            type="button"
            class="font-medium capitalize     flex justify-center rounded-md shadow-sm    duration-200 ease-in-out focus:ring-4   text-white bg-primary hover:bg-primary/90 focus:ring-primary/20 min-w-24 px-3 py-2">show tooltip</button>
        <div
            class="absolute z-40 -top-12 left-1/2 -translate-x-1/2 rounded-md whitespace-nowrap
                px-5 py-2
                opacity-0 invisible
                transition-all duration-300 ease-in-out"
            style="background-color:#00293B">
            <div
                class="absolute top-[80%] left-1/2 rotate-45   border-[5px] border-solid"
                style="border-color:#00293B"></div>
            <span class="text-white">This is awesome tooltip example!</span>
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
            .writeText(tooltipsAsString())
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
<div class="flex justify-center w-full">
    <div class="relative">
        <button
            type="button"
            class="font-medium capitalize     flex justify-center rounded-md shadow-sm    duration-200 ease-in-out focus:ring-4   text-white bg-primary hover:bg-primary/90 focus:ring-primary/20 min-w-24 px-3 py-2">show tooltip</button>
        <div
            class="absolute z-40 -top-12 left-1/2 -translate-x-1/2 rounded-md whitespace-nowrap
                px-5 py-2
                opacity-0 invisible
                transition-all duration-300 ease-in-out"
            style="background-color:#00293B">
            <div
                class="absolute top-[80%] left-1/2 rotate-45   border-[5px] border-solid"
                style="border-color:#00293B"></div>
            <span class="text-white">This is awesome tooltip example!</span>
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