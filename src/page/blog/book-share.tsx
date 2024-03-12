"use client"

import BtnBlog from '@/components/button/link-blog/button';
import { Tooltip } from '@/components/tooltip/basic/components/box'
import { ValueTooltip } from '@/components/tooltip/basic/components/value';
import { useTooltipBasic } from '@/components/tooltip/basic/toggle';
import NumberFormat from '@/helpers/convert-zero';
import Link from 'next/link';
import React from 'react'
import { FiBookmark, FiShare } from 'react-icons/fi';

interface BookShareProps{
    index: number | string;
    bookmarkLink: string;
    shareLink: string;
    downloadLink: string;
    border: boolean;
    totalComments?: number;
    totalViews?: number;
    totalLikes?: number;
}

const BookShare: React.FC<BookShareProps> = ({index, bookmarkLink, shareLink, downloadLink, border, totalComments, totalLikes, totalViews}) => {
    const { isActive, handleHover, handleLeave } = useTooltipBasic()
    const activeBorder = border ? "px-5 py-3 border-y border-solid border-slate-200/60" : "";

  return (
    <div className={`flex justify-between items-center ${activeBorder}`}>
        <div className="flex items-center gap-2">
            <Tooltip addClass='flex'>
                <BtnBlog
                    href={bookmarkLink}
                    onMouseEnter={() => handleHover(`bookmark-${index}`)}
                    onMouseLeave={() => handleLeave(`bookmark-${index}`)}
                    addClass="w-8 h-8 bg-white/20 text-slate-500 hover:bg-secondary/70 focus:ring-secondary">
                    <FiBookmark></FiBookmark>
                </BtnBlog>
                <ValueTooltip addClass='px-5 py-2' bgColor='#00293B' active={isActive(`bookmark-${index}`)}>
                    <span className='text-white capitalize'>bookmark</span>
                </ValueTooltip>
            </Tooltip>

            {
                totalComments != null &&
                <span className='flex gap-1'>
                    Comments:
                    <strong className="font-medium"><NumberFormat value={totalComments}></NumberFormat></strong>
                </span>

            }
            {
                totalViews != null &&
                <span className='flex gap-1'>
                    Views:
                    <strong className="font-medium"><NumberFormat value={totalViews}></NumberFormat></strong>
                </span>
            }
        </div>

        <div className="flex items-center gap-2">
            {
                totalLikes != null &&
                <span className='flex gap-1'>
                    Likes:
                    <strong className="font-medium"><NumberFormat value={totalLikes}></NumberFormat></strong>
                </span>
            }

            <Tooltip addClass='flex'>
                <BtnBlog
                    href={shareLink}
                    onMouseEnter={() => handleHover(`share-${index}`)}
                    onMouseLeave={() => handleLeave(`share-${index}`)}
                    addClass="w-8 h-8 bg-secondary text-slate-500 hover:bg-secondary/70 focus:ring-secondary">
                    <FiShare></FiShare>
                </BtnBlog>

                <ValueTooltip addClass='px-5 py-2' bgColor='#00293B' active={isActive(`share-${index}`)}>
                    <span className='text-white capitalize'>share</span>
                </ValueTooltip>
            </Tooltip>

            <Tooltip addClass='flex'>
                <BtnBlog
                    href={shareLink}
                    onMouseEnter={() => handleHover(`download-${index}`)}
                    onMouseLeave={() => handleLeave(`download-${index}`)}
                    addClass="w-8 h-8 bg-primary text-white hover:bg-primary/70 focus:ring-primary">
                    <FiShare></FiShare>
                </BtnBlog>
                <ValueTooltip addClass='px-5 py-2' bgColor='#00293B' active={isActive(`download-${index}`)}>
                    <span className='text-white capitalize'>download PDF</span>
                </ValueTooltip>
            </Tooltip>
        </div>
    </div>  
  )
}

export default BookShare