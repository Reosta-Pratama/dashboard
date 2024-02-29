import React from 'react'
import { BoxAlertBasic } from '../box'

interface AlertSecondaryProps {
    title: string;
    addClass?: string;
}

export const AlertSecondary:React.FC<AlertSecondaryProps> = ({title, addClass}) => {
  return (
    <BoxAlertBasic 
        addClass={`${addClass}
            bg-secondary border-secondary text-slate-500`}>
            {title}
    </BoxAlertBasic>
  )
}
