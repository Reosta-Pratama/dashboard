import React from 'react'
import { BoxAlertBasic } from '../box'

interface AlertDarkProps {
    title: string;
    addClass?: string;
}

export const AlertDark:React.FC<AlertDarkProps> = ({title, addClass}) => {
  return (
    <BoxAlertBasic 
        addClass={`${addClass ?? ''} 
            bg-dark border-dark text-white`}>
            {title}
    </BoxAlertBasic>
  )
}
