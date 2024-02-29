"use client"

import React, { useState } from 'react'
import { FiFile } from 'react-icons/fi'
import { BtnPrimary } from './style/btn-primary';
import { BtnSecondary } from './style/btn-secondary';
import { BtnSuccess } from './style/btn-success';
import { BtnWarning } from './style/btn-warning';
import { BtnPending } from './style/btn-pending';
import { BtnDanger } from './style/btn-danger';
import { BtnDark } from './style/btn-dark';
import { BoxCode } from '../../show-code/box';

interface CodeBasicBtnProps {
    active: boolean;
}

export const CodeBasicBtn: React.FC<CodeBasicBtnProps> = ({active}) => {
  return (
    <div className="p-5">
        {active == false 
            ? 
            <ul className='flex flex-wrap gap-2'>
                <li>
                    <BtnPrimary
                        title="primary"
                        addType="button"
                        addClass="min-w-24 px-3 py-2"></BtnPrimary> 
                </li>
                <li>
                    <BtnSecondary
                        title="Secondary"
                        addType="button"
                        addClass="min-w-24 px-3 py-2"></BtnSecondary> 
                </li>
                <li>
                    <BtnSuccess
                        title="success"
                        addType="button"
                        addClass="min-w-24 px-3 py-2"></BtnSuccess> 
                </li>
                <li>
                    <BtnWarning
                        title="Warning"
                        addType="button"
                        addClass="min-w-24 px-3 py-2"></BtnWarning> 
                </li>
                <li>
                    <BtnPending
                        title="Pending"
                        addType="button"
                        addClass="min-w-24 px-3 py-2"></BtnPending> 
                </li>
                <li>
                    <BtnDanger
                        title="Danger"
                        addType="button"
                        addClass="min-w-24 px-3 py-2"></BtnDanger> 
                </li>
                <li>
                    <BtnDark
                        title="Dark"
                        addType="button"
                        addClass="min-w-24 px-3 py-2"></BtnDark> 
                </li>
            </ul>
            : <Code/>}
    </div>
  )
}

const buttons = [
    {
      title: 'Primary',
      addType: 'button' as const,
      addClass: 'text-white bg-primary hover:bg-primary/90 focus:ring-primary/20'
    },
    {
      title: 'Secondary',
      addType: 'button' as const,
      addClass: 'text-slate-500 bg-secondary hover:bg-secondary/70 focus:ring-secondary'
    },
    {
      title: 'Success',
      addType: 'button' as const,
      addClass: 'text-slate-900 bg-success hover:bg-success/90 focus:ring-success/20'
    },
    {
      title: 'Warning',
      addType: 'button' as const,
      addClass: 'text-slate-900 bg-warning hover:bg-warning/90 focus:ring-warning/20'
    },
    {
      title: 'Pending',
      addType: 'button' as const,
      addClass: 'text-white bg-pending hover:bg-pending/90 focus:ring-pending/20'
    },
    {
      title: 'Danger',
      addType: 'button' as const,
      addClass: 'text-white bg-danger hover:bg-danger/90 focus:ring-danger/20'
    },
    {
      title: 'Dark',
      addType: 'button' as const,
      addClass: 'text-white bg-dark hover:bg-dark/90 focus:ring-dark/20'
    }
];

const buttonsAsString = buttons
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
            .writeText(buttonsAsString)
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
                    {
                        buttons.map((item, index) => {
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
            </BoxCode>
        </div>
    )
}