"use client"

import React, { useState } from 'react'
import BoxCard from '@/components/card/box-card';
import { CodeFormGroup } from './code';

const CardFormGroup = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <BoxCard 
        title="input Groups"
        isChecked={isChecked} 
        onCheckboxChange={handleCheckboxChange}>
        <CodeFormGroup active={isChecked}/>
    </BoxCard>
  )
}

export default CardFormGroup