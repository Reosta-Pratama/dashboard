"use client"

import React, { useState } from 'react'
import { FiFile } from 'react-icons/fi'
import { ModalBlank } from './components/box';
import { BtnPrimary } from '@/components/button/basic/style/btn-primary';
import { useModal } from '../toggle';
import { ValueModalBlank } from './components/value';

interface CodeBlankModalProps {
    active: boolean;
}

export const CodeBlankModal: React.FC<CodeBlankModalProps> = ({active}) => {
    const {handleBtnClick} = useModal()
  return (
    <div className="p-5">
        {active == false 
            ? 
            <ModalBlank addClass='flex justify-center'>
                <BtnPrimary title='show modal' addType='button' func={() => handleBtnClick("blankModal")}></BtnPrimary>
                <ValueModalBlank addClass='w-[460px]' dataOrder='blankModal'>
                    This is totally awesome blank modal!
                </ValueModalBlank>
            </ModalBlank>
            : <Code/>}
    </div>
  )
}

const modalsAsString = () => {
    return `

  `;
  };
  

const Code = () => {
    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
        navigator
            .clipboard
            .writeText(modalsAsString())
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
                <code className='text-xs'>
{`

`}
                    </code>
                </pre>
            </div>
        </div>
    )
}