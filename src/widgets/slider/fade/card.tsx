"use client"

import React, { useState } from 'react'
import BoxCard from '@/components/card/box-card';
import { CodeSliderFade } from './code';

const CardSliderfade = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <BoxCard 
        title=" Fade Animation "
        isChecked={isChecked} 
        onCheckboxChange={handleCheckboxChange}>
        <CodeSliderFade active={isChecked}/>
    </BoxCard>
  )
}

export default CardSliderfade