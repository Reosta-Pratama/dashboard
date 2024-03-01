import React, { ReactNode } from 'react'
import useModal from '../../toggle';
import { FiXCircle } from 'react-icons/fi';
import { BtnPrimary } from '@/components/button/basic/style/btn-primary';
import Link from 'next/link';

interface ModalWarningProps {
    containerClass?: string;
    contentClass?: string;
    issueLink: string;
    children: ReactNode;
}

export const ModalWarning:React.FC<ModalWarningProps> = ({containerClass, contentClass, issueLink, children}) => {
    const {handleBtnClick} = useModal()
    const dataOrder = "warningModal"
  return (
    <div className={`${containerClass} w-full`}>
        {children}

        <div data-order={dataOrder} 
            className='modal fixed z-50 inset-0 opacity-0 invisible
                transition-all duration-300 ease-in-out'>
            <div className="absolute z-10 inset-0 bg-black/60" 
                onClick={() => handleBtnClick(dataOrder)}></div>

            <div className={`relative z-20 bg-white min-w-[460px] 
                shadow-md rounded-md mx-auto mt-0
                transition-all duration-300 ease-in-out ${contentClass}`}>
                    <div className="w-full flex flex-col gap-5 p-10">
                        <span className='flex justify-center text-6xl text-warning'>
                            <FiXCircle />
                        </span>

                        <div className="flex flex-col gap-2">
                            <h2 className='text-3xl text-center'>Oops...</h2>
                            <div className="flex flex-col items-center">
                                <p>Something went wrong!</p>
                            </div>
                        </div>

                        <div className="flex justify-center">
                            <BtnPrimary
                                addClass='min-w-24 px-3 py-2'
                                title='ok'
                                addType='button'
                                func={() => handleBtnClick(dataOrder)}></BtnPrimary>
                        </div>
                    </div>

                    <div className="border-t border-solid border-slate-200/60 py-5">
                        <Link href={issueLink}
                            className='w-full flex justify-center text-primary duration-300 ease-linear hover:text-warning'>Why do I have this issue?</Link>
                    </div>
            </div>
        </div>
    </div>
  )
}
