"use client"

import { LinkBtnPrimary } from '@/components/button/link/style/btn-primary'
import { BtnMedium } from '@/components/button/sizes/style/mediumBtn'
import { DropdownIcon } from '@/components/dropdown/icon/components/box'
import { ChildDropdownIcon } from '@/components/dropdown/icon/components/children'
import { BoxDropdown } from '@/components/dropdown/style/box'
import { useDropdown } from '@/components/dropdown/style/toggle'
import React from 'react'
import { FiDownload, FiPlus, FiUpload } from 'react-icons/fi'

interface OptionBlogProps {
    addLink: string;
    shareLink: string;
    downloadLink: string
}

const OptionBlog: React.FC<OptionBlogProps> = ({addLink, shareLink, downloadLink}) => {
    const { handleBtnClick } = useDropdown()

  return (
    <div className="flex gap-2">
        <LinkBtnPrimary 
            title={'add new post'} 
            href={addLink ?? "#"}
            addClass='px-3 py-2'>
        </LinkBtnPrimary>

        <BoxDropdown>
            <BtnMedium 
                addClass='h-full flex items-center text-base bg-white hover:bg-secondary/70 focus:ring-secondary'
                title={<FiPlus />} 
                addType='button'
                func={() => handleBtnClick('blogDrop')}>
            </BtnMedium>

            <DropdownIcon 
                    dataOrder='blogDrop'>
                    <ChildDropdownIcon 
                        icon={<FiUpload />}
                        title='share post' 
                        href={shareLink ?? "#"}
                        toggleDropdown={() => handleBtnClick('blogDrop')}>
                    </ChildDropdownIcon>
                    <ChildDropdownIcon 
                        icon={<FiDownload />}
                        title='download post' 
                        href={downloadLink ?? "#"}
                        toggleDropdown={() => handleBtnClick('blogDrop')}>
                    </ChildDropdownIcon>
                </DropdownIcon>
        </BoxDropdown>
    </div>
  )
}

export default OptionBlog