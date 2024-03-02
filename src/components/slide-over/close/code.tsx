"use client"

import React, { useState } from 'react'
import { FiFile } from 'react-icons/fi'
import useSlideOver from '../toggle';
import { SlideOverClose } from './components/box';
import { BtnPrimary } from '@/components/button/basic/style/btn-primary';
import { ValueSlideOverClose } from './components/value';

interface CodeCloseSlideProps {
    active: boolean;
}

export const CodeCloseSlide: React.FC<CodeCloseSlideProps> = ({active}) => {
    const {handleBtnClick} = useSlideOver()

  return (
    <div className="p-5">
        {active == false 
            ? 
                <SlideOverClose addClass='flex justify-center'>
                    <BtnPrimary
                        title='show slide over'
                        addType='button'
                        addClass='min-w-24 px-3 py-2'
                        func={() => handleBtnClick("slideOverClose")}></BtnPrimary>
                    <ValueSlideOverClose widthSlide={30} dataOrder='slideOverClose'>This is totally awesome slide over with close button!</ValueSlideOverClose>
                </SlideOverClose>
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
        text-white bg-primary hover:bg-primary/90 focus:ring-primary/20 min-w-24 px-3 py-2">show slide over</button>
    <div
        data-order="slideOverClose"
        class="slideover fixed z-50 inset-0 w-full h-screen flex justify-end transition-all duration-500 ease-in-out opacity-0 invisible">
        <div class="absolute -z-[1] inset-0 w-full h-full bg-black/60 cursor-pointer"></div>
        <div
            class="relative bg-white h-full shadow-md p-5 transition-all duration-300 ease-linear translate-x-60"
            style="width: 30%;">
            <div class="absolute top-4 -left-12">
                <button type="button" class="text-3xl text-slate-400 hover:animate-ping">
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
                        <line x1="18" y1="6" x2="6" y2="18"></line>
                        <line x1="6" y1="6" x2="18" y2="18"></line>
                    </svg>
                </button>
            </div>This is totally awesome slide over with close button!</div>
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
        text-white bg-primary hover:bg-primary/90 focus:ring-primary/20 min-w-24 px-3 py-2">show slide over</button>
    <div
        data-order="slideOverClose"
        class="slideover fixed z-50 inset-0 w-full h-screen flex justify-end transition-all duration-500 ease-in-out opacity-0 invisible">
        <div class="absolute -z-[1] inset-0 w-full h-full bg-black/60 cursor-pointer"></div>
        <div
            class="relative bg-white h-full shadow-md p-5 transition-all duration-300 ease-linear translate-x-60"
            style="width: 30%;">
            <div class="absolute top-4 -left-12">
                <button type="button" class="text-3xl text-slate-400 hover:animate-ping">
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
                        <line x1="18" y1="6" x2="6" y2="18"></line>
                        <line x1="6" y1="6" x2="18" y2="18"></line>
                    </svg>
                </button>
            </div>This is totally awesome slide over with close button!</div>
    </div>
</div>
`}
                    </code>
                </pre>
            </div>
        </div>
    )
}