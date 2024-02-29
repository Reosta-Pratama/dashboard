"use client"

import React, { useState } from 'react'
import BoxCard from '../../card/box-card'
import { CodeIconDismissAlert } from './code';

const IconDismissAlertCard = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <BoxCard 
        title="Icon & Dismiss Alerts"
        isChecked={isChecked} 
        onCheckboxChange={handleCheckboxChange}>
        <CodeIconDismissAlert active={isChecked}/>
    </BoxCard>
  )
}

export default IconDismissAlertCard