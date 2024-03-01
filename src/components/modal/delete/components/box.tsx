import React, { ReactNode } from 'react'
import useModal from '../../toggle';
import { FiXCircle } from 'react-icons/fi';
import { OutlineBtnSecondary } from '@/components/button/outline/style/btn-secondary';
import { LinkBtnDanger } from '@/components/button/link/style/btn-danger';

interface ModalDeleteProps {
    containerClass?: string;
    contentClass?: string;
    deleteLink: string;
    children: ReactNode;
}

export const ModalDelete:React.FC<ModalDeleteProps> = ({containerClass, contentClass, deleteLink, children}) => {
    const {handleBtnClick} = useModal()
    const dataOrder = "deleteModal"
  return (
    <div className={`${containerClass} w-full`}>
        {children}

        <div data-order={dataOrder} 
            className='modal fixed z-50 inset-0 opacity-0 invisible
                transition-all duration-300 ease-in-out'>
            <div className="absolute z-10 inset-0 bg-black/60" 
                onClick={() => handleBtnClick(dataOrder)}></div>

            <div className={`relative z-20 bg-white min-w-[460px] 
                shadow-md rounded-md p-10 mx-auto mt-0
                transition-all duration-300 ease-in-out ${contentClass}`}>
                    <div className="w-full flex flex-col gap-5">
                        <span className='flex justify-center text-6xl text-danger'>
                            <FiXCircle />
                        </span>

                        <div className="flex flex-col gap-2">
                            <h2 className='text-3xl text-center'>Are you sure?</h2>
                            <div className="flex flex-col items-center">
                                <p>Do you really want to delete these records?</p>
                                <p>This process cannot be undone.</p>
                            </div>
                        </div>

                        <div className="flex justify-center items-center gap-2">
                            <OutlineBtnSecondary
                                addClass='min-w-24 px-3 py-2'
                                title='cancel'
                                addType='button'
                                func={() => handleBtnClick(dataOrder)}></OutlineBtnSecondary>

                            <LinkBtnDanger addClass='min-w-24 px-3 py-2' title='delete' href={deleteLink}></LinkBtnDanger>
                        </div>
                    </div>
            </div>
        </div>
    </div>
  )
}
