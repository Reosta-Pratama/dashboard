"use client"

import React, { useState } from 'react'
import { FiFile } from 'react-icons/fi'
import { useModal } from '../toggle';
import { BtnPrimary } from '@/components/button/basic/style/btn-primary';
import { ModalSuccess } from './components/box';

interface CodeSuccessModalProps {
    active: boolean;
}

export const CodeSuccessModal: React.FC<CodeSuccessModalProps> = ({active}) => {
    const {handleBtnClick} = useModal()
  return (
    <div className="p-5">
        {active == false 
            ? 
            <ModalSuccess 
                containerClass='flex justify-center'
                contentClass='w-[460px]'
                issueLink='/'>
                <BtnPrimary
                    title='show modal'
                    addType='button'
                    func={() => handleBtnClick("successModal")}
                    addClass='min-w-24 px-3 py-2'></BtnPrimary>
            </ModalSuccess>
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
        data-order="successModal"
        class="modal fixed z-50 inset-0 transition-all duration-300 ease-in-out opacity-0 invisible">
        <div class="absolute z-10 inset-0 bg-black/60"></div>
        <div
            class="relative z-20 bg-white min-w-[460px] shadow-md rounded-md mx-auto p-10 transition-all duration-300 ease-in-out w-[460px] mt-0">
            <div class="w-full flex flex-col gap-5">
                <span class="flex justify-center text-6xl text-success">
                    <svg
                        stroke="currentColor"
                        fill="none"
                        stroke-width="2"
                        viewBox="0 0 24 24"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg">
                        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                        <polyline points="22 4 12 14.01 9 11.01"></polyline>
                    </svg>
                </span>
                <div class="flex flex-col gap-2">
                    <h2 class="text-3xl text-center">Good job!</h2>
                    <div class="flex flex-col items-center">
                        <p>
                            You clicked the button!
                        </p>
                    </div>
                </div>
                <div class="flex justify-center">
                    <button
                        type="button"
                        class="font-medium capitalize
                        flex justify-center rounded-md shadow-sm
                        duration-200 ease-in-out focus:ring-4
                        text-white bg-primary hover:bg-primary/90 focus:ring-primary/20 min-w-24 px-3 py-2">ok</button>
                </div>
            </div>
        </div>
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
        data-order="successModal"
        class="modal fixed z-50 inset-0 transition-all duration-300 ease-in-out opacity-0 invisible">
        <div class="absolute z-10 inset-0 bg-black/60"></div>
        <div
            class="relative z-20 bg-white min-w-[460px] shadow-md rounded-md mx-auto p-10 transition-all duration-300 ease-in-out w-[460px] mt-0">
            <div class="w-full flex flex-col gap-5">
                <span class="flex justify-center text-6xl text-success">
                    <svg
                        stroke="currentColor"
                        fill="none"
                        stroke-width="2"
                        viewBox="0 0 24 24"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg">
                        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                        <polyline points="22 4 12 14.01 9 11.01"></polyline>
                    </svg>
                </span>
                <div class="flex flex-col gap-2">
                    <h2 class="text-3xl text-center">Good job!</h2>
                    <div class="flex flex-col items-center">
                        <p>
                            You clicked the button!
                        </p>
                    </div>
                </div>
                <div class="flex justify-center">
                    <button
                        type="button"
                        class="font-medium capitalize
                        flex justify-center rounded-md shadow-sm
                        duration-200 ease-in-out focus:ring-4
                        text-white bg-primary hover:bg-primary/90 focus:ring-primary/20 min-w-24 px-3 py-2">ok</button>
                </div>
            </div>
        </div>
    </div>
</div>
`}
                    </code>
                </pre>
            </div>
        </div>
    )
}