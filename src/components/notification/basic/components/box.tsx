import Link from 'next/link';
import React, { useEffect } from 'react'
import { FiX } from 'react-icons/fi';
import useNotification from '../../toggle';

interface NotifBasicProps {
    containerClass?: string;
    message: string;
    notifLink?: string;
}

export const NotifBasic:React.FC<NotifBasicProps> = ({containerClass, message, notifLink}) => {
    const {change, close, handleBtnClick} = useNotification()
    return (
        <>
            {
                close == false ? 
                <div
                    className={`${containerClass} notification fixed z-50 top-4 right-4 
                    transition-all duration-1000 ease-in-out ${change == false ? "opacity-0" : "opacity-100"}`}>
                    <div
                        className="bg-white relative flex justify-between shadow-xl
                                    rounded-lg border border-solid border-slate-200/60
                                    p-5 pr-14">
                        <p className="font-medium">{message}</p>
                        <Link
                            href={notifLink ?? "/"}
                            className="text-primary font-medium capitalize duration-1000 ease-linear hover:text-warning">
                            Review Changes
                        </Link>
                        <button
                            type="button"
                            onClick={() => handleBtnClick()}
                            className="absolute top-0 right-5 h-full flex items-center hover:animate-pulse">
                            <span className="text-xl"><FiX/></span>
                        </button>
                    </div>
                </div>
                : null
            }
        </>
    );
      
}
