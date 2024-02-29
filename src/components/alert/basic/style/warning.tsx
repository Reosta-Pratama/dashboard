import React from 'react'
import { BoxAlertBasic } from '../box'

interface AlertWarningProps {
    title: string;
    addClass?: string;
}

export const AlertWarning:React.FC<AlertWarningProps> = ({title, addClass}) => {
  return (
    <BoxAlertBasic 
        addClass={`${addClass} 
            bg-warning border-warning text-slate-900`}>
            {title}
    </BoxAlertBasic>
  )
}
