"use client"

import React, { useState } from 'react'
import { FiFile } from 'react-icons/fi'
import { BoxCode } from '../../show-code/box';

interface CodeIconDismissAlertProps {
    active: boolean;
}

export const CodeIconDismissAlert: React.FC<CodeIconDismissAlertProps> = ({active}) => {
  return (
    <div className="p-5">
        {active == false 
            ? 
            <ul className='flex flex-col gap-2'>
                <li></li>
            </ul>
            : <Code/>}
    </div>
  )
}

const alerts = [
    {
      alert: 'Primary',
      title: 'Awesome simple alert',
      addClass: 'bg-primary border-primary text-white'
    },
    {
      alert: 'Secondary',
      title: 'Awesome simple alert',
      addClass: 'bg-secondary border-secondary text-slate-500'
    },
    {
      alert: 'Success',
      title: 'Awesome simple alert',
      addClass: 'bg-success border-success text-slate-900'
    },
    {
      alert: 'Warning',
      title: 'Awesome simple alert',
      addClass: 'bg-warning border-warning text-slate-900'
    },
    {
      alert: 'Pending',
      title: 'Awesome simple alert',
      addClass: 'bg-pending border-pending text-white'
    },
    {
      alert: 'Danger',
      title: 'Awesome simple alert',
      addClass: 'bg-danger border-danger text-white'
    },
    {
      alert: 'Dark',
      title: 'Awesome simple alert',
      addClass: 'bg-dark border-dark text-white'
    }
];

const alertsAsString = `
  <ul className='flex flex-col gap-2'>
    ${alerts.map((item, index) => `
      <li
        key=${index}
            className='bg-white relative z-10 py-4 first:pt-0 border-b border-solid border-slate-200 last:border-none'>
        <div className="w-full px-5 py-4 border border-solid rounded-md ${item.addClass}">
            ${item.title}
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
            .writeText(alertsAsString)
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

                        `}
                    </code>
                </pre>
            </BoxCode>
        </div>
    )
}