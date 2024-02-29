"use client"

import React, { useState } from 'react'
import { FiActivity, FiAirplay, FiAlertCircle, FiAnchor, FiAperture, FiArchive, FiBook, FiFile } from 'react-icons/fi'
import { OnlyIconBtnPrimary } from '@/components/button/only-icon/style/btn-primary';
import { OnlyIconBtnSecondary } from '@/components/button/only-icon/style/btn-secondary';
import { OnlyIconBtnSuccess } from '@/components/button/only-icon/style/btn-success';
import { OnlyIconBtnWarning } from '@/components/button/only-icon/style/btn-warning';
import { OnlyIconBtnPending } from '@/components/button/only-icon/style/btn-pending';
import { OnlyIconBtnDanger } from '@/components/button/only-icon/style/btn-danger';
import { OnlyIconBtnDark } from '@/components/button/only-icon/style/btn-dark';
import { BoxCode } from '../../show-code/box';

interface CodeOnlyIconBtnProps {
    active: boolean;
}

export const CodeOnlyIconBtn: React.FC<CodeOnlyIconBtnProps> = ({active}) => {
  return (
    <div className="p-5">
        {active == false 
            ? 
            <ul className='flex flex-wrap gap-2'>
                <li>
                    <OnlyIconBtnPrimary
                        addType="button"
                        addClass="px-3 py-2">
                            <FiActivity />
                    </OnlyIconBtnPrimary> 
                </li>
                <li>
                    <OnlyIconBtnSecondary
                        addType="button"
                        addClass="px-3 py-2">
                            <FiAirplay />
                    </OnlyIconBtnSecondary> 
                </li>
                <li>
                    <OnlyIconBtnSuccess
                        addType="button"
                        addClass="px-3 py-2">
                            <FiAlertCircle />
                    </OnlyIconBtnSuccess> 
                </li>
                <li>
                    <OnlyIconBtnWarning
                        addType="button"
                        addClass="px-3 py-2">
                            <FiAnchor />
                    </OnlyIconBtnWarning> 
                </li>
                <li>
                    <OnlyIconBtnPending
                        addType="button"
                        addClass="px-3 py-2">
                            <FiAperture />
                    </OnlyIconBtnPending> 
                </li>
                <li>
                    <OnlyIconBtnDanger
                        addType="button"
                        addClass="px-3 py-2">
                            <FiArchive />
                    </OnlyIconBtnDanger> 
                </li>
                <li>
                    <OnlyIconBtnDark
                        addType="button"
                        addClass="px-3 py-2">
                            <FiBook />
                    </OnlyIconBtnDark> 
                </li>
            </ul>
            : <Code/>}
    </div>
  )
}

const buttons = [
    {
      icon: <FiActivity />,
      addType: 'button' as const,
      addClass: 'text-white bg-primary hover:bg-primary/90 focus:ring-primary/20'
    },
    {
      icon: <FiActivity />,
      addType: 'button' as const,
      addClass: 'text-slate-500 bg-secondary hover:bg-secondary/70 focus:ring-secondary'
    },
    {
      icon: <FiActivity />,
      addType: 'button' as const,
      addClass: 'text-slate-900 bg-success hover:bg-success/90 focus:ring-success/20'
    },
    {
      icon: <FiActivity />,
      addType: 'button' as const,
      addClass: 'text-slate-900 bg-warning hover:bg-warning/90 focus:ring-warning/20'
    },
    {
      icon: <FiActivity />,
      addType: 'button' as const,
      addClass: 'text-white bg-pending hover:bg-pending/90 focus:ring-pending/20'
    },
    {
      icon: <FiActivity />,
      addType: 'button' as const,
      addClass: 'text-white bg-danger hover:bg-danger/90 focus:ring-danger/20'
    },
    {
      icon: <FiActivity />,
      addType: 'button' as const,
      addClass: 'text-white bg-dark hover:bg-dark/90 focus:ring-dark/20'
    }
];

const buttonsAsString = buttons
  .map((item) => {
    return `<button type="${item.addType}" class="text-xl font-medium capitalize flex justify-center rounded-md shadow-sm px-3 py-2 duration-200 ease-in-out focus:ring-4 ${item.addClass}"> <div className="flex justify-center items-center gap-2">${item.icon}</div> </button>
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
                                    <span className='text-[#005cc5]'>class</span>{`="text-xl font-medium capitalize flex justify-center rounded-md shadow-sm px-3 py-2 duration-200 ease-in-out focus:ring-4 ${item.addClass}"`}&gt; 
                                    &lt;<span className='text-[#22863a]'>div</span> {``}
                                    <span className='text-[#005cc5]'>class</span>="flex justify-center items-center gap-2"&gt;
                                    {item.icon}  
                                    &lt;<span className='text-[#22863a]'>/div</span>&gt; 
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