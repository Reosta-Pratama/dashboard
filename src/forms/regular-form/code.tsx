"use client"

import React, { useState } from 'react'
import { FiFile } from 'react-icons/fi'
import { Input } from './components/input';

interface CodeFormRegularProps {
    active: boolean;
}

export const CodeFormRegular: React.FC<CodeFormRegularProps> = ({active}) => {

  return (
    <div className="p-5">
        {active == false 
            ? 
            <ul className='flex flex-col gap-3'>
                <li>
                    <Input
                        id='input-text'
                        title='input text'
                        type='text'
                        label={true}
                        placeholder='Input Text'
                        readonly={false}
                        shape='square'
                        sizing='medium'
                        layout='vertical'>
                    </Input>
                </li>

                <li>
                    <Input
                        id='input-rounded'
                        title='rounded'
                        type='text'
                        label={true}
                        placeholder='Rounded'
                        readonly={false}
                        shape='rounded'
                        sizing='medium'
                        layout='vertical'>
                    </Input>
                </li>

                <li>
                    <Input
                        id='input-help'
                        title='with help'
                        type='text'
                        label={true}
                        placeholder='With help'
                        readonly={false}
                        shape='square'
                        help='info'
                        helpText='Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
                        sizing='medium'
                        layout='vertical'>
                    </Input>
                </li>

                <li>
                    <Input
                        id='input-password'
                        title='password'
                        type='password'
                        label={true}
                        placeholder='Password'
                        readonly={false}
                        shape='square'
                        sizing='medium'
                        layout='vertical'>
                    </Input>
                </li>

                <li>
                    <Input
                        id='input-disabled'
                        title='disabled'
                        type='text'
                        label={true}
                        placeholder='Disabled'
                        readonly={true}
                        shape='square'
                        sizing='medium'
                        layout='vertical'>
                    </Input>
                </li>
            </ul>
            : <Code/>}
    </div>
  )
}

const formAsString = () => {
    return `
<ul class="flex flex-col gap-3">
    <li>
        <div class="flex flex-col gap-2">
            <div class="flex gap-2 flex-col">
                <label for="input-text" class="capitalize text-left">input text</label>
                <input
                    id="input-text"
                    type="text"
                    placeholder="input text"
                    class="
                    flex flex-1 capitalize shadow-sm  px-3 py-2
                    border border-solid border-slate-200
                    transition-all duration-200 ease-in-out
                    focus-visible:outline-none focus:ring-4 focus:ring-primary/20
                    rounded-md
                    text-sm"
                    name="input-text"></div>
            </div>
        </li>
        <li>
            <div class="flex flex-col gap-2">
                <div class="flex gap-2 flex-col">
                    <label for="input-rounded" class="capitalize text-left">rounded</label>
                    <input
                        id="input-rounded"
                        type="text"
                        placeholder="rounded"
                        class="
                        flex flex-1 capitalize shadow-sm  px-3 py-2
                        border border-solid border-slate-200
                        transition-all duration-200 ease-in-out
                        focus-visible:outline-none focus:ring-4 focus:ring-primary/20
                        rounded-full
                        text-sm"
                        name="input-rounded"></div>
                </div>
            </li>
            <li>
                <div class="flex flex-col gap-2">
                    <div class="flex gap-2 flex-col">
                        <label for="input-help" class="capitalize text-left">with help</label>
                        <input
                            id="input-help"
                            type="text"
                            placeholder="with help"
                            class="
                            flex flex-1 capitalize shadow-sm  px-3 py-2
                            border border-solid border-slate-200
                            transition-all duration-200 ease-in-out
                            focus-visible:outline-none focus:ring-4 focus:ring-primary/20
                            rounded-md
                            text-sm"
                            name="input-help"></div>
                        <p class="text-xs text-slate-500">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                    </div>
            /li>
                <li>
                    <div class="flex flex-col gap-2">
                        <div class="flex gap-2 flex-col">
                            <label for="input-password" class="capitalize text-left">password</label>
                            <input
                                id="input-password"
                                type="password"
                                placeholder="password"
                                class="
                                flex flex-1 capitalize shadow-sm  px-3 py-2
                                border border-solid border-slate-200
                                transition-all duration-200 ease-in-out
                                focus-visible:outline-none focus:ring-4 focus:ring-primary/20
                                rounded-md
                                text-sm"
                                name="input-password"></div>
                        </div>
                    </li>
                    <li>
                        <div class="flex flex-col gap-2">
                            <div class="flex gap-2 flex-col">
                                <label for="input-disabled" class="capitalize text-left">disabled</label>
                                <input
                                    id="input-disabled"
                                    type="text"
                                    placeholder="disabled"
                                    readonly=""
                                    class="
                                    flex flex-1 capitalize shadow-sm  px-3 py-2
                                    border border-solid border-slate-200
                                    transition-all duration-200 ease-in-out
                                    focus-visible:outline-none focus:ring-4 focus:ring-primary/20
                                    bg-slate-100
                                    rounded-md
                                    text-sm"
                                    name="input-disabled"></div>
                            </div>
                        </li>
                    </ul>
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
<ul class="flex flex-col gap-3">
<li>
    <div class="flex flex-col gap-2">
        <div class="flex gap-2 flex-col">
            <label for="input-text" class="capitalize text-left">input text</label>
            <input
                id="input-text"
                type="text"
                placeholder="input text"
                class="
                flex flex-1 capitalize shadow-sm  px-3 py-2
                border border-solid border-slate-200
                transition-all duration-200 ease-in-out
                focus-visible:outline-none focus:ring-4 focus:ring-primary/20
                rounded-md
                text-sm"
                name="input-text"></div>
        </div>
    </li>
    <li>
        <div class="flex flex-col gap-2">
            <div class="flex gap-2 flex-col">
                <label for="input-rounded" class="capitalize text-left">rounded</label>
                <input
                    id="input-rounded"
                    type="text"
                    placeholder="rounded"
                    class="
                    flex flex-1 capitalize shadow-sm  px-3 py-2
                    border border-solid border-slate-200
                    transition-all duration-200 ease-in-out
                    focus-visible:outline-none focus:ring-4 focus:ring-primary/20
                    rounded-full
                    text-sm"
                    name="input-rounded"></div>
            </div>
        </li>
        <li>
            <div class="flex flex-col gap-2">
                <div class="flex gap-2 flex-col">
                    <label for="input-help" class="capitalize text-left">with help</label>
                    <input
                        id="input-help"
                        type="text"
                        placeholder="with help"
                        class="
                        flex flex-1 capitalize shadow-sm  px-3 py-2
                        border border-solid border-slate-200
                        transition-all duration-200 ease-in-out
                        focus-visible:outline-none focus:ring-4 focus:ring-primary/20
                        rounded-md
                        text-sm"
                        name="input-help"></div>
                    <p class="text-xs text-slate-500">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                </div>
        /li>
            <li>
                <div class="flex flex-col gap-2">
                    <div class="flex gap-2 flex-col">
                        <label for="input-password" class="capitalize text-left">password</label>
                        <input
                            id="input-password"
                            type="password"
                            placeholder="password"
                            class="
                            flex flex-1 capitalize shadow-sm  px-3 py-2
                            border border-solid border-slate-200
                            transition-all duration-200 ease-in-out
                            focus-visible:outline-none focus:ring-4 focus:ring-primary/20
                            rounded-md
                            text-sm"
                            name="input-password"></div>
                    </div>
                </li>
                <li>
                    <div class="flex flex-col gap-2">
                        <div class="flex gap-2 flex-col">
                            <label for="input-disabled" class="capitalize text-left">disabled</label>
                            <input
                                id="input-disabled"
                                type="text"
                                placeholder="disabled"
                                readonly=""
                                class="
                                flex flex-1 capitalize shadow-sm  px-3 py-2
                                border border-solid border-slate-200
                                transition-all duration-200 ease-in-out
                                focus-visible:outline-none focus:ring-4 focus:ring-primary/20
                                bg-slate-100
                                rounded-md
                                text-sm"
                                name="input-disabled"></div>
                        </div>
                    </li>
                </ul>
`}
                    </code>
                </pre>
            </div>
        </div>
    )
}