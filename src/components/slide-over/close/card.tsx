"use client"

import React, { useState } from 'react'
import BoxCard from '@/components/card/box-card';
import { CodeCloseSlide } from './code';

const CardCloseSlide = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <BoxCard 
        title=" Slide Over With Close Button "
        isChecked={isChecked} 
        onCheckboxChange={handleCheckboxChange}>
        <CodeCloseSlide active={isChecked}></CodeCloseSlide>
    </BoxCard>
  )
}

export default CardCloseSlide