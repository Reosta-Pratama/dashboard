"use client"

import React, { useState } from 'react'
import BoxCard from '../../card/box-card'
import { CodeBasicAlert } from './code';

const BasicAlertCard = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <BoxCard 
        title="basic Alerts"
        isChecked={isChecked} 
        onCheckboxChange={handleCheckboxChange}>
        <CodeBasicAlert active={isChecked}/>
    </BoxCard>
  )
}

export default BasicAlertCard