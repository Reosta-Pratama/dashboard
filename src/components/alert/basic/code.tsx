"use client"

import React, { useState } from 'react'
import { FiFile } from 'react-icons/fi'
import { BoxCode } from '../../show-code/box';
import { AlertPrimary } from './style/primary';
import { AlertSecondary } from './style/secondary';
import { AlertSuccess } from './style/success';
import { AlertWarning } from './style/warning';
import { AlertPending } from './style/pending';
import { AlertDanger } from './style/danger';
import { AlertDark } from './style/dark';

interface CodeBasicAlertProps {
    active: boolean;
}

export const CodeBasicAlert: React.FC<CodeBasicAlertProps> = ({active}) => {
  return (
    <div className="p-5">
        {active == false 
            ? 
            <ul className='flex flex-col gap-2'>
                <li> <AlertPrimary title='Awesome simple alert'></AlertPrimary> </li>
                <li> <AlertSecondary title='Awesome simple alert'></AlertSecondary> </li>
                <li> <AlertSuccess title='Awesome simple alert'></AlertSuccess> </li>
                <li> <AlertWarning title='Awesome simple alert'></AlertWarning> </li>
                <li> <AlertPending title='Awesome simple alert'></AlertPending> </li>
                <li> <AlertDanger title='Awesome simple alert'></AlertDanger> </li>
                <li> <AlertDark title='Awesome simple alert'></AlertDark> </li>
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
<ul class="flex flex-col gap-2">
    <li>
        <div
            class="undefined
bg-primary border-primary text-white w-full px-5 py-4
border border-solid rounded-md">Awesome simple alert</div>
    </li>
    <li>
        <div
            class="undefined
bg-secondary border-secondary text-slate-500 w-full px-5 py-4
border border-solid rounded-md">Awesome simple alert</div>
    </li>
    <li>
        <div
            class="undefined
bg-success border-success text-slate-900 w-full px-5 py-4
border border-solid rounded-md">Awesome simple alert</div>
    </li>
    <li>
        <div
            class="undefined
bg-warning border-warning text-slate-900 w-full px-5 py-4
border border-solid rounded-md">Awesome simple alert</div>
    </li>
    <li>
        <div
            class="undefined
bg-pending border-pending text-white w-full px-5 py-4
border border-solid rounded-md">Awesome simple alert</div>
    </li>
    <li>
        <div
            class="undefined
bg-danger border-danger text-white w-full px-5 py-4
border border-solid rounded-md">Awesome simple alert</div>
    </li>
    <li>
        <div
            class="undefined
bg-dark border-dark text-white w-full px-5 py-4
border border-solid rounded-md">Awesome simple alert</div>
    </li>
</ul>
                        `}
                    </code>
                </pre>
            </BoxCode>
        </div>
    )
}