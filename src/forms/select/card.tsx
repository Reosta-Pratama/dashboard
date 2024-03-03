"use client"

import React, { useState } from 'react'
import BoxCard from '@/components/card/box-card';
import { CodeFormSelect } from './code';

const CardFormSelect = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <BoxCard 
        title="select options"
        isChecked={isChecked} 
        onCheckboxChange={handleCheckboxChange}>
        <CodeFormSelect active={isChecked}/>
    </BoxCard>
  )
}

export default CardFormSelect