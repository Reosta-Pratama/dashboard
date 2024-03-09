"use client"

import React, { useState } from 'react'
import { FiFile } from 'react-icons/fi'
import { BtnSmall } from '@/components/button/sizes/style/smallBtn';
import { BtnMedium } from '@/components/button/sizes/style/mediumBtn';
import { BtnLarge } from '@/components/button/sizes/style/largeBtn';
import { BoxCode } from '../../show-code/box';

interface CodeSizeBtnProps {
    active: boolean;
}

export const CodeSizeBtn: React.FC<CodeSizeBtnProps> = ({active}) => {
  return (
    <div className="p-5">
        {active == false 
            ? 
            <div className="flex flex-col gap-5">
                <ul className='flex flex-wrap items-end gap-2'>
                    <li>
                        <BtnSmall
                            title="small"
                            addType="button"
                            addClass='min-w-24 text-white bg-primary hover:bg-primary/90 focus:ring-primary/20'></BtnSmall> 
                    </li>
                    <li>
                        <BtnMedium
                            title="medium"
                            addType="button"
                            addClass='min-w-24 text-white bg-primary hover:bg-primary/90 focus:ring-primary/20'></BtnMedium> 
                    </li>
                    <li>
                        <BtnLarge
                            title="large"
                            addType="button"
                            addClass='min-w-24 text-white bg-primary hover:bg-primary/90 focus:ring-primary/20'></BtnLarge> 
                    </li>
                </ul>
            </div>
            : <Code/>}
    </div>
  )
}

const buttons = [
    {
      title: 'small',
      addType: 'button' as const,
      addClass: 'text-xs text-white bg-primary hover:bg-primary/90 focus:ring-primary/20 px-2 py-1'
    },
    {
      title: 'medium',
      addType: 'button' as const,
      addClass: 'text-white bg-primary hover:bg-primary/90 focus:ring-primary/20 px-3 py-2'
    },
    {
      title: 'large',
      addType: 'button' as const,
      addClass: 'text-lg text-white bg-primary hover:bg-primary/90 focus:ring-primary/20 px-4 py-3'
    }
];

const buttonsAsString = buttons
  .map((item) => {
    return `<button type="${item.addType}" class="font-medium capitalize w-24 flex justify-center rounded-md shadow-sm duration-200 ease-in-out focus:ring-4 ${item.addClass}"> ${item.title}</button>
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