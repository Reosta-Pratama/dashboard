"use client"

import React, { useState } from 'react'
import { FiFile } from 'react-icons/fi'
import { DummySlider } from '@/dummys/dummy-slider';
import { Slider } from '../single/box';
import Image from 'next/legacy/image';

interface CodeSliderFadeProps {
    active: boolean;
}

export const CodeSliderFade: React.FC<CodeSliderFadeProps> = ({active}) => {

  return (
    <div className="p-5">
        {active == false 
            ? 
            <Slider
                height={0}
                loop={true}
                arrow={true}
                dots={true}
                center={false}
                spacing={16}
                fade={true}
                viewPhone={1}
                viewTablet={2}
                viewDesktop={1}>
                {
                    DummySlider.map((item, index) => (
                        <div key={index}
                            className="w-full h-full rounded-md overflow-hidden">
                            <Image
                                src={item.image}
                                alt={`Image slider-${index}`}
                                priority={true}
                                width={100} 
                                height={60} 
                                layout="responsive" 
                                objectFit="cover"
                                objectPosition="center">
                            </Image>
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
                class="keen-slider__slide transition-opacity ease-in"
                style="height: 256px; opacity: 1; min-width: 492.65px; max-width: 492.65px; transform: translate3d(0px, 0px, 0px);">
                <div class="w-full h-full">
                    <img
                        src="https://source.unsplash.com/800x600/?mountain"
                        alt="Image slider-0"
                        class="w-full h-full object-cover object-center rounded-md"></div>
                </div>
                <div
                    class="keen-slider__slide transition-opacity ease-in"
                    style="height: 256px; opacity: 0; min-width: 492.65px; max-width: 492.65px; transform: translate3d(16px, 0px, 0px);">
                    <div class="w-full h-full">
                        <img
                            src="https://source.unsplash.com/800x600/?beach,sunset"
                            alt="Image slider-1"
                            class="w-full h-full object-cover object-center rounded-md"></div>
                    </div>
                    <div
                        class="keen-slider__slide transition-opacity ease-in"
                        style="height: 256px; opacity: 0; min-width: 492.65px; max-width: 492.65px; transform: translate3d(32px, 0px, 0px);">
                        <div class="w-full h-full">
                            <img
                                src="https://source.unsplash.com/800x600/?city,lights"
                                alt="Image slider-2"
                                class="w-full h-full object-cover object-center rounded-md"></div>
                        </div>
                        <div
                            class="keen-slider__slide transition-opacity ease-in"
                            style="height: 256px; opacity: 0; min-width: 492.65px; max-width: 492.65px; transform: translate3d(48px, 0px, 0px);">
                            <div class="w-full h-full">
                                <img
                                    src="https://source.unsplash.com/800x600/?nature,green"
                                    alt="Image slider-3"
                                    class="w-full h-full object-cover object-center rounded-md"></div>
                            </div>
                            <div
                                class="keen-slider__slide transition-opacity ease-in"
                                style="height: 256px; opacity: 0; min-width: 492.65px; max-width: 492.65px; transform: translate3d(64px, 0px, 0px);">
                                <div class="w-full h-full">
                                    <img
                                        src="https://source.unsplash.com/800x600/?ocean,waves"
                                        alt="Image slider-4"
                                        class="w-full h-full object-cover object-center rounded-md"></div>
                                </div>
                                <div
                                    class="keen-slider__slide transition-opacity ease-in"
                                    style="height: 256px; opacity: 0; min-width: 492.65px; max-width: 492.65px; transform: translate3d(80px, 0px, 0px);">
                                    <div class="w-full h-full">
                                        <img
                                            src="https://source.unsplash.com/800x600/?forest,path"
                                            alt="Image slider-5"
                                            class="w-full h-full object-cover object-center rounded-md"></div>
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
                            <div class="dots flex flex-nowrap justify-center items-center gap-2">
                                <button class="dot active"></button>
                                <button class="dot"></button>
                                <button class="dot"></button>
                                <button class="dot"></button>
                                <button class="dot"></button>
                                <button class="dot"></button>
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
                class="keen-slider__slide transition-opacity ease-in"
                style="height: 256px; opacity: 1; min-width: 492.65px; max-width: 492.65px; transform: translate3d(0px, 0px, 0px);">
                <div class="w-full h-full">
                    <img
                        src="https://source.unsplash.com/800x600/?mountain"
                        alt="Image slider-0"
                        class="w-full h-full object-cover object-center rounded-md"></div>
                </div>
                <div
                    class="keen-slider__slide transition-opacity ease-in"
                    style="height: 256px; opacity: 0; min-width: 492.65px; max-width: 492.65px; transform: translate3d(16px, 0px, 0px);">
                    <div class="w-full h-full">
                        <img
                            src="https://source.unsplash.com/800x600/?beach,sunset"
                            alt="Image slider-1"
                            class="w-full h-full object-cover object-center rounded-md"></div>
                    </div>
                    <div
                        class="keen-slider__slide transition-opacity ease-in"
                        style="height: 256px; opacity: 0; min-width: 492.65px; max-width: 492.65px; transform: translate3d(32px, 0px, 0px);">
                        <div class="w-full h-full">
                            <img
                                src="https://source.unsplash.com/800x600/?city,lights"
                                alt="Image slider-2"
                                class="w-full h-full object-cover object-center rounded-md"></div>
                        </div>
                        <div
                            class="keen-slider__slide transition-opacity ease-in"
                            style="height: 256px; opacity: 0; min-width: 492.65px; max-width: 492.65px; transform: translate3d(48px, 0px, 0px);">
                            <div class="w-full h-full">
                                <img
                                    src="https://source.unsplash.com/800x600/?nature,green"
                                    alt="Image slider-3"
                                    class="w-full h-full object-cover object-center rounded-md"></div>
                            </div>
                            <div
                                class="keen-slider__slide transition-opacity ease-in"
                                style="height: 256px; opacity: 0; min-width: 492.65px; max-width: 492.65px; transform: translate3d(64px, 0px, 0px);">
                                <div class="w-full h-full">
                                    <img
                                        src="https://source.unsplash.com/800x600/?ocean,waves"
                                        alt="Image slider-4"
                                        class="w-full h-full object-cover object-center rounded-md"></div>
                                </div>
                                <div
                                    class="keen-slider__slide transition-opacity ease-in"
                                    style="height: 256px; opacity: 0; min-width: 492.65px; max-width: 492.65px; transform: translate3d(80px, 0px, 0px);">
                                    <div class="w-full h-full">
                                        <img
                                            src="https://source.unsplash.com/800x600/?forest,path"
                                            alt="Image slider-5"
                                            class="w-full h-full object-cover object-center rounded-md"></div>
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
                            <div class="dots flex flex-nowrap justify-center items-center gap-2">
                                <button class="dot active"></button>
                                <button class="dot"></button>
                                <button class="dot"></button>
                                <button class="dot"></button>
                                <button class="dot"></button>
                                <button class="dot"></button>
                            </div>
                        </div>
`}
                    </code>
                </pre>
            </div>
        </div>
    )
}