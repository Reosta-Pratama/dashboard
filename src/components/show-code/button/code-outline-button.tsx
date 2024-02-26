"use client"

import React, { useState } from 'react'
import { FiFile } from 'react-icons/fi'
import { OutlineBtnPrimary } from '../../button/outline/outline-btn-primary';
import { OutlineBtnSecondary } from '../../button/outline/outline-btn-secondary';
import { OutlineBtnSuccess } from '../../button/outline/outline-btn-success';
import { OutlineBtnWarning } from '../../button/outline/outline-btn-warning';
import { OutlineBtnPending } from '../../button/outline/outline-btn-pending';
import { OutlineBtnDanger } from '../../button/outline/outline-btn-danger';
import { OutlineBtnDark } from '../../button/outline/outline-btn-dark';
import { BoxCode } from '../style/box';

interface CodeOutlineBtnProps {
    active: boolean;
}

export const CodeOutlineBtn: React.FC<CodeOutlineBtnProps> = ({active}) => {
  return (
    <div className="p-5">
        {active == false 
            ? 
            <ul className='flex flex-wrap gap-2'>
                <li>
                    <OutlineBtnPrimary
                        title="primary"
                        addType="button"></OutlineBtnPrimary> 
                </li>
                <li>
                    <OutlineBtnSecondary
                        title="Secondary"
                        addType="button"></OutlineBtnSecondary> 
                </li>
                <li>
                    <OutlineBtnSuccess
                        title="success"
                        addType="button"></OutlineBtnSuccess> 
                </li>
                <li>
                    <OutlineBtnWarning
                        title="Warning"
                        addType="button"></OutlineBtnWarning> 
                </li>
                <li>
                    <OutlineBtnPending
                        title="Pending"
                        addType="button"></OutlineBtnPending> 
                </li>
                <li>
                    <OutlineBtnDanger
                        title="Danger"
                        addType="button"></OutlineBtnDanger> 
                </li>
                <li>
                    <OutlineBtnDark
                        title="Dark"
                        addType="button"></OutlineBtnDark> 
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
      addClass: 'text-primary border-primary hover:bg-primary/10 focus:ring-primary/20'
    },
    {
      title: 'Secondary',
      addType: 'button' as const,
      addClass: 'text-slate-500 border-secondary hover:bg-secondary/40 focus:ring-secondary'
    },
    {
      title: 'Success',
      addType: 'button' as const,
      addClass: 'text-success border-success hover:bg-success/10 focus:ring-success/20'
    },
    {
      title: 'Warning',
      addType: 'button' as const,
      addClass: 'text-warning border-warning hover:bg-warning/10 focus:ring-warning/20'
    },
    {
      title: 'Pending',
      addType: 'button' as const,
      addClass: 'text-pending border-pending hover:bg-pending/10 focus:ring-pending/20'
    },
    {
      title: 'Danger',
      addType: 'button' as const,
      addClass: 'text-danger border-danger hover:bg-danger/10 focus:ring-danger/20'
    },
    {
      title: 'Dark',
      addType: 'button' as const,
      addClass: 'text-dark border-dark hover:bg-dark/10 focus:ring-dark/20'
    }
];

const buttonsAsString = buttons
  .map((item) => {
    return `<button type="${item.addType}" class="font-medium capitalize w-24 flex justify-center rounded-md shadow-sm px-3 py-2 border border-solid duration-200 ease-in-out focus:ring-4 ${item.addClass}"> ${item.title}</button>
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