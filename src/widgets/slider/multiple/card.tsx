"use client"

import React, { useState } from 'react'
import BoxCard from '@/components/card/box-card';
import { CodeSliderMultiple } from './code';

const CardSliderMultiple = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <BoxCard 
        title="multiple Item"
        isChecked={isChecked} 
        onCheckboxChange={handleCheckboxChange}>
        <CodeSliderMultiple active={isChecked}/>
    </BoxCard>
  )
}

export default CardSliderMultiple