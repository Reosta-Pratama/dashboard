"use client"

import React, { useState } from 'react'
import { FiFile } from 'react-icons/fi'
import { TabLink } from './components/box';
import { TabValueLink } from './components/value';

interface CodeLinkTabProps {
    active: boolean;
}

export const CodeLinkTab: React.FC<CodeLinkTabProps> = ({active}) => {

  return (
    <div className="p-5">
        {active == false 
            ? 
            <TabLink
                buttons={[
                    { dataTab: 'example-1', name: 'example - 1' },
                    { dataTab: 'example-2', name: 'example - 2' }
                ]}>
                <TabValueLink dataTab='example-1'>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                    Ipsum has been the industry's standard dummy text ever since the 1500s, when an
                    unknown printer took a galley of type and scrambled it to make a type specimen
                    book. It has survived not only five centuries, but also the leap into electronic
                    typesetting, remaining essentially unchanged. It was popularised in the 1960s
                    with the release of Letraset sheets containing Lorem Ipsum passages, and more
                    recently with desktop publishing software like Aldus PageMaker including
                    versions of Lorem Ipsum.
                </TabValueLink>

                <TabValueLink dataTab='example-2'>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                    Ipsum has been the industry's standard dummy text ever since the 1500s, when an
                    unknown printer took a galley of type and scrambled it to make a type specimen
                    book. It has survived not only five centuries.
                </TabValueLink>
            </TabLink>
            : <Code/>}
    </div>
  )
}

const tabAsString = () => {
    return `
<div class="tab">
    <ul class="flex items-center">
        <li class="flex flex-1">
            <button
                data-tab="example-1"
                type="button"
                class="tab-btn-link w-full px-5 py-2 border-b-2 border-solid border-primary text-slate-800">
                <span class="capitalize font-medium">example - 1</span>
            </button>
        </li>
        <li class="flex flex-1">
            <button
                data-tab="example-2"
                type="button"
                class="tab-btn-link w-full px-5 py-2 border-b-2 border-solid border-transparent">
                <span class="capitalize font-medium">example - 2</span>
            </button>
        </li>
    </ul>
    <div class="pt-5">
        <div
            data-tab="example-1"
            class="tab-content-link opacity-100 leading-[1.625] transition-all duration-300 ease-in-out flex">Lorem
            Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
            has been the industry's standard dummy text ever since the 1500s, when an
            unknown printer took a galley of type and scrambled it to make a type specimen
            book. It has survived not only five centuries, but also the leap into electronic
            typesetting, remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages, and more
            recently with desktop publishing software like Aldus PageMaker including
            versions of Lorem Ipsum.</div>
        <div
            data-tab="example-2"
            class="tab-content-link opacity-100 leading-[1.625] transition-all duration-300 ease-in-out hidden">Lorem
            Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
            has been the industry's standard dummy text ever since the 1500s, when an
            unknown printer took a galley of type and scrambled it to make a type specimen
            book. It has survived not only five centuries.</div>
    </div>
</div>`;};
  

const Code = () => {
    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
        navigator
            .clipboard
            .writeText(tabAsString())
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
<div class="tab">
    <ul class="flex items-center">
        <li class="flex flex-1">
            <button
                data-tab="example-1"
                type="button"
                class="tab-btn-link w-full px-5 py-2 border-b-2 border-solid border-primary text-slate-800">
                <span class="capitalize font-medium">example - 1</span>
            </button>
        </li>
        <li class="flex flex-1">
            <button
                data-tab="example-2"
                type="button"
                class="tab-btn-link w-full px-5 py-2 border-b-2 border-solid border-transparent">
                <span class="capitalize font-medium">example - 2</span>
            </button>
        </li>
    </ul>
    <div class="pt-5">
        <div
            data-tab="example-1"
            class="tab-content-link opacity-100 leading-[1.625] transition-all duration-300 ease-in-out flex">Lorem
            Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
            has been the industry's standard dummy text ever since the 1500s, when an
            unknown printer took a galley of type and scrambled it to make a type specimen
            book. It has survived not only five centuries, but also the leap into electronic
            typesetting, remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages, and more
            recently with desktop publishing software like Aldus PageMaker including
            versions of Lorem Ipsum.</div>
        <div
            data-tab="example-2"
            class="tab-content-link opacity-100 leading-[1.625] transition-all duration-300 ease-in-out hidden">Lorem
            Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
            has been the industry's standard dummy text ever since the 1500s, when an
            unknown printer took a galley of type and scrambled it to make a type specimen
            book. It has survived not only five centuries.</div>
    </div>
</div>
`}
                    </code>
                </pre>
            </div>
        </div>
    )
}