import React, { ReactElement, useState } from 'react'
import { BoxAlertIconDismiss } from '../box'
import { useAlert } from '../toggle';
import { FiX } from 'react-icons/fi';

interface AlertSuccessIconDismissProps {
    title: string;
    icon: ReactElement;
    addClass?: string;
}

export const AlertSuccessIconDismiss:React.FC<AlertSuccessIconDismissProps> = ({title, icon, addClass}) => {
  const {isActive, handleBtnClick} = useAlert()

  return (
    <>
      {isActive == false ? 
        <BoxAlertIconDismiss 
          addClass={`${addClass ?? ''} 
              bg-success border-success text-slate-900`}>
              <div className="flex items-center gap-2">
                <span className='text-lg'>{icon}</span>
                <span>{title}</span>
              </div>
            <button type='button' className='text-lg' onClick={handleBtnClick}><FiX /></button>
        </BoxAlertIconDismiss>
        : <></>
      }
    </>
  )
}
