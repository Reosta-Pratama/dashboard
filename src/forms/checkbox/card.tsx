"use client"

import React, { useState } from 'react'
import BoxCard from '@/components/card/box-card';
import { CodeFormCheckbox } from './code';

const CardFormCheckbox = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <BoxCard 
        title=" Checkbox & Switch "
        isChecked={isChecked} 
        onCheckboxChange={handleCheckboxChange}>
        <CodeFormCheckbox active={isChecked}/>
    </BoxCard>
  )
}

export default CardFormCheckbox