"use client"

import React, { useState } from 'react'
import { FiFile } from 'react-icons/fi'
import { Select } from './componets/select';

interface CodeFormSelectProps {
    active: boolean;
}

export const CodeFormSelect: React.FC<CodeFormSelectProps> = ({active}) => {

  return (
    <div className="p-5">
        {active == false 
            ? 
            <div className="grid grid-cols-3 items-center  gap-3">
                <Select
                    id='select-1'
                    label={false}
                    sizing='large'>
                    <option value="value-1">Value 1</option>
                    <option value="value-2">Value 2</option>
                    <option value="value-3">Value 3</option>
                </Select>

                <Select
                    id='select-1'
                    label={false}
                    sizing='medium'>
                    <option value="value-1">Value 1</option>
                    <option value="value-2">Value 2</option>
                    <option value="value-3">Value 3</option>
                </Select>

                <Select
                    id='select-1'
                    label={false}
                    sizing='small'>
                    <option value="value-1">Value 1</option>
                    <option value="value-2">Value 2</option>
                    <option value="value-3">Value 3</option>
                </Select>
            </div>
            : <Code/>}
    </div>
  )
}

const formAsString = () => {
    return `
<div class="grid grid-cols-3 items-center  gap-3">
    <div class="flex flex-col gap-2">
        <div class="relative">
            <select
                name="select-1"
                id="select-1"
                class="bg-white w-full appearance-none shadow-sm rounded-md
                    border border-solid border-slate-200
                    transition-all duration-300 ease-in-out
                    text-lg pl-4 pr-8 py-2">
                <option value="value-1">Value 1</option>
                <option value="value-2">Value 2</option>
                <option value="value-3">Value 3</option>
            </select>
            <span class="absolute top-1/2 right-4 -translate-y-1/2
                text-xl">
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
                    <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
            </span>
        </div>
    </div>
    <div class="flex flex-col gap-2">
        <div class="relative">
            <select
                name="select-1"
                id="select-1"
                class="bg-white w-full appearance-none shadow-sm rounded-md
                    border border-solid border-slate-200
                    transition-all duration-300 ease-in-out
                    text-sm pl-3 pr-8 py-2">
                <option value="value-1">Value 1</option>
                <option value="value-2">Value 2</option>
                <option value="value-3">Value 3</option>
            </select>
            <span class="absolute top-1/2 right-4 -translate-y-1/2
                    text-lg">
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
                    <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
            </span>
        </div>
    </div>
    <div class="flex flex-col gap-2">
        <div class="relative">
            <select
                name="select-1"
                id="select-1"
                class="bg-white w-full appearance-none shadow-sm rounded-md
                    border border-solid border-slate-200
                    transition-all duration-300 ease-in-out
                    text-xs pl-2 pr-8 py-2">
                <option value="value-1">Value 1</option>
                <option value="value-2">Value 2</option>
                <option value="value-3">Value 3</option>
            </select>
            <span class="absolute top-1/2 right-4 -translate-y-1/2
                text-base">
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
                    <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
            </span>
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
            .writeText(formAsString())
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
<div class="grid grid-cols-3 items-center  gap-3">
<div class="flex flex-col gap-2">
    <div class="relative">
        <select
            name="select-1"
            id="select-1"
            class="bg-white w-full appearance-none shadow-sm rounded-md
                border border-solid border-slate-200
                transition-all duration-300 ease-in-out
                text-lg pl-4 pr-8 py-2">
            <option value="value-1">Value 1</option>
            <option value="value-2">Value 2</option>
            <option value="value-3">Value 3</option>
        </select>
        <span class="absolute top-1/2 right-4 -translate-y-1/2
            text-xl">
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
                <polyline points="6 9 12 15 18 9"></polyline>
            </svg>
        </span>
    </div>
</div>
<div class="flex flex-col gap-2">
    <div class="relative">
        <select
            name="select-1"
            id="select-1"
            class="bg-white w-full appearance-none shadow-sm rounded-md
                border border-solid border-slate-200
                transition-all duration-300 ease-in-out
                text-sm pl-3 pr-8 py-2">
            <option value="value-1">Value 1</option>
            <option value="value-2">Value 2</option>
            <option value="value-3">Value 3</option>
        </select>
        <span class="absolute top-1/2 right-4 -translate-y-1/2
                text-lg">
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
                <polyline points="6 9 12 15 18 9"></polyline>
            </svg>
        </span>
    </div>
</div>
<div class="flex flex-col gap-2">
    <div class="relative">
        <select
            name="select-1"
            id="select-1"
            class="bg-white w-full appearance-none shadow-sm rounded-md
                border border-solid border-slate-200
                transition-all duration-300 ease-in-out
                text-xs pl-2 pr-8 py-2">
            <option value="value-1">Value 1</option>
            <option value="value-2">Value 2</option>
            <option value="value-3">Value 3</option>
        </select>
        <span class="absolute top-1/2 right-4 -translate-y-1/2
            text-base">
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
                <polyline points="6 9 12 15 18 9"></polyline>
            </svg>
        </span>
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