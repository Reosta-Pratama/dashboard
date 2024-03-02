"use client"

import React, { useState } from 'react'
import BoxCard from '@/components/card/box-card';
import { CodeBasicProgress } from './code';

const CardBasicProgress = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <BoxCard 
        title="Basic Progressbar"
        isChecked={isChecked} 
        onCheckboxChange={handleCheckboxChange}>
        <CodeBasicProgress active={isChecked}></CodeBasicProgress>
    </BoxCard>
  )
}

export default CardBasicProgress