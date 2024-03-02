"use client"

import React, { useState } from 'react'
import BoxCard from '@/components/card/box-card';
import { CodeBasicTooltip } from './code';

const CardBasicTooltip = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <BoxCard 
        title="Basic tooltip"
        isChecked={isChecked} 
        onCheckboxChange={handleCheckboxChange}>
        <CodeBasicTooltip active={isChecked}></CodeBasicTooltip>
    </BoxCard>
  )
}

export default CardBasicTooltip