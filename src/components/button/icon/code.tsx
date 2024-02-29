"use client"

import React, { useState } from 'react'
import { FiActivity, FiAirplay, FiAlertCircle, FiAnchor, FiAperture, FiArchive, FiBook, FiFile } from 'react-icons/fi'
import { IconBtnPrimary } from '@/components/button/icon/style/btn-primary';
import { IconBtnSecondary } from '@/components/button/icon/style/btn-secondary';
import { IconBtnSuccess } from '@/components/button/icon/style/btn-success';
import { IconBtnWarning } from '@/components/button/icon/style/btn-warning';
import { IconBtnPending } from '@/components/button/icon/style/btn-pending';
import { IconBtnDanger } from '@/components/button/icon/style/btn-danger';
import { IconBtnDark } from '@/components/button/icon/style/btn-dark';
import { BoxCode } from '../../show-code/style/box';

interface CodeIconBtnProps {
    active: boolean;
}

export const CodeIconBtn: React.FC<CodeIconBtnProps> = ({active}) => {
  return (
    <div className="p-5">
        {active == false 
            ? 
            <ul className='flex flex-wrap gap-2'>
                <li>
                    <IconBtnPrimary
                        title="primary"
                        addType="button">
                            <FiActivity />
                    </IconBtnPrimary> 
                </li>
                <li>
                    <IconBtnSecondary
                        title="Secondary"
                        addType="button">
                            <FiAirplay />
                    </IconBtnSecondary> 
                </li>
                <li>
                    <IconBtnSuccess
                        title="success"
                        addType="button">
                            <FiAlertCircle />
                    </IconBtnSuccess> 
                </li>
                <li>
                    <IconBtnWarning
                        title="Warning"
                        addType="button">
                            <FiAnchor />
                    </IconBtnWarning> 
                </li>
                <li>
                    <IconBtnPending
                        title="Pending"
                        addType="button">
                            <FiAperture />
                    </IconBtnPending> 
                </li>
                <li>
                    <IconBtnDanger
                        title="Danger"
                        addType="button">
                            <FiArchive />
                    </IconBtnDanger> 
                </li>
                <li>
                    <IconBtnDark
                        title="Dark"
                        addType="button">
                            <FiBook />
                    </IconBtnDark> 
                </li>
            </ul>
            : <Code/>}
    </div>
  )
}

const buttons = [
    {
      title: 'Primary',
      icon: <FiActivity />,
      addType: 'button' as const,
      addClass: 'text-white bg-primary hover:bg-primary/90 focus:ring-primary/20'
    },
    {
      title: 'Secondary',
      icon: <FiActivity />,
      addType: 'button' as const,
      addClass: 'text-slate-500 bg-secondary hover:bg-secondary/70 focus:ring-secondary'
    },
    {
      title: 'Success',
      icon: <FiActivity />,
      addType: 'button' as const,
      addClass: 'text-slate-900 bg-success hover:bg-success/90 focus:ring-success/20'
    },
    {
      title: 'Warning',
      icon: <FiActivity />,
      addType: 'button' as const,
      addClass: 'text-slate-900 bg-warning hover:bg-warning/90 focus:ring-warning/20'
    },
    {
      title: 'Pending',
      icon: <FiActivity />,
      addType: 'button' as const,
      addClass: 'text-white bg-pending hover:bg-pending/90 focus:ring-pending/20'
    },
    {
      title: 'Danger',
      icon: <FiActivity />,
      addType: 'button' as const,
      addClass: 'text-white bg-danger hover:bg-danger/90 focus:ring-danger/20'
    },
    {
      title: 'Dark',
      icon: <FiActivity />,
      addType: 'button' as const,
      addClass: 'text-white bg-dark hover:bg-dark/90 focus:ring-dark/20'
    }
];

const buttonsAsString = buttons
  .map((item) => {
    return `<button type="${item.addType}" class="font-medium capitalize w-24 flex justify-center rounded-md shadow-sm px-3 py-2 duration-200 ease-in-out focus:ring-4 ${item.addClass}"> <div className="flex justify-center items-center gap-2">${item.title}</div> </button>
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
                                    &lt;<span className='text-[#22863a]'>div</span> {``}
                                    <span className='text-[#005cc5]'>class</span>="flex justify-center items-center gap-2"&gt;
                                    {item.icon} {item.title} 
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