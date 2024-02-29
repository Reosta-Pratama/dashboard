import React from 'react'
import { BoxAlertBasic } from '../box'

interface AlertSuccessProps {
    title: string;
    addClass?: string;
}

export const AlertSuccess:React.FC<AlertSuccessProps> = ({title, addClass}) => {
  return (
    <BoxAlertBasic 
        addClass={`${addClass}
            bg-success border-success text-slate-900`}>
            {title}
    </BoxAlertBasic>
  )
}
