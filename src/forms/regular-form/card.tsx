"use client"

import React, { useState } from 'react'
import BoxCard from '@/components/card/box-card';
import { CodeFormRegular } from './code';

const CardFormRegular = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <BoxCard 
        title="input"
        isChecked={isChecked} 
        onCheckboxChange={handleCheckboxChange}>
        <CodeFormRegular active={isChecked}/>
    </BoxCard>
  )
}

export default CardFormRegular