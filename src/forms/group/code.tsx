"use client"

import React, { useState } from 'react'
import { FiAtSign, FiFile } from 'react-icons/fi'
import { Input } from '../regular-form/components/input';

interface CodeFormGroupProps {
    active: boolean;
}

export const CodeFormGroup: React.FC<CodeFormGroupProps> = ({active}) => {

  return (
    <div className="p-5">
        {active == false 
            ? 
            <div className='flex flex-col gap-3'>
                <Input
                    id='group-email'
                    title='Email'
                    type='email'
                    label={false}
                    placeholder='Email'
                    readonly={false}
                    shape='square'
                    sizing='medium'
                    layout='vertical'
                    icon='left'
                    iconValue="@">
                </Input>

                <Input
                    id='group-password'
                    title='Password'
                    type='password'
                    label={false}
                    placeholder='Password'
                    readonly={false}
                    shape='square'
                    sizing='medium'
                    layout='vertical'
                    icon='right'
                    iconValue=".00">
                </Input>

                <Input
                    id='group-price'
                    title='Price'
                    type='number'
                    label={false}
                    placeholder='Price'
                    readonly={false}
                    shape='square'
                    sizing='medium'
                    layout='vertical'
                    icon='multiple'
                    iconValue={["@", ".00"]}>
                </Input>
            </div>
            : <Code/>}
    </div>
  )
}

const formAsString = () => {
    return `
<div class="flex flex-col gap-3">
    <div class="flex flex-col gap-2">
        <div class="flex gap-2 flex-col">
            <div class="flex flex-1">
                <div
                    class="bg-slate-100 flex justify-center items-center
                    text-slate-800 select-none px-3 py-2
                    border border-solid border-slate-200
                    border-r-0 rounded-l-md">@</div>
                <input
                    id="group-email"
                    type="email"
                    placeholder="Email"
                    class="
                    flex flex-1 shadow-sm px-3 py-2
                    border border-solid border-slate-200
                    transition-all duration-200 ease-in-out
                    focus-visible:outline-none focus:ring-4 focus:ring-primary/20
                    rounded-md
                    text-sm
                    rounded-l-none
"
                    name="group-email"></div>
            </div>
        </div>
        <div class="flex flex-col gap-2">
            <div class="flex gap-2 flex-col">
                <div class="flex flex-1">
                    <input
                        id="group-password"
                        type="password"
                        placeholder="Password"
                        class="
                    flex flex-1 shadow-sm px-3 py-2
                    border border-solid border-slate-200
                    transition-all duration-200 ease-in-out
                    focus-visible:outline-none focus:ring-4 focus:ring-primary/20
                    rounded-md
                    text-sm
                    rounded-r-none"
                        name="group-password">
                        <div
                            class="bg-slate-100 flex justify-center items-center
                            text-slate-800 select-none  px-3 py-2
                            border border-solid border-slate-200
                            border-l-0 rounded-r-md">.00</div>
                    </div>
                </div>
            </div>
            <div class="flex flex-col gap-2">
                <div class="flex gap-2 flex-col">
                    <div class="flex flex-1">
                        <div
                            class="bg-slate-100 flex justify-center items-center
                            text-slate-800 select-none px-3 py-2
                            border border-solid border-slate-200
                            border-r-0 rounded-l-md">@</div>
                        <input
                            id="group-price"
                            type="number"
                            placeholder="Price"
                            class="
                            flex flex-1 shadow-sm px-3 py-2
                            border border-solid border-slate-200
                            transition-all duration-200 ease-in-out
                            focus-visible:outline-none focus:ring-4 focus:ring-primary/20
                            rounded-md
                            text-sm
                            rounded-l-none
                            rounded-r-none"
                            name="group-price">
                            <div
                                class="bg-slate-100 flex justify-center items-center
                                text-slate-800 select-none  px-3 py-2
                                border border-solid border-slate-200
                                border-l-0 rounded-r-md">.00</div>
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
            .writeText(formAsString())
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
<div class="flex flex-col gap-3">
    <div class="flex flex-col gap-2">
        <div class="flex gap-2 flex-col">
            <div class="flex flex-1">
                <div
                    class="bg-slate-100 flex justify-center items-center
                    text-slate-800 select-none px-3 py-2
                    border border-solid border-slate-200
                    border-r-0 rounded-l-md">@</div>
                <input
                    id="group-email"
                    type="email"
                    placeholder="Email"
                    class="
                    flex flex-1 shadow-sm px-3 py-2
                    border border-solid border-slate-200
                    transition-all duration-200 ease-in-out
                    focus-visible:outline-none focus:ring-4 focus:ring-primary/20
                    rounded-md
                    text-sm
                    rounded-l-none
    "
                    name="group-email"></div>
            </div>
        </div>
        <div class="flex flex-col gap-2">
            <div class="flex gap-2 flex-col">
                <div class="flex flex-1">
                    <input
                        id="group-password"
                        type="password"
                        placeholder="Password"
                        class="
                    flex flex-1 shadow-sm px-3 py-2
                    border border-solid border-slate-200
                    transition-all duration-200 ease-in-out
                    focus-visible:outline-none focus:ring-4 focus:ring-primary/20
                    rounded-md
                    text-sm
                    rounded-r-none"
                        name="group-password">
                        <div
                            class="bg-slate-100 flex justify-center items-center
                            text-slate-800 select-none  px-3 py-2
                            border border-solid border-slate-200
                            border-l-0 rounded-r-md">.00</div>
                    </div>
                </div>
            </div>
            <div class="flex flex-col gap-2">
                <div class="flex gap-2 flex-col">
                    <div class="flex flex-1">
                        <div
                            class="bg-slate-100 flex justify-center items-center
                            text-slate-800 select-none px-3 py-2
                            border border-solid border-slate-200
                            border-r-0 rounded-l-md">@</div>
                        <input
                            id="group-price"
                            type="number"
                            placeholder="Price"
                            class="
                            flex flex-1 shadow-sm px-3 py-2
                            border border-solid border-slate-200
                            transition-all duration-200 ease-in-out
                            focus-visible:outline-none focus:ring-4 focus:ring-primary/20
                            rounded-md
                            text-sm
                            rounded-l-none
                            rounded-r-none"
                            name="group-price">
                            <div
                                class="bg-slate-100 flex justify-center items-center
                                text-slate-800 select-none  px-3 py-2
                                border border-solid border-slate-200
                                border-l-0 rounded-r-md">.00</div>
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