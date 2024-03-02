import React from 'react'
import { BoxAlertBasic } from '../box'

interface AlertPendingProps {
    title: string;
    addClass?: string;
}

export const AlertPending:React.FC<AlertPendingProps> = ({title, addClass}) => {
  return (
    <BoxAlertBasic 
        addClass={`${addClass ?? ''} 
            bg-pending border-pending text-white`}>
            {title}
    </BoxAlertBasic>
  )
}
