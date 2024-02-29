"use client"

import React, { useState } from 'react'
import { FiAlertCircle, FiAlertOctagon, FiAlertTriangle, FiFile } from 'react-icons/fi'
import { BoxCode } from '../../show-code/box';
import { AlertPrimaryIconDismiss } from './style/primary';
import { AlertSecondaryIconDismiss } from './style/secondary';
import { AlertSuccessIconDismiss } from './style/success';
import { AlertWarningIconDismiss } from './style/warning';
import { AlertPendingIconDismiss } from './style/pending';
import { AlertDangerIconDismiss } from './style/danger';
import { AlertDarkIconDismiss } from './style/dark';

interface CodeIconDismissAlertProps {
    active: boolean;
}

export const CodeIconDismissAlert: React.FC<CodeIconDismissAlertProps> = ({active}) => {
  return (
    <div className="p-5">
        {active == false 
            ? 
            <div className='flex flex-col gap-2'>
                <AlertPrimaryIconDismiss title="Awesome alert with icon" icon={<FiAlertCircle />}></AlertPrimaryIconDismiss>
                <AlertSecondaryIconDismiss title="Awesome alert with icon" icon={<FiAlertOctagon />}></AlertSecondaryIconDismiss>
                <AlertSuccessIconDismiss title="Awesome alert with icon" icon={<FiAlertTriangle />}></AlertSuccessIconDismiss>
                <AlertWarningIconDismiss title="Awesome alert with icon" icon={<FiAlertCircle />}></AlertWarningIconDismiss>
                <AlertPendingIconDismiss title="Awesome alert with icon" icon={<FiAlertOctagon />}></AlertPendingIconDismiss>
                <AlertDangerIconDismiss title="Awesome alert with icon" icon={<FiAlertTriangle />}></AlertDangerIconDismiss>
                <AlertDarkIconDismiss title="Awesome alert with icon" icon={<FiAlertCircle />}></AlertDarkIconDismiss>
            </div>
            : <Code/>}
    </div>
  )
}

const alerts = [
    {
      alert: 'Primary',
      title: 'Awesome simple alert',
      icon: <FiAlertCircle></FiAlertCircle>,
      addClass: 'bg-primary border-primary text-white'
    },
    {
      alert: 'Secondary',
      title: 'Awesome simple alert',
      icon: <FiAlertCircle></FiAlertCircle>,
      addClass: 'bg-secondary border-secondary text-slate-500'
    },
    {
      alert: 'Success',
      title: 'Awesome simple alert',
      icon: <FiAlertCircle></FiAlertCircle>,
      addClass: 'bg-success border-success text-slate-900'
    },
    {
      alert: 'Warning',
      title: 'Awesome simple alert',
      icon: <FiAlertCircle></FiAlertCircle>,
      addClass: 'bg-warning border-warning text-slate-900'
    },
    {
      alert: 'Pending',
      title: 'Awesome simple alert',
      icon: <FiAlertCircle></FiAlertCircle>,
      addClass: 'bg-pending border-pending text-white'
    },
    {
      alert: 'Danger',
      title: 'Awesome simple alert',
      icon: <FiAlertCircle></FiAlertCircle>,
      addClass: 'bg-danger border-danger text-white'
    },
    {
      alert: 'Dark',
      title: 'Awesome simple alert',
      icon: <FiAlertCircle></FiAlertCircle>,
      addClass: 'bg-dark border-dark text-white'
    }
];

const alertsAsString = `
  <div className='flex flex-col gap-2'>
    ${alerts.map((item, index) => `
      <div
        key=${index}
            className='bg-white relative z-10 py-4 first:pt-0 border-b border-solid border-slate-200 last:border-none'>
        <div className="w-full px-5 py-4 border border-solid rounded-md ${item.addClass}">
            <div className="flex items-center gap-2">
                <span className='text-lg'>${item.icon}</span>
                <span>${item.title}</span>
            </div>
            <button type='button' className='text-lg' onClick={handleBtnClick}><FiX /></button>
        </div>
      </div>
    `).join('')}
  </div>
`;

const Code = () => {
    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
        navigator
            .clipboard
            .writeText(alertsAsString)
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


            <BoxCode>
                <pre className='px-5 py-4'>
                    <code>
                        {`
<div class="flex flex-col gap-2">
    <div
        class="undefined
bg-primary border-primary text-white w-full px-5 py-4
flex justify-between items-center
border border-solid rounded-md">
        <div class="flex items-center gap-2">
            <span class="text-lg">
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
                    <circle cx="12" cy="12" r="10"></circle>
                    <line x1="12" y1="8" x2="12" y2="12"></line>
                    <line x1="12" y1="16" x2="12.01" y2="16"></line>
                </svg>
            </span>
            <span>Awesome alert with icon</span>
        </div>
        <button type="button" class="text-lg">
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
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
        </button>
    </div>
    <div
        class="undefined
bg-secondary border-secondary text-slate-500 w-full px-5 py-4
flex justify-between items-center
border border-solid rounded-md">
        <div class="flex items-center gap-2">
            <span class="text-lg">
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
                    <polygon
                        points="7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2"></polygon>
                    <line x1="12" y1="8" x2="12" y2="12"></line>
                    <line x1="12" y1="16" x2="12.01" y2="16"></line>
                </svg>
            </span>
            <span>Awesome alert with icon</span>
        </div>
        <button type="button" class="text-lg">
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
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
        </button>
    </div>
    <div
        class="undefined
bg-success border-success text-slate-900 w-full px-5 py-4
flex justify-between items-center
border border-solid rounded-md">
        <div class="flex items-center gap-2">
            <span class="text-lg">
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
                    <path
                        d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path>
                    <line x1="12" y1="9" x2="12" y2="13"></line>
                    <line x1="12" y1="17" x2="12.01" y2="17"></line>
                </svg>
            </span>
            <span>Awesome alert with icon</span>
        </div>
        <button type="button" class="text-lg">
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
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
        </button>
    </div>
    <div
        class="undefined
bg-warning border-warning text-slate-900 w-full px-5 py-4
flex justify-between items-center
border border-solid rounded-md">
        <div class="flex items-center gap-2">
            <span class="text-lg">
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
                    <circle cx="12" cy="12" r="10"></circle>
                    <line x1="12" y1="8" x2="12" y2="12"></line>
                    <line x1="12" y1="16" x2="12.01" y2="16"></line>
                </svg>
            </span>
            <span>Awesome alert with icon</span>
        </div>
        <button type="button" class="text-lg">
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
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
        </button>
    </div>
    <div
        class="undefined
bg-pending border-pending text-white w-full px-5 py-4
flex justify-between items-center
border border-solid rounded-md">
        <div class="flex items-center gap-2">
            <span class="text-lg">
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
                    <polygon
                        points="7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2"></polygon>
                    <line x1="12" y1="8" x2="12" y2="12"></line>
                    <line x1="12" y1="16" x2="12.01" y2="16"></line>
                </svg>
            </span>
            <span>Awesome alert with icon</span>
        </div>
        <button type="button" class="text-lg">
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
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
        </button>
    </div>
    <div
        class="undefined
bg-danger border-danger text-white w-full px-5 py-4
flex justify-between items-center
border border-solid rounded-md">
        <div class="flex items-center gap-2">
            <span class="text-lg">
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
                    <path
                        d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path>
                    <line x1="12" y1="9" x2="12" y2="13"></line>
                    <line x1="12" y1="17" x2="12.01" y2="17"></line>
                </svg>
            </span>
            <span>Awesome alert with icon</span>
        </div>
        <button type="button" class="text-lg">
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
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
        </button>
    </div>
    <div
        class="undefined
bg-dark border-dark text-white w-full px-5 py-4
flex justify-between items-center
border border-solid rounded-md">
        <div class="flex items-center gap-2">
            <span class="text-lg">
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
                    <circle cx="12" cy="12" r="10"></circle>
                    <line x1="12" y1="8" x2="12" y2="12"></line>
                    <line x1="12" y1="16" x2="12.01" y2="16"></line>
                </svg>
            </span>
            <span>Awesome alert with icon</span>
        </div>
        <button type="button" class="text-lg">
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
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
        </button>
    </div>
</div>                       `}
                    </code>
                </pre>
            </BoxCode>
        </div>
    )
}