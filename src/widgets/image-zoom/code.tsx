"use client"

import React, { useState } from 'react'
import { FiFile } from 'react-icons/fi'
import { DummySlider } from '@/dummys/dummy-slider';
import { ImageZoom } from './box';

interface CodeImageZoomProps {
    active: boolean;
}

export const CodeImageZoom: React.FC<CodeImageZoomProps> = ({active}) => {

  return (
    <div className="p-5">
        {active == false 
            ? 
            <ImageZoom 
                img='https://source.unsplash.com/800x600/?mountain'
                height={256}>
            </ImageZoom>
            : <Code/>}
    </div>
  )
}

const imageAsString = () => {
    return `
<div class="p-5">
    <div
        class="w-full cursor-pointer duration-300 ease-in-out false"
        style="height:256px">
        <img
            src="https://source.unsplash.com/800x600/?mountain"
            alt="Image zoom https://source.unsplash.com/800x600/?mountain"
            loading="lazy"
            class="w-full h-full object-cover object-center rounded-md"></div>
        <div
            class="fixed inset-0 w-full h-full
    transition-all duration-300 ease-in-out
    invisible opacity-0">
            <div class="absolute -z-[1] inset-0 w-full h-full bg-black/60"></div>
            <div class="absolute z-[1] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <img
                    src="https://source.unsplash.com/800x600/?mountain"
                    alt="Image zoom https://source.unsplash.com/800x600/?mountain"
                    loading="lazy"
                    class="w-[545px] h-[400px] object-cover object-center"></div>
            </div>
        </div>
`;
};
  

const Code = () => {
    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
        navigator
            .clipboard
            .writeText(imageAsString())
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
<div class="p-5">
    <div
        class="w-full cursor-pointer duration-300 ease-in-out false"
        style="height:256px">
        <img
            src="https://source.unsplash.com/800x600/?mountain"
            alt="Image zoom https://source.unsplash.com/800x600/?mountain"
            loading="lazy"
            class="w-full h-full object-cover object-center rounded-md"></div>
        <div
            class="fixed inset-0 w-full h-full
transition-all duration-300 ease-in-out
invisible opacity-0">
            <div class="absolute -z-[1] inset-0 w-full h-full bg-black/60"></div>
            <div class="absolute z-[1] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <img
                    src="https://source.unsplash.com/800x600/?mountain"
                    alt="Image zoom https://source.unsplash.com/800x600/?mountain"
                    loading="lazy"
                    class="w-[545px] h-[400px] object-cover object-center"></div>
            </div>
        </div>
`}
                    </code>
                </pre>
            </div>
        </div>
    )
}