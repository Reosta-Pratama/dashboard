import React, { ReactElement, useState } from 'react'
import { BoxAlertIconDismiss } from '../box'
import { useAlert } from '../toggle';
import { FiX } from 'react-icons/fi';

interface AlertWarningIconDismissProps {
    title: string;
    icon: ReactElement;
    addClass?: string;
}

export const AlertWarningIconDismiss:React.FC<AlertWarningIconDismissProps> = ({title, icon, addClass}) => {
  const {isActive, handleBtnClick} = useAlert()

  return (
    <>
      {isActive == false ? 
        <BoxAlertIconDismiss 
          addClass={`${addClass ?? ''} 
              bg-warning border-warning text-slate-900`}>
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
