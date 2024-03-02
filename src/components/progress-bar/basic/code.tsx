"use client"

import React, { useState } from 'react'
import { FiFile } from 'react-icons/fi'
import { Progress } from './box';

interface CodeBasicProgressProps {
    active: boolean;
}

export const CodeBasicProgress: React.FC<CodeBasicProgressProps> = ({active}) => {
  return (
    <div className="p-5">
        {active == false 
            ? 
            <ul className='flex flex-col gap-3'>
                <li><Progress color='bg-primary' percentage={50}></Progress></li>
                <li><Progress color='bg-success' percentage={70}></Progress></li>
                <li><Progress color='bg-warning' percentage={100}></Progress></li>
            </ul>
            : <Code/>}
    </div>
  )
}

const progressAsString = () => {
    return `
<ul class="flex flex-col gap-3">
    <li>
        <div class="bg-slate-200 w-full h-2 rounded">
            <div class="bg-primary h-full rounded" style="width: 50%;"></div>
        </div>
    </li>
    <li>
        <div class="bg-slate-200 w-full h-2 rounded">
            <div class="bg-success h-full rounded" style="width: 70%;"></div>
        </div>
    </li>
    <li>
        <div class="bg-slate-200 w-full h-2 rounded">
            <div class="bg-warning h-full rounded" style="width: 100%;"></div>
        </div>
    </li>
</ul>
  `;
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
        <div class="bg-slate-200 w-full h-2 rounded">
            <div class="bg-primary h-full rounded" style="width: 50%;"></div>
        </div>
    </li>
    <li>
        <div class="bg-slate-200 w-full h-2 rounded">
            <div class="bg-success h-full rounded" style="width: 70%;"></div>
        </div>
    </li>
    <li>
        <div class="bg-slate-200 w-full h-2 rounded">
            <div class="bg-warning h-full rounded" style="width: 100%;"></div>
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