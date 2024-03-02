"use client"

import React, { useState } from 'react'
import BoxCard from '@/components/card/box-card';
import { CodeBlankSlide } from './code';

const CardBlankSlide = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <BoxCard 
        title="Blank slide over"
        isChecked={isChecked} 
        onCheckboxChange={handleCheckboxChange}>
        <CodeBlankSlide active={isChecked}></CodeBlankSlide>
    </BoxCard>
  )
}

export default CardBlankSlide