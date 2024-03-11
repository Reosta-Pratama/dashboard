"use client"

import { DropdownIcon } from '@/components/dropdown/icon/components/box';
import { ChildDropdownIcon } from '@/components/dropdown/icon/components/children';
import { BoxDropdown } from '@/components/dropdown/style/box';
import { useDropdown } from '@/components/dropdown/style/toggle';
import React from 'react'
import { FiEdit, FiMoreVertical, FiTrash } from 'react-icons/fi';

interface EditDeleteProps{
    index: number;
    editLink: string;
    deleteLink: string;
}

export const EditDelete: React.FC<EditDeleteProps> = ({index, editLink, deleteLink}) => {
    const { handleBtnClick } = useDropdown()

  return (
    <div className="flex gap-2">
        <BoxDropdown>
            <button
                type='button'
                onClick={() => handleBtnClick(`edit-delete-blog-${index}`)}
                className='w-8 h-8 flex justify-center items-center rounded-full
                    bg-white/20 text-white text-base
                    duration-300 ease-in-out
                    hover:bg-secondary/70 focus:ring-secondary'>
                    <FiMoreVertical />  
            </button>

            <DropdownIcon 
                    dataOrder={`edit-delete-blog-${index}`}>
                    <ChildDropdownIcon 
                        icon={<FiEdit />}
                        title='share post' 
                        href=''
                        toggleDropdown={() => handleBtnClick(`edit-delete-blog-${index}`)}>
                    </ChildDropdownIcon>
                    <ChildDropdownIcon 
                        icon={<FiTrash />}
                        title='download post' 
                        href=''
                        toggleDropdown={() => handleBtnClick(`edit-delete-blog-${index}`)}>
                    </ChildDropdownIcon>
                </DropdownIcon>
        </BoxDropdown>
    </div>
  )
}
