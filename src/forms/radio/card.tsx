"use client"

import React, { useState } from 'react'
import BoxCard from '@/components/card/box-card';
import { CodeFormRadio } from './code';

const CardFormRadio = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <BoxCard 
        title="radio"
        isChecked={isChecked} 
        onCheckboxChange={handleCheckboxChange}>
        <CodeFormRadio active={isChecked}/>
    </BoxCard>
  )
}

export default CardFormRadio