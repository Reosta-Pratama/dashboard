"use client"

import React, { useState } from 'react'
import { FiFile } from 'react-icons/fi'
import { SlideOver } from './components/box';
import { BtnPrimary } from '@/components/button/basic/style/btn-primary';
import { ValueSlideOver } from './components/value';
import useSlideOver from '../toggle';

interface CodeBlankSlideProps {
    active: boolean;
}

export const CodeBlankSlide: React.FC<CodeBlankSlideProps> = ({active}) => {
    const {handleBtnClick} = useSlideOver()

  return (
    <div className="p-5">
        {active == false 
            ? 
            <SlideOver addClass='flex justify-center'>
                <BtnPrimary
                    title='show slide over'
                    addType='button'
                    addClass='min-w-24 px-3 py-2'
                    func={() => handleBtnClick("slideOver")}></BtnPrimary>
                <ValueSlideOver widthSlide={30} dataOrder='slideOver'>
                    This is totally awesome blank slide over!
                </ValueSlideOver>
            </SlideOver>
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
        data-order="slideOver"
        class="slideover fixed z-50 inset-0 w-full h-screen flex justify-end opacity-0 invisible transition-all duration-500 ease-in-out">
        <div class="absolute -z-[1] inset-0 w-full h-full bg-black/60 cursor-pointer"></div>
        <div
            class="bg-white h-full shadow-md p-5 translate-x-60 transition-all duration-300 ease-linear"
            style="width: 30%;">This is totally awesome blank slide over!</div>
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
        data-order="slideOver"
        class="slideover fixed z-50 inset-0 w-full h-screen flex justify-end opacity-0 invisible transition-all duration-500 ease-in-out">
        <div class="absolute -z-[1] inset-0 w-full h-full bg-black/60 cursor-pointer"></div>
        <div
            class="bg-white h-full shadow-md p-5 translate-x-60 transition-all duration-300 ease-linear"
            style="width: 30%;">This is totally awesome blank slide over!</div>
    </div>
</div>
`}
                    </code>
                </pre>
            </div>
        </div>
    )
}