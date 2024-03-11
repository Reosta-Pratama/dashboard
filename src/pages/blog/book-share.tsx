"use client"

import { Tooltip } from '@/components/tooltip/basic/components/box'
import { ValueTooltip } from '@/components/tooltip/basic/components/value';
import { useTooltipBasic } from '@/components/tooltip/basic/toggle';
import Link from 'next/link';
import React, { useState } from 'react'
import { FiBookmark, FiShare } from 'react-icons/fi';

export const BookShare = () => {
    const { isActive, handleHover, handleLeave } = useTooltipBasic()

  return (
    <div className="flex justify-between items-center px-5 py-3
        border-y border-solid border-slate-200/60">
        <Tooltip addClass='flex'>
            <Link
                href={''}
                onMouseEnter={() => handleHover('bookmark')}
                onMouseLeave={() => handleLeave('bookmark')}
                className='w-8 h-8 flex justify-center items-center rounded-full
                    bg-white/20 text-slate-500 text-xs
                    border border-solid border-slate-300
                    duration-300 ease-in-out
                    hover:bg-secondary/70 focus:ring-secondary'>
                <FiBookmark></FiBookmark>
            </Link>
            <ValueTooltip addClass='px-5 py-2' bgColor='#00293B' active={isActive('bookmark')}>
                <span className='text-white capitalize'>bookmark</span>
            </ValueTooltip>
        </Tooltip>

        <div className="flex gap-2">
            <Tooltip addClass='flex'>
                <Link
                    href={''}
                    onMouseEnter={() => handleHover('share')}
                    onMouseLeave={() => handleLeave('share')}
                    className='w-8 h-8 flex justify-center items-center rounded-full
                        bg-secondary text-slate-500 text-xs
                        border border-solid border-slate-300
                        duration-300 ease-in-out
                        hover:bg-secondary/70 focus:ring-secondary'>
                    <FiShare></FiShare>
                </Link>
                <ValueTooltip addClass='px-5 py-2' bgColor='#00293B' active={isActive('share')}>
                    <span className='text-white capitalize'>share</span>
                </ValueTooltip>
            </Tooltip>

            <Tooltip addClass='flex'>
                <Link
                    href={''}
                    onMouseEnter={() => handleHover('download')}
                    onMouseLeave={() => handleLeave('download')}
                    className='w-8 h-8 flex justify-center items-center rounded-full
                        bg-primary text-white text-xs
                        border border-solid border-slate-300
                        duration-300 ease-in-out
                        hover:bg-primary/70 focus:ring-primary'>
                    <FiShare></FiShare>
                </Link>
                <ValueTooltip addClass='px-5 py-2' bgColor='#00293B' active={isActive('download')}>
                    <span className='text-white capitalize'>download PDF</span>
                </ValueTooltip>
            </Tooltip>
        </div>
    </div>  
  )
}
