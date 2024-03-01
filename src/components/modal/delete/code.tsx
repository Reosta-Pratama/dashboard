"use client"

import React, { useState } from 'react'
import { FiFile } from 'react-icons/fi'
import { ModalDelete } from './components/box';
import { useModal } from '../toggle';
import { BtnPrimary } from '@/components/button/basic/style/btn-primary';

interface CodeDeleteModalProps {
    active: boolean;
}

export const CodeDeleteModal: React.FC<CodeDeleteModalProps> = ({active}) => {
    const {handleBtnClick} = useModal()
  return (
    <div className="p-5">
        {active == false 
            ? 
            <ModalDelete 
                containerClass='flex justify-center'
                contentClass='w-[460px]'
                deleteLink='/'>
                <BtnPrimary
                    title='show modal'
                    addType='button'
                    func={() => handleBtnClick("deleteModal")}
                    addClass='min-w-24 px-3 py-2'></BtnPrimary>
            </ModalDelete>
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
        data-order="deleteModal"
        class="modal fixed z-50 inset-0 transition-all duration-300 ease-in-out opacity-0 invisible">
        <div class="absolute z-10 inset-0 bg-black/60"></div>
        <div
            class="relative z-20 bg-white min-w-[460px] shadow-md rounded-md p-10 mx-auto transition-all duration-300 ease-in-out w-[460px] mt-0">
            <div class="w-full flex flex-col gap-5">
                <span class="flex justify-center text-6xl text-danger">
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
                        <circle cx="12" cy="12" r="10"></circle>
                        <line x1="15" y1="9" x2="9" y2="15"></line>
                        <line x1="9" y1="9" x2="15" y2="15"></line>
                    </svg>
                </span>
                <div class="flex flex-col gap-2">
                    <h2 class="text-3xl text-center">Are you sure?</h2>
                    <div class="flex flex-col items-center">
                        <p>Do you really want to delete these records?</p>
                        <p>This process cannot be undone.</p>
                    </div>
                </div>
                <div class="flex justify-center items-center gap-2">
                    <button
                        type="button"
                        class="font-medium capitalize
                        flex justify-center rounded-md shadow-sm
                        border border-solid
                        duration-200 ease-in-out focus:ring-4
                        text-slate-500 border-secondary hover:bg-secondary/40 focus:ring-secondary min-w-24 px-3 py-2">cancel</button>
                    <a
                        class="font-medium capitalize
                        flex justify-center rounded-md shadow-sm
                        duration-200 ease-in-out focus:ring-4
                        text-white bg-danger hover:bg-danger/90 focus:ring-danger/20 min-w-24 px-3 py-2"
                        href="/">delete</a>
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
        data-order="deleteModal"
        class="modal fixed z-50 inset-0 transition-all duration-300 ease-in-out opacity-0 invisible">
        <div class="absolute z-10 inset-0 bg-black/60"></div>
        <div
            class="relative z-20 bg-white min-w-[460px] shadow-md rounded-md p-10 mx-auto transition-all duration-300 ease-in-out w-[460px] mt-0">
            <div class="w-full flex flex-col gap-5">
                <span class="flex justify-center text-6xl text-danger">
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
                        <circle cx="12" cy="12" r="10"></circle>
                        <line x1="15" y1="9" x2="9" y2="15"></line>
                        <line x1="9" y1="9" x2="15" y2="15"></line>
                    </svg>
                </span>
                <div class="flex flex-col gap-2">
                    <h2 class="text-3xl text-center">Are you sure?</h2>
                    <div class="flex flex-col items-center">
                        <p>Do you really want to delete these records?</p>
                        <p>This process cannot be undone.</p>
                    </div>
                </div>
                <div class="flex justify-center items-center gap-2">
                    <button
                        type="button"
                        class="font-medium capitalize
                        flex justify-center rounded-md shadow-sm
                        border border-solid
                        duration-200 ease-in-out focus:ring-4
                        text-slate-500 border-secondary hover:bg-secondary/40 focus:ring-secondary min-w-24 px-3 py-2">cancel</button>
                    <a
                        class="font-medium capitalize
                        flex justify-center rounded-md shadow-sm
                        duration-200 ease-in-out focus:ring-4
                        text-white bg-danger hover:bg-danger/90 focus:ring-danger/20 min-w-24 px-3 py-2"
                        href="/">delete</a>
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