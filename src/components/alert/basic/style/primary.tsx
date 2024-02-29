import React from 'react'
import { BoxAlertBasic } from '../box'

interface AlertPrimaryProps {
    title: string;
    addClass?: string;
}

export const AlertPrimary:React.FC<AlertPrimaryProps> = ({title, addClass}) => {
  return (
    <BoxAlertBasic 
        addClass={`${addClass} 
            bg-primary border-primary text-white`}>
            {title}
    </BoxAlertBasic>
  )
}
