"use client"

import React, { useState } from 'react'
import { FiFile } from 'react-icons/fi'
import { SoftBtnPrimary } from '@/components/button/soft/btn-primary';
import { SoftBtnSecondary } from '@/components/button/soft/btn-secondary';
import { SoftBtnSuccess } from '@/components/button/soft/btn-success';
import { SoftBtnWarning } from '@/components/button/soft/btn-warning';
import { SoftBtnPending } from '@/components/button/soft/btn-pending';
import { SoftBtnDanger } from '@/components/button/soft/btn-danger';
import { SoftBtnDark } from '@/components/button/soft/btn-dark';

interface CodeSoftBtnProps {
    active: boolean;
}

export const CodeSoftBtn: React.FC<CodeSoftBtnProps> = ({active}) => {
  return (
    <div className="p-5">
        {active == false 
            ? 
            <ul className='flex flex-wrap gap-2'>
                <li>
                    <SoftBtnPrimary
                        title="primary"
                        addType="button"></SoftBtnPrimary> 
                </li>
                <li>
                    <SoftBtnSecondary
                        title="Secondary"
                        addType="button"></SoftBtnSecondary> 
                </li>
                <li>
                    <SoftBtnSuccess
                        title="success"
                        addType="button"></SoftBtnSuccess> 
                </li>
                <li>
                    <SoftBtnWarning
                        title="Warning"
                        addType="button"></SoftBtnWarning> 
                </li>
                <li>
                    <SoftBtnPending
                        title="Pending"
                        addType="button"></SoftBtnPending> 
                </li>
                <li>
                    <SoftBtnDanger
                        title="Danger"
                        addType="button"></SoftBtnDanger> 
                </li>
                <li>
                    <SoftBtnDark
                        title="Dark"
                        addType="button"></SoftBtnDark> 
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
      addClass: 'text-primary bg-primary/20 border-primary/5 hover:bg-primary/10 hover:border-primary/10 focus:ring-primary/20'
    },
    {
      title: 'Secondary',
      addType: 'button' as const,
      addClass: 'text-slate-500 bg-secondary/40 border-secondary/5 hover:bg-secondary/20 hover:border-secondary/90 focus:ring-secondary/20'
    },
    {
      title: 'Success',
      addType: 'button' as const,
      addClass: 'text-success bg-success/20 border-success/5 hover:bg-success/10 hover:border-success/10 focus:ring-success/20'
    },
    {
      title: 'Warning',
      addType: 'button' as const,
      addClass: 'text-warning bg-warning/20 border-warning/5 hover:bg-warning/10 hover:border-warning/10 focus:ring-warning/20'
    },
    {
      title: 'Pending',
      addType: 'button' as const,
      addClass: 'text-pending bg-pending/20 border-pending/5 hover:bg-pending/10 hover:border-pending/10 focus:ring-pending/20'
    },
    {
      title: 'Danger',
      addType: 'button' as const,
      addClass: 'text-danger bg-danger/20 border-danger/5 hover:bg-danger/10 hover:border-danger/10 focus:ring-danger/20'
    },
    {
      title: 'Dark',
      addType: 'button' as const,
      addClass: 'text-dark bg-dark/20 border-dark/5 hover:bg-dark/10 hover:border-dark/10 focus:ring-dark/20'
    }
];

const buttonsAsString = buttons
  .map((item) => {
    return `<button type="${item.addType}" class="font-medium capitalize w-24 flex justify-center rounded-full shadow-sm px-3 py-2 duration-200 ease-in-out focus:ring-4 ${item.addClass}"> ${item.title}</button>
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

            <div className="bg-[#f8fafc]  overflow-x-scroll rounded-md font-mono">
                <pre className='px-5 py-4'>
                        {
                            buttons.map((item, index) => {
                                return (
                                    <code key={index} className='text-xs'>
                                        &lt;<span className='text-[#22863a]'>button</span> {``}
                                        <span className='text-[#005cc5]'>type</span>{`="${item.addType}" `}
                                        <span className='text-[#005cc5]'>class</span>{`="font-medium capitalize w-24 flex justify-center rounded-full shadow-sm px-3 py-2 border border-solid duration-200 ease-in-out focus:ring-4 ${item.addClass}"`}&gt; 
                                        {` ${item.title} `}
                                        &lt;/<span className='text-[#22863a]'>button</span>&gt; 
                                        <br/>
                                    </code>
                                )
                            })
                        }
                </pre>
            </div>
        </div>
    )
}