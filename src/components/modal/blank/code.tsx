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
                <BtnPrimary
                    title='show modal'
                    addType='button'
                    func={() => handleBtnClick("blankModal")}
                    addClass='min-w-24 px-3 py-2'></BtnPrimary>
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
<div class="flex justify-center w-full">
    <button
        type="button"
        class="font-medium capitalize
            flex justify-center rounded-md shadow-sm
            duration-200 ease-in-out focus:ring-4
            text-white bg-primary hover:bg-primary/90 focus:ring-primary/20 min-w-24 px-3 py-2">show modal</button>
    <div
        data-order="blankModal"
        class="modal fixed z-50 inset-0 transition-all duration-300 ease-in-out opacity-0 invisible">
        <div class="absolute z-10 inset-0 bg-black/60"></div>
        <div
            class="relative z-20 bg-white min-w-[460px] shadow-md rounded-md p-10 mx-auto transition-all duration-300 ease-in-out w-[460px] mt-0">This is totally awesome blank modal!</div>
    </div>
</div>
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
<div class="flex justify-center w-full">
    <button
        type="button"
        class="font-medium capitalize
            flex justify-center rounded-md shadow-sm
            duration-200 ease-in-out focus:ring-4
            text-white bg-primary hover:bg-primary/90 focus:ring-primary/20 min-w-24 px-3 py-2">show modal</button>
    <div
        data-order="blankModal"
        class="modal fixed z-50 inset-0 transition-all duration-300 ease-in-out opacity-0 invisible">
        <div class="absolute z-10 inset-0 bg-black/60"></div>
        <div
            class="relative z-20 bg-white min-w-[460px] shadow-md rounded-md p-10 mx-auto transition-all duration-300 ease-in-out w-[460px] mt-0">This is totally awesome blank modal!</div>
    </div>
</div>
`}
                    </code>
                </pre>
            </div>
        </div>
    )
}