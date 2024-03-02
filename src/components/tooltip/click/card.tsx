"use client"

import React, { useState } from 'react'
import BoxCard from '@/components/card/box-card';
import { CodeClickTooltip } from './code';

const CardClickTooltip = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <BoxCard 
        title=" On Click Tooltip "
        isChecked={isChecked} 
        onCheckboxChange={handleCheckboxChange}>
        <CodeClickTooltip active={isChecked}></CodeClickTooltip>
    </BoxCard>
  )
}

export default CardClickTooltip