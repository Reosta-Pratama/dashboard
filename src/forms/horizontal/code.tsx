"use client"

import React, { useState } from 'react'
import { FiFile } from 'react-icons/fi'
import { Input } from '../regular-form/components/input';
import { LinkBtnPrimary } from '@/components/button/link/style/btn-primary';

interface CodeFormHorizontalProps {
    active: boolean;
}

export const CodeFormHorizontal: React.FC<CodeFormHorizontalProps> = ({active}) => {

  return (
    <div className="p-5">
        {active == false 
            ? 
            <div className='flex flex-col gap-5'>
                <div className='flex flex-col gap-3'>
                    <Input
                        id='input-email-h'
                        title='email'
                        type='email'
                        label={true}
                        placeholder='example@gmail.com'
                        readonly={false}
                        shape='square'
                        sizing='medium'
                        layout='horizontal'>
                    </Input>

                    <Input
                        id='input-password-h'
                        title='password'
                        type='password'
                        label={true}
                        placeholder='secret'
                        readonly={false}
                        shape='square'
                        sizing='medium'
                        layout='horizontal'>
                    </Input>
                </div>

                <div className="w-fit">
                    <LinkBtnPrimary title='login' href='' addClass='px-3 py-2'></LinkBtnPrimary>
                </div>
            </div>
            : <Code/>}
    </div>
  )
}

const formAsString = () => {
    return `
<div class = "flex flex-col gap-5" > <div class="flex flex-col gap-3">
    <div class="flex flex-col gap-2">
        <div class="flex gap-2 items-center">
            <label for="input-email-h" class="capitalize w-20 text-right">email</label>
            <input
                id="input-email-h"
                placeholder="example@gmail.com"
                class="
    flex flex-1 shadow-sm  px-3 py-2
    border border-solid border-slate-200
    transition-all duration-200 ease-in-out
    focus-visible:outline-none focus:ring-4 focus:ring-primary/20

    rounded-md
    text-sm"
                type="email"
                name="input-email-h"></div>
        </div>
        <div class="flex flex-col gap-2">
            <div class="flex gap-2 items-center">
                <label for="input-password-h" class="capitalize w-20 text-right">password</label>
                <input
                    id="input-password-h"
                    placeholder="secret"
                    class="
    flex flex-1 shadow-sm  px-3 py-2
    border border-solid border-slate-200
    transition-all duration-200 ease-in-out
    focus-visible:outline-none focus:ring-4 focus:ring-primary/20

    rounded-md
    text-sm"
                    type="password"
                    name="input-password-h"></div>
            </div>
        </div>
        <div class="w-fit">
            <abg-primary hover:bg-primary/90 focus:ring-primary/20 px-3 py-2" href="">login</a></div></div>
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
<div class = "flex flex-col gap-5" > <div class="flex flex-col gap-3">
<div class="flex flex-col gap-2">
    <div class="flex gap-2 items-center">
        <label for="input-email-h" class="capitalize w-20 text-right">email</label>
        <input
            id="input-email-h"
            placeholder="example@gmail.com"
            class="
flex flex-1 shadow-sm  px-3 py-2
border border-solid border-slate-200
transition-all duration-200 ease-in-out
focus-visible:outline-none focus:ring-4 focus:ring-primary/20

rounded-md
text-sm"
            type="email"
            name="input-email-h"></div>
    </div>
    <div class="flex flex-col gap-2">
        <div class="flex gap-2 items-center">
            <label for="input-password-h" class="capitalize w-20 text-right">password</label>
            <input
                id="input-password-h"
                placeholder="secret"
                class="
flex flex-1 shadow-sm  px-3 py-2
border border-solid border-slate-200
transition-all duration-200 ease-in-out
focus-visible:outline-none focus:ring-4 focus:ring-primary/20

rounded-md
text-sm"
                type="password"
                name="input-password-h"></div>
        </div>
    </div>
    <div class="w-fit">
        <a
`}
                    </code>
                </pre>
            </div>
        </div>
    )
}