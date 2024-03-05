"use client"

import React, { useState } from 'react'
import BoxCard from '@/components/card/box-card';
import { CodeImageZoom } from './code';

const CardImageZoom = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <BoxCard 
        title="image"
        isChecked={isChecked} 
        onCheckboxChange={handleCheckboxChange}>
        <CodeImageZoom active={isChecked}/>
    </BoxCard>
  )
}

export default CardImageZoom