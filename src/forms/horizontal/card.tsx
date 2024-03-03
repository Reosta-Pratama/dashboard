"use client"

import React, { useState } from 'react'
import BoxCard from '@/components/card/box-card';
import { CodeFormHorizontal } from './code';

const CardFormHorizontal = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <BoxCard 
        title=" horizontal Form "
        isChecked={isChecked} 
        onCheckboxChange={handleCheckboxChange}>
        <CodeFormHorizontal active={isChecked}/>
    </BoxCard>
  )
}

export default CardFormHorizontal