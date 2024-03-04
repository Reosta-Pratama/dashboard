"use client"

import React, { useState } from 'react'
import { FiFile } from 'react-icons/fi'

interface CodeChartVerticalProps {
    active: boolean;
}

export const CodeChartVertical: React.FC<CodeChartVerticalProps> = ({active}) => {

  return (
    <div className="p-5">
        {active == false 
            ? 
            <span>test</span>
            : <Code/>}
    </div>
  )
}

const chartAsString = () => {
    return `

  `;
};
  

const Code = () => {
    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
        navigator
            .clipboard
            .writeText(chartAsString())
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

`}
                    </code>
                </pre>
            </div>
        </div>
    )
}