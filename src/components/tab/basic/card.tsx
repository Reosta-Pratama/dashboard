"use client"

import React, { useState } from 'react'
import BoxCard from '@/components/card/box-card';
import { CodeBasicTab } from './code';

const CardBasicTab = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <BoxCard 
        title="Basic Tab"
        isChecked={isChecked} 
        onCheckboxChange={handleCheckboxChange}>
        <CodeBasicTab active={isChecked}></CodeBasicTab>
    </BoxCard>
  )
}

export default CardBasicTab