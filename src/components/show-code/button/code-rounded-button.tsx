"use client"

import React, { useState } from 'react'
import { FiFile } from 'react-icons/fi'
import { RoundedBtnPrimary } from '@/components/button/rounded/rounded-btn-primary';
import { RoundedBtnSecondary } from '@/components/button/rounded/rounded-btn-secondary';
import { RoundedBtnSuccess } from '@/components/button/rounded/rounded-btn-success';
import { RoundedBtnWarning } from '@/components/button/rounded/rounded-btn-warning';
import { RoundedBtnPending } from '@/components/button/rounded/rounded-btn-pending';
import { RoundedBtnDanger } from '@/components/button/rounded/rounded-btn-danger';
import { RoundedBtnDark } from '@/components/button/rounded/rounded-btn-dark';
import { BoxCode } from '../style/box';

interface CodeRoundedBtnProps {
    active: boolean;
}

export const CodeRoundedBtn: React.FC<CodeRoundedBtnProps> = ({active}) => {
  return (
    <div className="p-5">
        {active == false 
            ? 
            <ul className='flex flex-wrap gap-2'>
                <li>
                    <RoundedBtnPrimary
                        title="primary"
                        addType="button"></RoundedBtnPrimary> 
                </li>
                <li>
                    <RoundedBtnSecondary
                        title="Secondary"
                        addType="button"></RoundedBtnSecondary> 
                </li>
                <li>
                    <RoundedBtnSuccess
                        title="success"
                        addType="button"></RoundedBtnSuccess> 
                </li>
                <li>
                    <RoundedBtnWarning
                        title="Warning"
                        addType="button"></RoundedBtnWarning> 
                </li>
                <li>
                    <RoundedBtnPending
                        title="Pending"
                        addType="button"></RoundedBtnPending> 
                </li>
                <li>
                    <RoundedBtnDanger
                        title="Danger"
                        addType="button"></RoundedBtnDanger> 
                </li>
                <li>
                    <RoundedBtnDark
                        title="Dark"
                        addType="button"></RoundedBtnDark> 
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

            <BoxCode>
                <pre className='px-5 py-4'>
                    {
                        buttons.map((item, index) => {
                            return (
                                <code key={index} className='text-xs'>
                                    &lt;<span className='text-[#22863a]'>button</span> {``}
                                    <span className='text-[#005cc5]'>type</span>{`="${item.addType}" `}
                                    <span className='text-[#005cc5]'>class</span>{`="font-medium capitalize w-24 flex justify-center rounded-full shadow-sm px-3 py-2 duration-200 ease-in-out focus:ring-4 ${item.addClass}"`}&gt; 
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