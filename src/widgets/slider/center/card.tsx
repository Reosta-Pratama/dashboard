"use client"

import React, { useState } from 'react'
import BoxCard from '@/components/card/box-card';
import { CodeSliderCenter } from './code';

const CardSlidercenter = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <BoxCard 
        title="center mode"
        isChecked={isChecked} 
        onCheckboxChange={handleCheckboxChange}>
        <CodeSliderCenter active={isChecked}/>
    </BoxCard>
  )
}

export default CardSlidercenter