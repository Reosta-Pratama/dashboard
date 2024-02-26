"use client"

import React, { useState } from 'react'
import { FiFile } from 'react-icons/fi'
import { LinkBtnPrimary } from '@/components/button/link/btn-primary';
import { LinkBtnSecondary } from '@/components/button/link/btn-secondary';
import { LinkBtnSuccess } from '@/components/button/link/btn-success';
import { LinkBtnWarning } from '@/components/button/link/btn-warning';
import { LinkBtnPending } from '@/components/button/link/btn-pending';
import { LinkBtnDanger } from '@/components/button/link/btn-danger';
import { LinkBtnDark } from '@/components/button/link/btn-dark';
import { BoxCode } from '../style/box';

interface CodeLinkBtnProps {
    active: boolean;
}

export const CodeLinkBtn: React.FC<CodeLinkBtnProps> = ({active}) => {
  return (
    <div className="p-5">
        {active == false 
            ? 
            <ul className='flex flex-wrap gap-2'>
                <li>
                    <LinkBtnPrimary
                        title="link"
                        href=""></LinkBtnPrimary> 
                </li>
                <li>
                    <LinkBtnSecondary
                        title="button"
                        href=""></LinkBtnSecondary> 
                </li>
                <li>
                    <LinkBtnSuccess
                        title="input"
                        href=""></LinkBtnSuccess> 
                </li>
                <li>
                    <LinkBtnWarning
                        title="submit"
                        href=""></LinkBtnWarning> 
                </li>
                <li>
                    <LinkBtnPending
                        title="Pending"
                        href=""></LinkBtnPending> 
                </li>
                <li>
                    <LinkBtnDanger
                        title="reset"
                        href=""></LinkBtnDanger> 
                </li>
                <li>
                    <LinkBtnDark
                        title="metal"
                        href=""></LinkBtnDark> 
                </li>
            </ul>
            : <Code/>}
    </div>
  )
}

const buttons = [
    {
      title: 'Primary',
      href: '/#',
      addClass: 'text-white bg-primary hover:bg-primary/90 focus:ring-primary/20'
    },
    {
      title: 'Secondary',
      href: '/#',
      addClass: 'text-slate-500 bg-secondary hover:bg-secondary/70 focus:ring-secondary'
    },
    {
      title: 'Success',
      href: '/#',
      addClass: 'text-slate-900 bg-success hover:bg-success/90 focus:ring-success/20'
    },
    {
      title: 'Warning',
      href: '/#',
      addClass: 'text-slate-900 bg-warning hover:bg-warning/90 focus:ring-warning/20'
    },
    {
      title: 'Pending',
      href: '/#',
      addClass: 'text-white bg-pending hover:bg-pending/90 focus:ring-pending/20'
    },
    {
      title: 'Danger',
      href: '/#',
      addClass: 'text-white bg-danger hover:bg-danger/90 focus:ring-danger/20'
    },
    {
      title: 'Dark',
      href: '/#',
      addClass: 'text-white bg-dark hover:bg-dark/90 focus:ring-dark/20'
    }
];

const buttonsAsString = buttons
  .map((item) => {
    return `<a href="${item.href}" class="font-medium capitalize w-24 flex justify-center rounded-md shadow-sm px-3 py-2 duration-200 ease-in-out focus:ring-4 ${item.addClass}"> ${item.title}</a>
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
                                &lt;<span className='text-[#22863a]'>a</span> {``}
                                <span className='text-[#005cc5]'>href</span>{`="${item.href}" `}
                                <span className='text-[#005cc5]'>class</span>{`="font-medium capitalize w-24 flex justify-center rounded-md shadow-sm px-3 py-2 duration-200 ease-in-out focus:ring-4 ${item.addClass}"`}&gt; 
                                {` ${item.title} `}
                                &lt;/<span className='text-[#22863a]'>a</span>&gt; 
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