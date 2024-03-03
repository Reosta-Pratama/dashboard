"use client"

import React, { useState } from 'react'
import { FiFile } from 'react-icons/fi'
import { Checkbox } from './components/checkbox';
import { Switch } from './components/switch';

interface CodeFormRegularProps {
    active: boolean;
}

export const CodeFormRegular: React.FC<CodeFormRegularProps> = ({active}) => {
    const [isChecked, setIsChecked] = useState(false);

    const handleSwitchChange = (newValue: boolean) => {
        setIsChecked(newValue);
    };
    
  return (
    <div className="p-5">
        {active == false 
            ? 
            <div className="flex flex-col gap-5">
                <div className="flex flex-col gap-2">
                    <p className='font-medium'>Checkbox</p>
                    <ul className="flex flex-col gap-2">
                        <li>
                            <Checkbox 
                                id="check-1"
                                title='Chris Evans'
                                value='chris-evans'>
                            </Checkbox>
                        </li>

                        <li>
                            <Checkbox 
                                id="check-2"
                                title='Liam Neeson'
                                value='liam-neeson'>
                            </Checkbox>
                        </li>

                        <li>
                            <Checkbox 
                                id="check-3"
                                title='Daniel Craig'
                                value='daniel-craig'>
                            </Checkbox>
                        </li>
                    </ul>
                </div>

                <div className="flex flex-col gap-2">
                    <p className='font-medium'>Switch</p>
                    <Switch
                        id='switch-1'
                        label="right"
                        title='Default switch checkbox input'
                        onSwitchChange={handleSwitchChange}>
                    </Switch>
                </div>
            </div>
            : <Code/>}
    </div>
  )
}

const formAsString = () => {
    return `
 <div class="flex flex-col gap-5">
    <div class="flex flex-col gap-2">
        <p class="font-medium">Checkbox</p>
        <ul class="flex flex-col gap-2">
            <li>
                <div class="flex flex-col gap-2">
                    <div class="flex items-center gap-2">
                        <div class="relative flex w-4 h-4">
                            <input
                                id="check-1"
                                type="checkbox"
                                class="w-full h-full appearance-none shadow-sm rounded
    border border-solid border-slate-200
    transition-all duration-200 ease-in-out
    focus-visible:outline-none focus:ring-4 focus:ring-primary/20"
                                name="check-1"
                                value="chris-evans"></div>
                            <label for="check-1" class="capitalize select-none">Chris Evans</label>
                        </div>
                    </div>
                </li>
                <li>
                    <div class="flex flex-col gap-2">
                        <div class="flex items-center gap-2">
                            <div class="relative flex w-4 h-4">
                                <input
                                    id="check-2"
                                    type="checkbox"
                                    class="w-full h-full appearance-none shadow-sm rounded
    border border-solid border-slate-200
    transition-all duration-200 ease-in-out
    focus-visible:outline-none focus:ring-4 focus:ring-primary/20"
                                    name="check-2"
                                    value="liam-neeson"></div>
                                <label for="check-2" class="capitalize select-none">Liam Neeson</label>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div class="flex flex-col gap-2">
                            <div class="flex items-center gap-2">
                                <div class="relative flex w-4 h-4">
                                    <input
                                        id="check-3"
                                        type="checkbox"
                                        class="w-full h-full appearance-none shadow-sm rounded
    border border-solid border-slate-200
    transition-all duration-200 ease-in-out
    focus-visible:outline-none focus:ring-4 focus:ring-primary/20"
                                        name="check-3"
                                        value="daniel-craig"></div>
                                    <label for="check-3" class="capitalize select-none">Daniel Craig</label>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
                <div class="flex flex-col gap-2">
                    <p class="font-medium">Switch</p>
                    <div>
                        <label for="switch-1" class="cursor-pointer flex items-center gap-3">
                            <div
                                class="relative w-[38px] h-6 rounded-full shadow-sm
border border-solid duration-300 ease-in-out
bg-primary border-primary">
                                <div
                                    class="bg-white absolute top-1/2 -translate-y-1/2 mx-[2px]
w-5 h-5 rounded-full duration-300 ease-linear
right-0"></div>
                            </div>
                            <p class="select-none">Default switch checkbox input</p>
                        </label>
                        <input id="switch-1" type="checkbox" class="hidden"></div>
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
<div class="flex flex-col gap-5">
<div class="flex flex-col gap-2">
    <p class="font-medium">Checkbox</p>
    <ul class="flex flex-col gap-2">
        <li>
            <div class="flex flex-col gap-2">
                <div class="flex items-center gap-2">
                    <div class="relative flex w-4 h-4">
                        <input
                            id="check-1"
                            type="checkbox"
                            class="w-full h-full appearance-none shadow-sm rounded
border border-solid border-slate-200
transition-all duration-200 ease-in-out
focus-visible:outline-none focus:ring-4 focus:ring-primary/20"
                            name="check-1"
                            value="chris-evans"></div>
                        <label for="check-1" class="capitalize select-none">Chris Evans</label>
                    </div>
                </div>
            </li>
            <li>
                <div class="flex flex-col gap-2">
                    <div class="flex items-center gap-2">
                        <div class="relative flex w-4 h-4">
                            <input
                                id="check-2"
                                type="checkbox"
                                class="w-full h-full appearance-none shadow-sm rounded
border border-solid border-slate-200
transition-all duration-200 ease-in-out
focus-visible:outline-none focus:ring-4 focus:ring-primary/20"
                                name="check-2"
                                value="liam-neeson"></div>
                            <label for="check-2" class="capitalize select-none">Liam Neeson</label>
                        </div>
                    </div>
                </li>
                <li>
                    <div class="flex flex-col gap-2">
                        <div class="flex items-center gap-2">
                            <div class="relative flex w-4 h-4">
                                <input
                                    id="check-3"
                                    type="checkbox"
                                    class="w-full h-full appearance-none shadow-sm rounded
border border-solid border-slate-200
transition-all duration-200 ease-in-out
focus-visible:outline-none focus:ring-4 focus:ring-primary/20"
                                    name="check-3"
                                    value="daniel-craig"></div>
                                <label for="check-3" class="capitalize select-none">Daniel Craig</label>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
            <div class="flex flex-col gap-2">
                <p class="font-medium">Switch</p>
                <div>
                    <label for="switch-1" class="cursor-pointer flex items-center gap-3">
                        <div
                            class="relative w-[38px] h-6 rounded-full shadow-sm
border border-solid duration-300 ease-in-out
bg-primary border-primary">
                            <div
                                class="bg-white absolute top-1/2 -translate-y-1/2 mx-[2px]
w-5 h-5 rounded-full duration-300 ease-linear
right-0"></div>
                        </div>
                        <p class="select-none">Default switch checkbox input</p>
                    </label>
                    <input id="switch-1" type="checkbox" class="hidden"></div>
                </div>
            </div>
`}
                    </code>
                </pre>
            </div>
        </div>
    )
}