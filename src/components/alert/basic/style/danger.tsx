import React from 'react'
import { BoxAlertBasic } from '../box'

interface AlertDangerProps {
    title: string;
    addClass?: string;
}

export const AlertDanger:React.FC<AlertDangerProps> = ({title, addClass}) => {
  return (
    <BoxAlertBasic 
        addClass={`${addClass} 
            bg-danger border-danger text-white`}>
            {title}
    </BoxAlertBasic>
  )
}
