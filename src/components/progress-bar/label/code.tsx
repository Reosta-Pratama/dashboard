"use client"

import React, { useState } from 'react'
import { FiFile } from 'react-icons/fi'
import ProgressLabel from './box';

interface CodeLabelProgressProps {
    active: boolean;
}

export const CodeLabelProgress: React.FC<CodeLabelProgressProps> = ({active}) => {
  return (
    <div className="p-5">
        {active == false 
            ? 
            <ul className='flex flex-col gap-3'>
                <li><ProgressLabel color="bg-primary" percentage={50}></ProgressLabel></li>
                <li><ProgressLabel color="bg-primary" percentage={70}></ProgressLabel></li>
                <li><ProgressLabel color="bg-primary" percentage={100}></ProgressLabel></li>
            </ul>
            : <Code/>}
    </div>
  )
}

const progressAsString = () => {
    return `
<ul class="flex flex-col gap-3">
    <li>
        <div class="bg-slate-200 w-full h-4 rounded">
            <div
                class="bg-primary h-full flex justify-center items-center rounded"
                style="width:50%">
                <p class="text-white text-xs">50<!-- -->%</p>
            </div>
        </div>
    </li>
    <li>
        <div class="bg-slate-200 w-full h-4 rounded">
            <div
                class="bg-primary h-full flex justify-center items-center rounded"
                style="width:70%">
                <p class="text-white text-xs">70<!-- -->%</p>
            </div>
        </div>
    </li>
    <li>
        <div class="bg-slate-200 w-full h-4 rounded">
            <div
                class="bg-primary h-full flex justify-center items-center rounded"
                style="width:100%">
                <p class="text-white text-xs">100<!-- -->%</p>
            </div>
        </div>
    </li>
</ul>  `;
  };
  

const Code = () => {
    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
        navigator
            .clipboard
            .writeText(progressAsString())
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
<ul class="flex flex-col gap-3">
    <li>
        <div class="bg-slate-200 w-full h-4 rounded">
            <div
                class="bg-primary h-full flex justify-center items-center rounded"
                style="width:50%">
                <p class="text-white text-xs">50<!-- -->%</p>
            </div>
        </div>
    </li>
    <li>
        <div class="bg-slate-200 w-full h-4 rounded">
            <div
                class="bg-primary h-full flex justify-center items-center rounded"
                style="width:70%">
                <p class="text-white text-xs">70<!-- -->%</p>
            </div>
        </div>
    </li>
    <li>
        <div class="bg-slate-200 w-full h-4 rounded">
            <div
                class="bg-primary h-full flex justify-center items-center rounded"
                style="width:100%">
                <p class="text-white text-xs">100<!-- -->%</p>
            </div>
        </div>
    </li>
</ul>
`}
                    </code>
                </pre>
            </div>
        </div>
    )
}