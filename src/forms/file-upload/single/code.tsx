"use client"

import React, { useState } from 'react'
import { FiFile } from 'react-icons/fi'
import { FileUpload } from '../components/file-upload';

interface CodeFileUploadProps {
    active: boolean;
}

export const CodeFileUpload: React.FC<CodeFileUploadProps> = ({active}) => {

  return (
    <div className="p-5">
        {active == false 
            ? 
            <FileUpload
                id='file-upload-1'
                name='file-upload-1'
                desc='This is just a demo dropzone. Selected files are not actually uploaded.'
                imgSize={1}
                imgType={["png", "jpeg", "jpg"]}
                imgMultiple={false}>
            </FileUpload>
            : <Code/>}
    </div>
  )
}

const formAsString = () => {
    return `
<div class="flex flex-col gap-2">
    <div
        class="relative w-full min-h-[150px] flex rounded-md p-5   border-2 border-dashed border-black/60">
        <div class="absolute inset-0 w-full h-full"></div>
        <label for="file-upload-1" class="w-full h-full cursor-pointer">
            <div class="flex flex-col items-center text-center gap-0 my-[42px]">
                <p class="text-lg font-medium">Drop files here or click to upload</p>
                <p class="text-gray-600">This is just a demo dropzone. Selected files are not actually uploaded.</p>
            </div>
        </label>
        <input type="file" id="file-upload-1" class="hidden" name="file-upload-1">
            <ul class="relative z-10 flex flex-wrap gap-4"></ul>
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
<div class="flex flex-col gap-2">
    <div
        class="relative w-full min-h-[150px] flex rounded-md p-5   border-2 border-dashed border-black/60">
        <div class="absolute inset-0 w-full h-full"></div>
        <label for="file-upload-1" class="w-full h-full cursor-pointer">
            <div class="flex flex-col items-center text-center gap-0 my-[42px]">
                <p class="text-lg font-medium">Drop files here or click to upload</p>
                <p class="text-gray-600">This is just a demo dropzone. Selected files are not actually uploaded.</p>
            </div>
        </label>
        <input type="file" id="file-upload-1" class="hidden" name="file-upload-1">
            <ul class="relative z-10 flex flex-wrap gap-4"></ul>
    </div>
</div>
`}
                    </code>
                </pre>
            </div>
        </div>
    )
}