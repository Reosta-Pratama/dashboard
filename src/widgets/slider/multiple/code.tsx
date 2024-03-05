"use client"

import React, { useState } from 'react'
import { FiFile } from 'react-icons/fi'
import { DummySlider } from '@/dummys/dummy-slider';
import { Slider } from '../single/box';

interface CodeSliderMultipleProps {
    active: boolean;
}

export const CodeSliderMultiple: React.FC<CodeSliderMultipleProps> = ({active}) => {

  return (
    <div className="p-5">
        {active == false 
            ? 
            <Slider
                height={128}
                loop={true}
                arrow={true}
                dots={false}
                center={false}
                spacing={16}
                fade={false}
                viewPhone={1}
                viewTablet={2}
                viewDesktop={3}>
                {
                    DummySlider.map((item, index) => (
                        <div key={index}
                            className="w-full h-full">
                            <h3 className='bg-slate-100 w-full h-full rounded-md
                                flex justify-center items-center 
                                text-2xl font-medium'>{index+1}
                            </h3>
                        </div>
                    ))
                }
            </Slider>
            : <Code/>}
    </div>
  )
}

const sliderAsString = () => {
    return `
<div class="flex flex-col gap-4">
    <div class="relative flex justify-center items-center gap-4">
        <button class="arrow left
    disabled">
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
                <polyline points="15 18 9 12 15 6"></polyline>
            </svg>
        </button>
        <div class="keen-slider">
            <div
                class="keen-slider__slide h-32 transition-opacity ease-in-out"
                style="opacity: 1; min-width: 153.55px; max-width: 153.55px; transform: translate3d(0px, 0px, 0px);">
                <div class="w-full h-full">
                    <h3
                        class="bg-slate-100 w-full h-full rounded-md   flex justify-center items-center    text-2xl font-medium">1</h3>
                </div>
            </div>
            <div
                class="keen-slider__slide h-32 transition-opacity ease-in-out"
                style="opacity: 1; min-width: 153.55px; max-width: 153.55px; transform: translate3d(16px, 0px, 0px);">
                <div class="w-full h-full">
                    <h3
                        class="bg-slate-100 w-full h-full rounded-md   flex justify-center items-center    text-2xl font-medium">2</h3>
                </div>
            </div>
            <div
                class="keen-slider__slide h-32 transition-opacity ease-in-out"
                style="opacity: 1; min-width: 153.55px; max-width: 153.55px; transform: translate3d(32px, 0px, 0px);">
                <div class="w-full h-full">
                    <h3
                        class="bg-slate-100 w-full h-full rounded-md   flex justify-center items-center    text-2xl font-medium">3</h3>
                </div>
            </div>
            <div
                class="keen-slider__slide h-32 transition-opacity ease-in-out"
                style="opacity: 1; min-width: 153.55px; max-width: 153.55px; transform: translate3d(48px, 0px, 0px);">
                <div class="w-full h-full">
                    <h3
                        class="bg-slate-100 w-full h-full rounded-md   flex justify-center items-center    text-2xl font-medium">4</h3>
                </div>
            </div>
            <div
                class="keen-slider__slide h-32 transition-opacity ease-in-out"
                style="opacity: 1; min-width: 153.55px; max-width: 153.55px; transform: translate3d(-953.3px, 0px, 0px);">
                <div class="w-full h-full">
                    <h3
                        class="bg-slate-100 w-full h-full rounded-md   flex justify-center items-center    text-2xl font-medium">5</h3>
                </div>
            </div>
            <div
                class="keen-slider__slide h-32 transition-opacity ease-in-out"
                style="opacity: 1; min-width: 153.55px; max-width: 153.55px; transform: translate3d(-937.3px, 0px, 0px);">
                <div class="w-full h-full">
                    <h3
                        class="bg-slate-100 w-full h-full rounded-md   flex justify-center items-center    text-2xl font-medium">6</h3>
                </div>
            </div>
        </div>
        <button class="arrow right
   ">
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
                <polyline points="9 18 15 12 9 6"></polyline>
            </svg>
        </button>
    </div>
</div>
`;
};
  

const Code = () => {
    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
        navigator
            .clipboard
            .writeText(sliderAsString())
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
<div class="flex flex-col gap-4">
    <div class="relative flex justify-center items-center gap-4">
        <button class="arrow left
disabled">
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
                <polyline points="15 18 9 12 15 6"></polyline>
            </svg>
        </button>
        <div class="keen-slider">
            <div
                class="keen-slider__slide h-32 transition-opacity ease-in-out"
                style="opacity: 1; min-width: 153.55px; max-width: 153.55px; transform: translate3d(0px, 0px, 0px);">
                <div class="w-full h-full">
                    <h3
                        class="bg-slate-100 w-full h-full rounded-md   flex justify-center items-center    text-2xl font-medium">1</h3>
                </div>
            </div>
            <div
                class="keen-slider__slide h-32 transition-opacity ease-in-out"
                style="opacity: 1; min-width: 153.55px; max-width: 153.55px; transform: translate3d(16px, 0px, 0px);">
                <div class="w-full h-full">
                    <h3
                        class="bg-slate-100 w-full h-full rounded-md   flex justify-center items-center    text-2xl font-medium">2</h3>
                </div>
            </div>
            <div
                class="keen-slider__slide h-32 transition-opacity ease-in-out"
                style="opacity: 1; min-width: 153.55px; max-width: 153.55px; transform: translate3d(32px, 0px, 0px);">
                <div class="w-full h-full">
                    <h3
                        class="bg-slate-100 w-full h-full rounded-md   flex justify-center items-center    text-2xl font-medium">3</h3>
                </div>
            </div>
            <div
                class="keen-slider__slide h-32 transition-opacity ease-in-out"
                style="opacity: 1; min-width: 153.55px; max-width: 153.55px; transform: translate3d(48px, 0px, 0px);">
                <div class="w-full h-full">
                    <h3
                        class="bg-slate-100 w-full h-full rounded-md   flex justify-center items-center    text-2xl font-medium">4</h3>
                </div>
            </div>
            <div
                class="keen-slider__slide h-32 transition-opacity ease-in-out"
                style="opacity: 1; min-width: 153.55px; max-width: 153.55px; transform: translate3d(-953.3px, 0px, 0px);">
                <div class="w-full h-full">
                    <h3
                        class="bg-slate-100 w-full h-full rounded-md   flex justify-center items-center    text-2xl font-medium">5</h3>
                </div>
            </div>
            <div
                class="keen-slider__slide h-32 transition-opacity ease-in-out"
                style="opacity: 1; min-width: 153.55px; max-width: 153.55px; transform: translate3d(-937.3px, 0px, 0px);">
                <div class="w-full h-full">
                    <h3
                        class="bg-slate-100 w-full h-full rounded-md   flex justify-center items-center    text-2xl font-medium">6</h3>
                </div>
            </div>
        </div>
        <button class="arrow right
">
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
                <polyline points="9 18 15 12 9 6"></polyline>
            </svg>
        </button>
    </div>
</div>
`}
                    </code>
                </pre>
            </div>
        </div>
    )
}