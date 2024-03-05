"use client"

import React, { useState } from 'react'
import BoxCard from '@/components/card/box-card';
import { CodeSliderSingle } from './code';

const CardSliderSingle = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <BoxCard 
        title="Single Item"
        isChecked={isChecked} 
        onCheckboxChange={handleCheckboxChange}>
        <CodeSliderSingle active={isChecked}/>
    </BoxCard>
  )
}

export default CardSliderSingle